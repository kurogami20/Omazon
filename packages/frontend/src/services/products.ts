import instance from '../utils/axios';

const prodFetch = {
  async all() {
    const response = await instance.get('/api/products');
    if (!response) {
      throw new Error('pb dans la bd');
    }
    return response.data;
  },
};

export default prodFetch;
