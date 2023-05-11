import axios from "axios";

const articles_axios = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/articles/'
})
