import { axiosInstance } from "./AxiosService";

class PostsService {

    async getAll() {
        const response = await axiosInstance.get('/posts');
        return response.data;
    }

    async add(post) {
        const response = await axiosInstance.post('/posts', post)
        return response;
    }

}

export default new PostsService();
