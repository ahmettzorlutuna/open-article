const BaseService = require("./base_service");
const Post = require("../models/post");
const user_service = require("./user_service");

class PostService extends BaseService {
  async createPost(userId, name, content) {
    const user = await user_service.find(userId);
    user.populate('posts')
    const post = await user.createPost({ name, content });
    await user.save();
    await post.save();
    return post;
  }

  async removePostById(postId) {
    return this.removeByObjectId(postId);
  }
  async findPostById(postId) {
    return this.findByObjectId(postId);
  }

  async likePost(userId, postId) {
    const user = await user_service.find(userId);
    const post = await this.find(postId);
    user.likePost(post);
    await post.save();
    return post;
  }

  async dislikePost(userId, postId) {
    const user = await user_service.find(userId);
    const post = await this.find(postId);
    user.dislikePost(post);
    await post.save();
    return post;
  }
}

module.exports = new PostService(Post);
