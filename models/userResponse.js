const mongoose = require('mongoose');
const express = require('express');
const validator = require('validator');
const router = express.Router();
const responseSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['employee', 'vendor', 'customer', 'visitor']
    },
    locationId: {
        type: String
    },
    locationName: {
        type: String
    },
    locationType: {
        type: String
    },
    country: {
        type: String
    },
    region: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error('email is invalid');
            }
        }
    },
    phone: {
        type: String,

    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    company: {
        type: String
    },
    ingredionContact: {
        type: String
    },
    response: [{
        questionId: { type: String },
        shortText: { type: String },
        answer: { type: Boolean },
        addlInfo: { type: String }
    }],
    certifyInfoName: {
        type: String
    },
    certifyInfoChecked: {
        type: Boolean
    }


}, { timestamps: { createdOn: 'createdOn' } });
const userResponse = mongoose.model('userResponse', responseSchema);
module.exports = userResponse;