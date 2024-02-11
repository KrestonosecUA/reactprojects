import {axiosService} from "./axiosServices";
import {urls} from "../constants/urls";

const  postService = {
    getAll:() => axiosService(urls.posts.base),
    getTrackById:() => axiosService(urls.posts.byId())
}

export {
    postService
}