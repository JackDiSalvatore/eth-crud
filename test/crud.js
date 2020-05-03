const Crud = artifacts.require('Crud')

contract('Crud', async () => {
    let crud = null

    before(async () => {
        crud = await Crud.deployed()
        await crud.create('Frank')
    })

    it('creates a new user', async () => {
        let user = await crud.read(1)
        assert(user[0].toNumber() == 1)
        assert(user[1] == 'Frank')
    })

    it('updates an existing user', async () => {
        await crud.update(1, 'Dan')
        let user = await crud.read(1)
        assert(user[0].toNumber() == 1)
        assert(user[1] == 'Dan')
    })

    it('should not update a non-existing user', async() => {
        try {
            await crud.update(2, 'Dan')
        } catch(e) {
            assert(e.message.includes('User does not exist'))
            return
        }
        assert(false)
    })

    it('destroys existing user', async () => {
        await crud.destroy(1)
        try {
            await crud.read(1)
        } catch(e) {
            assert(e.message.includes('User does not exist'))
            return
        }
        assert(false)
    })

    it('should not destroy a non-exisiting user', async () => {
        try {
            await crud.destroy(1)
        } catch(e) {
            assert(e.message.includes('User does not exist'))
            return
        }
        assert(false)
    })
})