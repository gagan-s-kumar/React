import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 857f89c5e08f3bffc191f5cadf85d2ad38f22ba0e425ec339aa90d3d15e0dc12'
  }
});
