const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');
const getDB = require("..src/services/db");
const db = require('../services/db');

describe('tests a user is created in the database', () => {
    let db;
    beforeEach(async () => {db = await getDB())});
    afterEach(async () => {
        await db.query("DELETE FROM users");

        await db.close();
    });

    describe('/users', () => {
        describe("POST", () => {
            it('creates a new user in the database', async () => {
                const res = await (await request(app).post('/users'))
                .send(userEmail: "example@hotmail.com", userName: "example smith")
                });
                expect(res.status).to.equal(201);
                expect(res.body)
            });
        });
    });
