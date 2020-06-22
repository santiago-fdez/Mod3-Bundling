const db = require("../database.js")
const courses = require('express').Router();
const lessons = require('./lessons');

courses.get("/", (req, res, next) => {
    var sql = "select * from course"
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

courses.get('/:courseId', function(req, res, next) {
  let courseId = req.params.courseId;
  var sql = `select lesson.id as id, lesson.name as name, lesson.description as description, lesson.course as course, course.name as coursename from lesson,course where lesson.course=${courseId} and course.id=${courseId} order by lesson.position asc`
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

courses.use('/:courseId/lessons', function(req, res, next) {
    req.courseId = req.params.courseId;
    next()
  }, lessons);
  

module.exports = courses;
