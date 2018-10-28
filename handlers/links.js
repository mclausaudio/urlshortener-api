const db = require('../models');

const shortid = require('shortid');
const validator = require('validator');

const BASE_URL = 'localhost:3000/'

exports.createLink = async function(req, res, next) {
    let originalUrl = req.params.url
    try {
        let newId = shortid.generate();
        let link = await db.Link.create({
            originalUrl: originalUrl, 
            shortId: newId
        })
        return res.status(200).send("Your new URL is: " + BASE_URL + link.shortId);
    } catch(err) {
        return next(err)
    }
}

exports.createFormLink = async function(req, res, next) {
    let originalUrl = req.body.userUrl
    try {
        let newId = shortid.generate();
        let link = await db.Link.create({
            originalUrl: originalUrl, 
            shortId: newId
        })
        return res.status(200).send("Your new URL is: " + BASE_URL + link.shortId);
    } catch(err) {
        return next(err)
    }
}



exports.redirectUrl = async function(req, res, next) {
    let foundUrl = await db.Link.find({shortId: req.params.shortId}, function(err, found){
        if(err) {
            return err
        } else {
            return found
        }
    });
    let originalUrl = foundUrl[0].originalUrl
    let redirectUrl = 'http://' + originalUrl
    return res.status(200).redirect(redirectUrl)
}