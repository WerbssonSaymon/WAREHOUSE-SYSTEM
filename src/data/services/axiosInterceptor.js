import axios from 'axios';

const axiosInterceptor = (navigate) => {

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        navigate('/'); 
      }
      return Promise.reject(error); 
    }
  );

  return axios;
};

export default axiosInterceptor;
