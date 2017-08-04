let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
let should = chai.should();
let supertest = require('supertest');

let models = require("../models");
let Sequelize = require('sequelize');
let env = process.env.NODE_ENV || 'development';
let config = require(__dirname + '/../config/config.json')[env];

chai.use(chaiHttp);
sequelize = new Sequelize(config.database, config.username, config.password, config);

describe('CATEGORIES', () => {
    /**
     * Testo to /POST route
     */
    describe('/POST Category', () => {
      it('should POST a new category just with the name', (done) => {
          let category = {
              name: 'city'
          };
          chai.request(server)
              .post('/category/create')
              .send(category)
              .end( (err, res) => {
                  res.should.have.status(201);
                  res.body.type.should.be.eql(true);
                  res.body.should.be.a('Object');
                  done();
              });
        });

        it('should POST a new category but doesnt works because the category exists', (done) => {
            let category = {
              name: 'city'
          };
          chai.request(server)
              .post('/category/create')
              .send(category)
              .end( (err, res) => {
                  res.should.have.status(500);
                  res.body.type.should.be.eql(false);
                  res.body.should.be.a('Object');
                  done();
              });
        });
    })
  /**
   * Testo to /PUT route
   */
  describe('/PUT Category', () => {
      it('should Update the name for the category with id 1', (done) => {
          let category = {
              name: 'City'
          };
          chai.request(server)
              .put('/category/put/1')
              .send(category)
              .end( (err, res) => {
                  res.should.have.status(200);
                  res.body.type.should.be.eql(true);
                  res.body.should.be.a('Object');
                  done();
              });
        });

        it('should send and error when ty to Update the name for the category with id 10', (done) => {
          let category = {
              name: 'City'
          };
          chai.request(server)
              .put('/category/put/10')
              .send(category)
              .end( (err, res) => {
                  res.body.should.be.a('Object');
                  done();
              });
        });
    })

  /**
   * Test to /GET by Id route
   */

  describe('/GET Categories', () => {
      it('it should GET the category with id 1', (done) => {
        chai.request(server)
            .get('/category/get/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.type.should.be.eql(true);
                res.body.data.should.be.a('Object');
              done();
            });
      });

      it('it should send an error when thry GET the category with id 10', (done) => {
        chai.request(server)
            .get('/category/get/10')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.type.should.be.eql(false);
                res.body.should.be.a('Object');
              done();
            });
      });
  });

/*
  * Test the /GET route
  */
  describe('/GET Categories', () => {
      it('it should GET all the categories', (done) => {
        chai.request(server)
            .get('/category/get')
            .end((err, res) => {
                // console.log(res.body);
                //res.body.type.be(true);
                res.body.data.should.be.a('array');
                // res.body.data.length.should.be.eql(1);
              done();
            });
      });
  });

});

