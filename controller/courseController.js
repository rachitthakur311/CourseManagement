const course = require('../schema/course');

const getAllCourses = (req, res, next ) =>{
    try {
        course.find().then((course)=>{
            res.json({
                course
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'some error occured',
            error
        })
    }
}
const createCourse =(req, res, next ) =>{   
    try {

        const {title = "", detail= "", price = null, duration= ""} = req.body;
        const userId = req.userId;

        let newCourse = new course({
            title,
            detail,
            price,
            duration,
            createdBy:userId
        });

        newCourse.save()
        .then((data) =>{
            res.status(201).json({
                message: 'course added successfully!',
                course: data
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'some error occured',
            error
        })
    }
}

const updateCourse =   (req, res, next) =>{
    const {title, detail, price, duration, id} = req.body;
    course.findOne({_id: id}, function (err, course) {
        console.log(course);
        if (err) {
            return res.status(500).json({
                message: 'Error when getting course',
                error: err
            });
        }

        if (!course) {
            return res.status(404).json({ message: 'course not found' });
        }

        course.title = title ? title : course.title;
        course.detail = detail ? detail : course.detail;
        course.price = price ? price : course.price;
        course.duration = duration ? duration : course.duration;
        
        course.save(function (err, updatedCourse) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when updating course.',
                    error: err
                });
            }
            return res.json(updatedCourse);
        });
    });
}

const deleteCourse =   (req, res, next) =>{
    try {
        const courseId = req.body.id;

        course.findByIdAndRemove(courseId, function (err, course) {
            if (err) throw new Error(err);
            
            if(!course) return res.status(404).json({
                message: 'no course found to delete'
            })

            return res.status(204).json();
        });
    } catch (error) {
        res.status(500).json({
            message: 'some error occured',
            error
        })
    }
}

module.exports = {
    getAllCourses,createCourse, updateCourse, deleteCourse
}