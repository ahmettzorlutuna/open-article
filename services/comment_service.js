const BaseService = require("./base_service");
const Comment = require("../models/comment");
const user_service = require("./user_service");

class CommentService extends BaseService {
  async makeComment(postId, userId, commentName, commentContent) {
    const user = await user_service.find(userId);
    const post = await user_service.findPostById(postId); //Burası düzeltilecek. findPostById kullanılmayacak.
    const comment = await this.insert({user, commentName, commentContent})
    post.comment.push(comment)
    await post.save()
    return comment
  }
}

module.exports = new CommentService(Comment);
