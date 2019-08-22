import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
let should = chai.should();

chai.use(chaiHttp);

describe('Testing Endpoints', () => {

    describe('/Question One', () => {
        it('should GET get a 422 error', (done) => {
            const data = { type: "durban", crux: 2, color: "", title: "Just a title" };

            chai.request(app)
                .post("/question_one")
                .send(data)
                .then((res) => {
                    res.should.have.status(422);
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.a('object');
                    res.body.errors.should.have.property('crux').eql("crux must be a string!");
                    done();
                });
        });
        it('should GET get a 200 status', (done) => {
            const data = { type: "durban", crux: "indices", color: "green", title: "Just a title" };

            chai.request(app)
                .post("/question_one")
                .send(data)
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('status').eql(true);
                    res.body.should.have.property('data');
                    res.body.data.should.be.a('object');
                    done();
                });
        });

    });

    describe('/Question Two', () => {
        it('should remove item from data', (done) => {
            const data = {
                data: { type: "durban", crux: "Indices", color: "green", title: "Indict the idiot" },
                item: "type"
            };

            chai.request(app)
                .post("/question_two")
                .send(data)
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('status').eql(true);
                    res.body.should.have.property('data').should.be.a('object');
                    done();
                });
        });
        it('should GET get a 404, attribute not found error', (done) => {
            const data = {
                data: { crux: "Indices", color: "green", title: "Indict the idiot" },
                item: "type"
            };

            chai.request(app)
                .post("/question_two")
                .send(data)
                .then((res) => {
                    res.should.have.status(404);
                    res.body.should.have.property('status').eql(false);
                    res.body.should.have.property('message').eql('attribute not found');
                    done();
                });
        });

    });

    describe('/Question Three', () => {
        it('should remove item from data', (done) => {
            const data = {
                data: { type: "durban", crux: "Indices", color: "green", title: "Indict the idiot" },
                item: "type"
            };

            chai.request(app)
                .post("/question_two")
                .send(data)
                .then((res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('status').eql(true);
                    res.body.should.have.property('data').should.be.a('object');
                    done();
                });
        });
        it('should GET get a 404, attribute not found error', (done) => {
            const data = {
                data: { crux: "Indices", color: "green", title: "Indict the idiot" },
                item: "type"
            };

            chai.request(app)
                .post("/question_two")
                .send(data)
                .then((res) => {
                    res.should.have.status(404);
                    res.body.should.have.property('status').eql(false);
                    res.body.should.have.property('message').eql('attribute not found');
                    done();
                });
        });

    });

});
