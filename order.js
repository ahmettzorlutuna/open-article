const uuid = require('uuid')

class Order{
    constructor(name,category,price,table){
        this.name = name
        this.category = category
        this.price = price
        this.table = table
    }
}

module.exports = Order