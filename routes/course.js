const experss= require('express');
const router= experss.Router()
const AUTH = require('../middleware/verifyToken');
const courseController= require('../controller/courseController') 


router.get('/',AUTH, courseController.getAllCourses)
router.post('/',AUTH, courseController.createCourse)
router.put('/:id',AUTH, courseController.updateCourse)
router.delete('/:id',AUTH, courseController.deleteCourse)


module.exports = router