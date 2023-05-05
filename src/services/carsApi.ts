import axios from "axios";

const carsApi = axios.create({
	baseURL: "https://kenzie-kars.herokuapp.com/cars",
	timeout: 5000
});

export default carsApi;
