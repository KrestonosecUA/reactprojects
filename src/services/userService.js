import {apiService} from "./apiService";
import {urls} from "../contants/urls";

const userService = {
    getAll: () => apiService.get(urls.users.base),
    create: (data) => apiService.post(urls.users.base),
    getById: (id) => apiService(urls.users.byId(id))
}

export {
    userService
}