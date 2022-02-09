import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
    // Get Posts
    static getPosts() {
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then(res => {
                    const data = res.data;
                    resolve(data.map(post => ({ ...post, createdAt: new Date(post.createdAt) })));
                })
                .catch(err => reject(err))
    });
    }

    // Create Post
    static insertPost(post) {
        return axios.post(url, post);
    }

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;
