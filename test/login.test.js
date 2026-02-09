const request = require('supertest');
const app = require('../index');
const axios = require('axios');

jest.mock('axios');


describe('POST /login', () => {
  it('debería devolver 200 y un token con credenciales correctas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'usuario', password: 'password123' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('debería devolver 401 con credenciales incorrectas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'usuario', password: 'wrongpassword' });
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual('Credenciales inválidas');
  });

  it('debería manejar errores si el servicio falla', async () => {

    axios.get.mockRejectedValue(new Error('API caída')); //
    const response = await request(app).get('/users');
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ error: 'Time out' });
    console.log(response.body);
  });
});