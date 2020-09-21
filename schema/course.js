const mongoose = require('mongoose');
const schema = mongoose.Schema


const courseSchema = new schema({
    title:{
        type: 'string'
    },

    detail:{
        type: 'string'
    },

    price:{
        type: 'Number'
    },

    duration:{
        type: 'string'    
    },

    createdBy:{
        type: schema.Types.ObjectId,
        ref: "user",
        required: true
    }
},   
{timestamps:true})

const course = mongoose.model('course',courseSchema)
module.exports = course