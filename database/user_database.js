const BaseDatabase = require('./base_database')
const User = require('../user') 

class UserDatabase extends BaseDatabase{

}

module.exports = new UserDatabase(User)
