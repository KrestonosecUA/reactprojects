import axios from "axios";
import {spaceXURL} from "../constants/urls";

const axiosServices = axios.create({baseURL: spaceXURL})

export {
    axiosServices
}