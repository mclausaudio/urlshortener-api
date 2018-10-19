const express = require('express'),
      router = express.Router({mergeParams: true});

const db = require('../models/');

const { createLink, redirectPostRequest, redirectUrl } = require('../handlers/links');

router.route('/api')
    .get((req, res) => {
        res.status(200).send('hi');
    });

router.route('/:shortId')
    .get(redirectUrl);

router.route('/api/:url')
    .post(createLink);


module.exports = router;
