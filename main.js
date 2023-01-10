const Customer = require('./customer')
const Waiter = require('./waiter')
const {customerDatabase, waiterDatabase}  = require('./database');

function printOrder(order){
    console.log(`${order.table}'s order name is ${order.name} and price ${order.price}`)
}

function printCustomerOrders(customer){
    customer.orders.forEach(printOrder);
}


const ahmet = new Customer("Ahmet","Table1")
const curry = new Customer("Curry","Table2")
const order1 = ahmet.order("Pizza","FastFood",150)
const order2 = ahmet.order("Hamburger","FastFood",70)
const order3 = ahmet.order("Espresso","Coffee",34)
//const order4 = ahmet.order("TurkishCoffee","Coffee",15)
const order5 = curry.order("Latte","Coffee",25)



const Ahmet = customerDatabase.findBy("name","Ahmet")
console.log(Ahmet)


