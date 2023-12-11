class BaseService{
    constructor(model){
        this.model = model
    }
    save(objects){
        return this.model.insert(objects)
    }
    load(){
        return this.model.find({})
    }
    async insert(object){
        return await this.model.create(object)
    }
    async removeById(id){
        return this.model.findByIdAndRemove({_id: id})
    }
    async removeByObjectId(id){
        return this.model.deleteOne({ObjectId: id})
    }
    async findByObjectId(id){
        return this.model.find({_id: id})
    }
    async remove(){
        const objects = await this.load()
        objects.splice(index, 1)
        return this.save(objects)
    }
    async removeBy(property, value){
        const objects = await this.load()
        const index = objects.findIndex(o => o[property] == value)
        objects.splice(index, 1)
        return this.save(objects)
    }
    async findBy(prop, value){
        return (await this.load()).find(o => o[prop] == value)
    }
    async update(id, object){
        return this.model.findByIdAndUpdate(id, object)
    }
    async updatePostById(name, updatedPost){
        try {
            return this.model.updateOne({ 'posts._id': name }, { $set: { 'posts.$': updatedPost } });
        } catch (error) {
            console.error(error);
            throw new Error('Failed to update post in service');
        }
    }
    async find(id){
        return this.model.findById(id)
    }
    async query(obj){
        return this.model.find(obj)
    }
    async findPostById(postId){
        const objects = await this.load()
        for (let i = 0; i < objects.length; i++) {
            const post = objects[i].posts;
            for (let j = 0; j < post.length; j++) {
                const currenPost = post[j];
                if(currenPost._id == postId){
                    return currenPost
                }
            }
            
        }
    }
    async updatePost(post){
        const objects = await this.load()
        for (let i = 0; i < objects.length; i++) {
            const posts = objects[i].posts;
            for (let j = 0; j < posts.length; j++) {
                const currentPost = posts[j];
                if(currentPost._id == post._id){
                    posts.splice(j, 1, post)
                    return this.save(objects)
                }
                
            }
        }
    }
}

module.exports = BaseService