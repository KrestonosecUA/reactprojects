import axios from "axios";
import {baseURL} from "../contents/urls";

const apiService = axios.create({baseURL});

export {
    apiService
}