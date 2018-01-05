const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

// Define our model
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
})

// On save hook, encrypt password
// Before saving a model
userSchema.pre('save', next => {
    const user = this

    // generate a salt then run callback
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err) }

        // hash (encrypt) our password using salt
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err)
            }

            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = (candidatePassword, callback) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) {
            return callback(err)
        }

        callback(null, isMatch)
    })
}

// Create the model class
const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel
