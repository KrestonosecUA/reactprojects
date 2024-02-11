import {axiosServices} from "./axiosServices";
import {urls} from "../constants/urls";


const launchService ={
    getAll: () => axiosServices(urls.launches.base),
    //getById: () => axiosServices(urls.launches.byId())
}

export {
    launchService
}