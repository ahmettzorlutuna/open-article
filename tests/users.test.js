const app = require('../')
const request = require('supertest')(app)

test('create a new user', async() => {
    const userToCreate = {
        username: 'cengiz'
    }
    const response = await request
        .post('/users')
        .send(userToCreate)
        .expect(200)

    const userCreated = response

    console.log(userCreated)

    // expect(userCreated).toMatchObject(userToCreate)
    // expect(userCreated.bookings).toEqual([])

})