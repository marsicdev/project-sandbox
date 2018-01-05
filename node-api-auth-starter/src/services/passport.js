const passport = require('passport')
const User = require('./../models/User')
const config = require('./../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')

// Create local strategy
const localOptions = {
    usernameField: 'email'
}

const localLoginCallback = (email, password, done) => {
    User.findOne({ email }, (err, user) => {
        if (err) { return done(err) }

        if (!user) { done(null, false) }

        user.comparePassword(password, (err, isMatch) => {
            if (err) { return done(err) }
            if (!isMatch) {
                return done(null, false)
            }

            return done(null, user)
        })
    })
}

const localLogin = new LocalStrategy(localOptions, localLoginCallback)

// Create JWT Strategy 
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
}

const jwtLoginCallback = (payload, done) => {
    User.findOne(payload.sub, (err, user) => {
        if (err) { return done(err, false) }

        if (user) {
            done(null, user)
        } else {
            done(null, false)
        }
    })
}

const jwtLogin = new JwtStrategy(jwtOptions, jwtLoginCallback)

// Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)
