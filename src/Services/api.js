import axios from 'axios';

export default axios.create({
  baseURL: 'https://mks-frontend-challenge-api.herokuapp.com/api/v1',
});
