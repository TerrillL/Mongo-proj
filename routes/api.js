// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const Student = require('../models/Student')
const School = require('../models/School')

router.get('/student', (req, res) => {
    let filters = req.query
    
    Student.find(filters)
    .then(students => {
        res.json({
            confirmation: 'success',
            data: students
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

// usually used as a put instead of get
router.get('/student/update', (req, res) => {
    const query = req.query
    const studentID = query.id
    delete query['id']
    
    Student.findByIdAndUpdate(studentID, query, {new:true})
    .then(student => {
        res.json({
            confirmation: 'success',
            data: student
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

// usually used as a put instead of get
router.get('/student/remove', (req, res) => {
    const query = req.query
    
    Student.findByIdAndRemove(query.id)
    .then(data => {
        res.json({
            confirmation: 'success',
            data: 'Student ' + query.id + ' successfully removed'
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

router.get('/student/:id', (req, res) => {
    const id = req.paraps.id
    
    Student.findById(id)
    .then(student => {
        res.json({
        confirmation: 'success',
        data: student
        })
     }) 
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: 'Student ' + id + ' not found.' 
        })
    })
})

router.post('/student', (req, res) => {
    
    Student.create(req.body)
    .then(student => {
        res.json({
            confirmation: 'success',
            data: student
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

router.get('/school', (req, res) => {
    let filters = req.query
    
    School.find(filters)
    .then(schools => {
        res.json({
            confirmation: 'success',
            data: schools
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

// usually used as a put instead of get
router.get('/school/update', (req, res) => {
    const query = req.query
    const schoolID = query.id
    delete query['id']
    
    School.findByIdAndUpdate(schoolID, query, {new:true})
    .then(school => {
        res.json({
            confirmation: 'success',
            data: school
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

// usually used as a put instead of get
router.get('/school/remove', (req, res) => {
    const query = req.query
    
    School.findByIdAndRemove(query.id)
    .then(data => {
        res.json({
            confirmation: 'success',
            data: 'School ' + query.id + ' successfully removed'
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

router.get('/school/:id', (req, res) => {
    const id = req.paraps.id
    
    School.findById(id)
    .then(school => {
        res.json({
        confirmation: 'success',
        data: school
        })
     }) 
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: 'School ' + id + ' not found.' 
        })
    })
})

router.post('/school', (req, res) => {
    
    School.create(req.body)
    .then(school => {
        res.json({
            confirmation: 'success',
            data: school
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

module.exports = router