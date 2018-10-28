const express = require('express'),
      router = express.Router({mergeParams: true});

const db = require('../models/');

const { createLink, createFormLink, redirectPostRequest, redirectUrl } = require('../handlers/links');

router.route('/:shortId')
    .get(redirectUrl);

router.route('/')
    .get((req, res) => {
        res.status(200).render(index.js);
    });

router.route('/api/:url')
    .post(createLink);

router.route('/form')
    .post(createFormLink);

module.exports = router;
