const BaseService = require("./base_service");
const Post = require("../models/post");
const user_service = require("./user_service");

class PostService extends BaseService {
    async createPost(userId, name, content){
        const user = await user_service.find(userId);
        const post = user.createPost({name,content})
        this.insert(post)
        await user.save()
        return post
    }
}

module.exports = new PostService(Post);
