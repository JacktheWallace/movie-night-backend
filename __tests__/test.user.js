const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

describe('create user', () => {
    describe('/users', () => {
        describe(POST, () => {
            it('creates a new user in the database', async () => {
                const res = await (await request(app).post('/users'))
                .send(`INSERT INTO users (userName, movieSuggestions)
                VALUES('Micky Mouse')`)
                });
                expect(res.status).to.equal(201);
                
            });
        });
    });
