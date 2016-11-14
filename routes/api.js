/**
 * Created by brillwill on 16/10/31.
 */
var express = require('express');
var router = express.Router();

var userController = require("../controllers/userController");
var orgController = require("../controllers/orgController");
var certificationController = require("../controllers/certificationController");

/* GET users listing. */
router.get('/user/id/:userId', userController.getById);
router.post('/user/add', userController.addUser);
router.get('/user/getall', userController.getAll);
router.post('/user/update', userController.update);

router.get('/org/id/:orgId', orgController.getOrgById);
router.get('/org/getall', orgController.getAllOrgs);
router.post('/org/create', orgController.createOrg);
router.get('/org/checkname', orgController.checkName);
router.get('/org/user/:userId', orgController.orgsOfUser);

router.get('/stamp/getall', orgController.getAllStamps);
router.get('/stamp/id/:stampId', orgController.getStampById);
router.post('/stamp/create', orgController.createOrgStamp);

router.get('/certification/getall', certificationController.getAll);
router.get('/certification/id/:certificationId', certificationController.getById);
router.post('/certification/create', certificationController.create);
router.get('/certification/getall', certificationController.getAll);
router.get('/certification/delete/:certificationId', certificationController.delete);
router.post('/certification/update', certificationController.update);


module.exports = router;