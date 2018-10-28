const db = require('../models');

const shortid = require('shortid');
const validator = require('validator');

const BASE_URL = 'localhost:3000/'

exports.linkMaker = async function(req, res, url, next) {
    try {
        let newId = shortid.generate();
        let link = await db.Link.create({
            originalUrl: url, 
            shortId: newId
        })
        return res.status(200).send("Your new URL is: " + BASE_URL + link.shortId);
    } catch(err) {
        return next(err)
    }
}