import axios from 'axios';
axios.defaults.withCredentials = true;

export default axios.create({
    baseURL: "https://alchemistserver.herokuapp.com/"
})