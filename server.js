const express    =      require('express');
const dotenv     =      require('dotenv')
const mongoose   =      require('mongoose');
const morgan     =      require('morgan');
const bodyParser =      require('body-parser')
const AuthRoute   =      require('./routes/auth')
const CourseRoute   =      require('./routes/course')


const mongoUrl = 'mongodb+srv://rawat_97:rawat1234@courses.myxjv.mongodb.net/courses?retryWrites=true&w=majority';
const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

mongoose
  .connect(mongoUrl, mongoOptions)
  .then(() => {
    console.log("MongoDB is connected!");
    app.emit("mongoConnected");
  })
  .catch(err => {
    console.log(err);
  });

const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api/auth', AuthRoute);
app.use('/api/course', CourseRoute);

dotenv.config({path:'./config/config.env'});

const Port = process.env.Port || 3000
app.listen(Port,
    console.log (
    `server is running in ${process.env.NODE_ENV} mode on port ${Port}`))

