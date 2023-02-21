const request = require('supertest');
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

describe('GET /health', function() {
    it('responds with status code 200-399', function() {
        request(app) 
        .get('/health')
        .expect(function(res) {
            if (res.status < 200 || res.status >= 400) {
                throw new Error('Expected status code 200-399, but got ' + res.status);
            }
        })
        .end(done);
    });
});

describe('GET /', function() {
    it('responds with status code 200-399', function() {
        request(app)
        .get('/')
        .expect(function(res) {
            if (res.status < 200 || res.status >= 400) {
                throw new Error('Expected status code 200-399, but got ' + res.status);
            }
        })
        .end(done);
    });
});

describe('query', function() {
    it('should return correct data', async function() {
        const result = await pool.query('SELECT 1');
        expect(result.rows[0]['?column?']).toBe(1);
    });
});