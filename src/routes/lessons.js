const lessons = require('express').Router();
const db = require("../database.js")

lessons.get('/', function(req, res, next) {
    let courseId = req.courseId;
    var sql = `select * from lesson where course=${courseId} order by position asc`
  console.log(sql)
  var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
  });
  
  lessons.get('/:lessonId', function(req, res, next) {
    let courseId = req.courseId; 
    let lessonId = req.params.lessonId;
    var sql = `select * from lesson where course=${courseId} and id=${lessonId}`
  console.log(sql)
  var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
  });
    
  module.exports = lessons;