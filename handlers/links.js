const db = require('../models');

const shortid = require('shortid');
const validator = require('validator');

const BASE_URL = 'localhost:3000/'

const {linkMaker} = require('../helpers/createLink');

exports.createLink = async function(req, res, next) {
    linkMaker(req, res, req.params.url, next)
}

exports.createFormLink = async function(req, res, next) {
    linkMaker(req, res, req.body.userUrl, next)
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