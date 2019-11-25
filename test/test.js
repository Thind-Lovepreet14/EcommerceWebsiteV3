const chai = require('chai')
const expect = chai.expect;
const chaiHttp = require('chai-http');
const request = require('request');

const app = require('../server')


chai.use(chaiHttp)
chai.should()



// it('Checks if contact endpoint is functional', function(done) {
//     request('http://localhost:4000/api/contacts', function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done()
//     });
// })



describe('Tests for "/api/products" api endpoint', () => {
    it('should send 200 status code', (done) => {
        chai.request(app)
        .get('/api/products')
        .end((err, res) => {
            // console.log('response -', response.body)
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        })
    })
})

describe('Tests for "/" endpoint', () => {
    it('should send 200 status code', (done) => {
        chai.request(app)
        .get('/')
        .end((error, res) => {
            // console.log('response -', response.body)
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        })
    })
})

describe('Tests for "/api/contacts" api endpoint', () => {
    it('should send 200 status code', (done) => {
        chai.request(app)
        .get('/api/contacts')
        .end((error, res) => {
            // console.log('response -', response.body)
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        })
    })
})

describe('Tests for "/api/productFilter" endpoint', () => {
    it('should send 200 status code', (done) => {
        chai.request(app)
        .get('/api/productFilter')
        .end((error, res) => {
            // console.log('response -', response.body)
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
        })
    })
})