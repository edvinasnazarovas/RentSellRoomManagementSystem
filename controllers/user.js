let models = require("../models");
let bcrypt = require("bcrypt");
const passport = require('passport');
const myPassport = require('../passport_setup')(passport);
let flash = require('connect-flash');

exports.show_login = function(req, res, next) {
    res.render('user/login', {formData: {}, errors: {}});
}

exports.show_signup = function(req, res, next) {
    res.render('user/signup', {formData: {}, error: {}});
}

const generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

exports.signup = function(req, res, next) {
    const newUser = models.User.build({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_nubmer: req.body.phone_number,
        country: req.body.country,
        city: req.body.city,
        address: req.body.address,
        email: req.body.email,
        password: generateHash(req.body.password)
    });
    return newUser.save().then(result => {
        passport.authenticate('local', {
            successRedirect: "/",
            failureRedirect: "/signup",
            failureFlash: true
        })(req, res, next);
    })
}

exports.login = function(req, res, next) {
    passport.authenticate('local', {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true
    })(req, res, next);
}

exports.logout = function(req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}
