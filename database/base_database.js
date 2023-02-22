const fs = require('fs')
const flatted = require('flatted') 

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.name
    }
    save(objects){
        return new Promise((resolve, reject)=>{
            fs.writeFile(`${__dirname}/${this.filename}.json`, JSON.stringify(objects, null, 2),(err)=>{
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
                const objects = JSON.parse(file)
                resolve(objects.map(this.model.create))
            })
        })
    }
    async insert(object){
        const objects = await this.load()
        objects.push(object)
        return this.save(objects)
    }
    async remove(index){
        const objects = await this.load()
        objects.splice(index, 1)
        return this.save(objects)
    }
    async findBy(prop, value){
        return (await this.load()).find(o => o[prop] == value)
    }
    async update(object){
        const objects = await this.load()
        const index = objects.findIndex(o => o.id == object.id)
        objects.splice(index, 1, object)
        return this.save(objects)
    }
    async findByName(name){
        const data = await this.load()
        return data.find(o => o.name == name)
    }
}

module.exports = BaseDatabase