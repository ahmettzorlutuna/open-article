const BaseService = require('./base_service')
const User = require('../models/user') 

class UserService extends BaseService{

}

module.exports = new UserService(User)
