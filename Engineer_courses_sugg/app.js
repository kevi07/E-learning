const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Videos = require('./models/videoSchema');
const Course = require('./models/course');

const app = express();
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://kevin:Kevin123@e-learning.glg6s.mongodb.net/?retryWrites=true&w=majority&appName=e-learning'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo db connected>..<');
    })
    .catch(err => {
        console.log(err);
    });


app.get('/', (req, res) => {
    res.render('index'); 
});


app.get('/common', async (req, res) => {
    try {
        const domain = req.query.domain; 
        const courseName = req.query.course; 
        let query = { domain: domain };
        if (courseName) {
            query.name = courseName;
        }
        const courses = await Course.find(query).populate('videos').exec(); 
        if (courses.length === 0) {
            return res.status(404).send('No courses found for this domain');
        }
        res.render('common', { courses }); 
    } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).send('Server error');
    }
});


app.get('/course', async (req, res) => {
    const courseName = req.query.course;
  try {

    const videos = await Videos.find({ course: courseName });
    res.render('course', { videos });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/domain', (req, res) => {
    res.render('domain');
});

app.get('/courses/:courseName', async (req, res) => {
    try {
        const courseName = req.params.courseName;
        const course = await Course.findOne({ name: courseName }).populate('videos');

        if (!course) {
            return res.status(404).send('Course not found');
        }
        res.render('course', { course, videos: course.videos });
    } catch (err) {
        console.error('Error fetching course:', err);
        res.status(500).send('Server error');
    }
});

app.listen(8000, () => {
    console.log('Server running!!..');
});
