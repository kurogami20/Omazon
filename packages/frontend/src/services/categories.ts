import instance from '../utils/axios';

const cateFetch = {
  async all() {
    const response = await instance.get('/api/categories');
    if (!response) {
      throw new Error('pb dans la bd');
    }
    return response.data;
  },
};

export default cateFetch;
