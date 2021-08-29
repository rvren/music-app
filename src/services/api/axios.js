import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

const success = (response) => {
	return response.data;
};

const error = async (error) => {
	throw error;
};

Axios.interceptors.response.use(success, error);

export default Axios;
