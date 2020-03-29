const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should generate an unique ID', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "TSFtsf",
            email: "tsf@gmail.com",
            whatsapp: "1234567890",
            city: "araranguá",
            uf: "SC"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
})

