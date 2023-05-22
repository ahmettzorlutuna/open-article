const app = require('../')
const request = require('supertest')(app)

test('create a new user', async() => {
    const userToCreate = {
        username: 'yali'
    }
    const response = await request
        .post('/users')
        .send(userToCreate)
        .expect(200)

    const userCreated = response.body

    expect(userToCreate).toMatchObject(userCreated)
    // expect(userCreated.bookings).toEqual([])

})