import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:5001/e-challenge-96d8f/us-central1/api'
})

export default instance;