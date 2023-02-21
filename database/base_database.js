const fs = require('fs')
const flatted = require('flatted') 

class BaseDatabase{
    constructor(model){
        this.model = model
        this.filename = model.name
    }
    save(objects){
        //Circular Dependency olmadığı için JSON stringify kullandım
        fs.writeFileSync(`${__dirname}/${this.filename}.json`, JSON.stringify(objects, null, 2))
    }
    load(){
        const data = JSON.parse(fs.readFileSync(`${__dirname}/${this.filename}.json`, 'utf-8'))
        return data.map(this.model.create)
    }
    insert(object){
        const objects = this.load()
        objects.push(object)
        this.save(objects)
    }
    remove(index){
        const objects = this.load()
        objects.splice(index, 1)
        this.save(objects)
    }
    findBy(prop, value){
        return this.load().find(o => o[prop] == value)
    }
    update(object){
        const objects = this.load()
        const index = objects.findIndex(o => o.id == object.id)
        objects.splice(index, 1, object)
        this.save(objects)
    }
    findByName(name){
        const data = this.load()
        return data.find(o => o.name == name)
    }
}

module.exports = BaseDatabase