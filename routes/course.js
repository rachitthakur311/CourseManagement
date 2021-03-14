const express= require('express');
const router= express.Router();
const AUTH = require('../middleware/verifyToken');
const courseController= require('../controller/courseController');


router.get('/',AUTH, courseController.getAllCourses)
router.post('/',AUTH, courseController.createCourse)
router.put('/',AUTH, courseController.updateCourse)
router.delete('/',AUTH, courseController.deleteCourse)


module.exports = router