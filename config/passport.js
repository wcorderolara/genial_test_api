var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var models = require('../models');
var crypto = require('crypto');

function validatePassword(password, user) {
    var hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64).toString('hex');
    return user.hash == has;
};

passport.use(new LocalStrategy({
        usernameField: 'userLogin',
        passwordField: 'password'
    },
    function(username, password, done) {
        models.Users.findOne({
            where: {
                userLogin: username
            }
        }).then(function(user,err) {
            if(err) {return done(err);}
            if(!user){
                return done(null, false, {
                    message: 'El usuario proporcionado no existe.'
                })
            }
            if(!validatePassword(password, user)) {
                return done(null, false, {
                    message: 'Contraseña incorrecta.'
                })
            }
            return done(null, user);
        });
    }
));