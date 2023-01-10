const Order = require('./order')
const uuid = require('uuid')

class Customer{
    constructor(name,table, id = uuid.v4()){
        this.id = id
        this.name = name
        this.table = table
        this.orders = []
    }
    order(name,category,price,table){
        const order = new Order(name,category,price,this.table)
        this.orders.push(order) 
        return order
    }
    calculate(){
        let total = 0
        for (let i = 0; i < this.orders.length; i++) {  
            total = total + this.orders[i].price 
        }
        console.log(`${this.name}'s total price is ${total}`)
    }
}

module.exports = Customer