const express = require('express');
const movieModule = require("../module/moviemodule");
const router = express.Router();

router.post('/post',movieModule.postdata);
router.get("/get",movieModule.getdata);
router.get('/getByKeyWords',movieModule.getdatabykeywords);


module.exports = router ;