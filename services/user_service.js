const BaseService = require('./base_service')
const User = require('../models/user')

class UserService extends BaseService{
    async followUser(userId, userId2){
        const user = await this.find(userId);
        const user2 = await this.find(userId2);
        user.follow(user2)
        await user.save();
        await user2.save();
    }
    async checkUserAndInsert(key,value,userData){ //Written for new user post
        const existingUser = await this.findBy(key,value)
        if(!existingUser){
            await this.insert(userData)
            return true
        }else{
            return false
        }
    }
}

module.exports = new UserService(User)
