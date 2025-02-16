const express = require('express');
const router = express.Router();

const member_controller = require('../controllers/memberController');

router.post("/", member_controller.register_member);

module.exports = router;