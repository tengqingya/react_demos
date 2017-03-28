"use strict";
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let reg = /\?callback=(.*)/;
  let callback = reg.exec(req.url)[1];
  //返回的数据如果不是这种格式的就会报错
  //res.send("" + '(' + "text:'respond with a resource'" + ')');
  res.send(callback + '(' + "{text:'respond with a resource'}" + ')');
});

module.exports = router;
