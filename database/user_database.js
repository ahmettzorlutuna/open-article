const BaseDatabase = require('./base_database')
const User = require('../models/user') 

class UserDatabase extends BaseDatabase{

}

module.exports = new UserDatabase(User)
