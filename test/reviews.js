var should   = require('should'); 
var assert   = require('assert');
var request  = require('supertest');  

var badReview = {
    firstName: 'test',
    lastName: 'test',
    password: 'test',
    email: 'test@gmail.com'
};

var review = {
    name: 'SUBWAY',
    placeType: 'Fastfood',
    stars: 3    
};


describe('Routing', function() {
    var url = 'http://localhost:3000/';
    // within before() you can run all the operations that are needed to setup your tests. In this case
    // I want to create a connection with the database, and when I'm done, I call done().
    before(function(done) {
        // In our tests we use the test db                           
        done();
    });

    describe('list all reviews', function(){
        it('should return an array ', function(done){
            request(url)
                .get('api/reviews')
                .send()
                .expect(function(res){
                    res.body.should.be.an.Array              
                })
                .end(done);
            ;
        });
    });

    describe('show a review', function(){
        it('should return a review', function(done){
            request(url)
                .get('api/reviews/1')
                .send()
                .expect(function(res){
                    res.body.should.be.an.Object             
                })
                .end(done);
            ;
        });
    });

    describe('show a wrong review', function(){
        it('should return an error', function(done){
            request(url)
                .get('api/reviews/10')
                .send()
                .expect(function(res){
                    res.body.should.be.equal('bad review')           
                })
                .end(done);
            ;
        });
    });

    describe('create a new review', function(){
        it('should return success creation', function(done){
            request(url)
                .post('api/reviews')
                .send(review)
                .expect(function(res){
                    res.body.should.be.equal('created')           
                })
                .end(done);
            ;
        });
    });

    describe('create a new review', function(){
        it('should return bad review', function(done){
            request(url)
                .post('api/reviews')
                .send(badReview)
                .expect(function(res){
                    res.body.should.be.equal('bad review')           
                })
                .end(done);
            ;
        });
    });

    describe('update review', function(){
        it('should return success update ', function(done){
            request(url)
                .put('api/reviews/1')
                .send(review)
                .expect(function(res){
                    res.body.should.be.equal('review updated')           
                })
                .end(done);
            ;
        });
    });
});