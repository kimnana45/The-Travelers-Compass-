const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    emergencyContact: {
        name: {
            type: String,
            trim: true
        },
        number: {
            type: String,
            trim: true
        }
    },
    trips: [
        {
            type: Schema.Types.ObjectId,
            ref: "Trip"
        }
    ],
    created: { type: Date, required: true, default: Date.now() },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
