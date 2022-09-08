const app = require('../index');
const request = require("supertest");

describe('Photos endpoint', () => {
  test('Deve retornar status 200 na rota de usuários', async () => {
    const res = await request(app)
      .get('/api/getAll')
    expect(res.statusCode).toEqual(200)
  })
})