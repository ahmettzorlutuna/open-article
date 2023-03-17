const fs = require('fs')
const flatted = require('flatted') 

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.name
    }
    save(objects){
        return new Promise((resolve, reject)=>{
            fs.writeFile(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2),(err)=>{
                if (err) reject(err)
                resolve()
            })
        })
    }
    load(){
        //(err) is a callback function which is if there is a err return err if not resolve the data
        return new Promise((resolve,reject)=>{
            fs.readFile(`${__dirname}/${this.filename}.json`,'utf-8',(err,file)=>{  
                if(err) reject(err)
                const objects = flatted.parse(file)
                resolve(objects.map(this.model.create))
            })
        })
    }
    async insert(object){
        const objects = await this.load()
        if(!(object instanceof this.model)){ //İf incoming object is not instance of this.model we created a new object of this model and pushed into the objects
            object = this.model.create(object)
            objects.push(object)
        }
        return this.save(objects)
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
    async findByName(name){
        const data = await this.load()
        return data.find(o => o.name == name)
    }
    async find(userId){
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