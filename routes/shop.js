// const path = require('path');
// const rootDir = require('../util/path');
const express = require('express');
const adminData = require('../routes/admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        docTitle: 'my shop',
        path: '/',
        pageTitle: 'Shop'
    })
});

module.exports = router;
