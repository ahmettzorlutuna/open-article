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
    async checkUserAndInsert(key,value,userData){
        const existingUser = await this.find(key,value)
        if(!existingUser){
            await this.insert(userData)
        }
    }
}

module.exports = new UserService(User)
