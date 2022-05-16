const request = require('supertest');

const app = require('../src/index');


describe("Calling a /product with GET", () => {
    test('It should response with 200 status code', async () => { 
        const response = await request(app).get('/product').send(); 
        expect(response.status).toBe(200);
     }, 30000);

     test('It should response with an array', async () => {
         const response = await request(app).get('/product').send();
         expect(response.body).toBeInstanceOf(Array);
     });
})