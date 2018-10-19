const db = require('../models');

const shortid = require('shortid');

const BASE_URL = 'localhost:3000/'

exports.createLink = async function(req, res, next) {
    
    try {
        let newId = shortid.generate();
        console.log(newId)
        let link = await db.Link.create({
            originalUrl: req.params.url, // /api/:url
            shortId: newId
        })
        console.log('createLink', link)
        return res.status(200).json(link);
    } catch(err) {
        return (err);
    }
}

exports.redirectUrl = async function(req, res, next) {
    let foundUrl = await db.Link.find({shortId: req.params.shortId}, function(err, found){
        if(err) {
            return err
        } else {
            console.log('inside if', found);
            return found
        }
    });
    let originalUrl = foundUrl[0].originalUrl
    let redirectUrl = 'http://' + originalUrl
    console.log(originalUrl)

    return res.status(200).redirect(redirectUrl)
    
    // return res.redirect('http://www.google.com')
}