/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
/* eslint-disable default-case */

const initialState = {
  products: [],
  total: 0,
};

export default (state = initialState, action) => {
  const products = [...state.products];
  let { total } = state;

  switch (action.type) {
    case 'ADD_PRODUCT':
      const { id } = action.payload.product;

      const index = products.findIndex((item) => item.id === id);

      if (index > -1) {
        products[index].qtd += action.payload.qtd;
        total += Number(action.payload.product.price);
      } else {
        products.push({
          ...action.payload.product,
          qtd: action.payload.qtd,
        });
        total += Number(action.payload.product.price);
      }
      return { ...state, products, total };

    case 'CHANGE_PRODUCT':
      if (products[action.payload.key]) {
        switch (action.payload.type) {
          case '-':
            products[action.payload.key].qtd--;
            total -= Number(products[action.payload.key].price);
            if (products[action.payload.key].qtd <= 0) {
              const newProduct = products.filter((_, position) => position !== action.payload.key);
              return { ...state, products: newProduct, total };
            }
            break;
          case '+':
            products[action.payload.key].qtd++;
            total += Number(products[action.payload.key].price);
            break;
          case 'remove':
            total -= Number(products[action.payload.key].price) * products[action.payload.key].qtd;
            const newProduct = products.filter((_, position) => position !== action.payload.key);
            return { ...state, products: newProduct, total };
        }
      }

      return { ...state, products, total };
  }

  return state;
};
