const fs = require('fs')
const flatted = require('flatted') 

class BaseDatabase{
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
    async remove(index){
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
    async update(object){
        const objects = await this.load()
        const index = objects.findIndex(o => o.userId == object.userId)
        objects.splice(index, 1, object)
        return this.save(objects)
    }
    async find(userId){
        return this.model.find(userId)
        const objects = await this.load()
        return objects.find(o => o.userId == userId)
    }
    async findPostById(postId){
        const objects = await this.load()
        for (let i = 0; i < objects.length; i++) {
            const post = objects[i].posts;
            for (let j = 0; j < post.length; j++) {
                const currenPost = post[j];
                if(currenPost.postId == postId){
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
                const currenPost = posts[j];
                if(currenPost.postId == post.postId){
                    posts.splice(j, 1, post)
                    return this.save(objects)
                }
                
            }
        }
    }
}

module.exports = BaseDatabase