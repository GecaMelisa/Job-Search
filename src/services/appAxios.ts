import axios from 'axios';
import { BASE_URL } from '../constants';


const appAxios = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});


export default appAxios;