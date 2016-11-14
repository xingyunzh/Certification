/**
 * Created by brillwill on 16/10/31.
 */
var express = require('express');
var router = express.Router();

var systemController = require("../controllers/systemConfigController");


/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
});

router.get('/system/oss', systemController.getOSSConfig);
router.get('/system/shortid', systemController.getShortID);


module.exports = router;