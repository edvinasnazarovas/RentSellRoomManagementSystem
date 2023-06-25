var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let user = require('../controllers/user');

router.get('/login', user.show_login);
router.get('/signup', user.show_signup)
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);
/* GET home page. */
router.get('/', landing.get_landing);
router.post('/', landing.submit);
router.get('/users', landing.show_users);
router.get('/user/:id', landing.show_user);
router.get('/user/:id/edit', landing.show_edit_user);
router.post('/user/:id/edit', landing.edit_user);
router.post('/user/:id/delete', landing.delete_user);
router.post('/user/:id/delete-json', landing.delete_user_json);

router.get('/rooms', landing.show_rooms);
router.post('/rooms', landing.submit_room);
router.get('/room/:id', landing.show_room);
router.get('/addroom', landing.show_add_room);
router.post('/room/:id/delete', landing.delete_room);

router.post("/room/:id/purchase", landing.show_purchase_room);
router.post("/room/:id/purchase-final", landing.purchase_room);

module.exports = router;
