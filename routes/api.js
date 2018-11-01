// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const Student = require('../models/Student')
const School = require('../models/School')

router.get('/student', (req, res) => {
    let filters = req.query
    
    Student.find(filters)
    .then(profiles => {
        res.json({
            confirmation: 'success',
            data: profiles
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
    const profileID = query.id
    delete query['id']
    
    Student.findByIdAndUpdate(profileID, query, {new:true})
    .then(profile => {
        res.json({
            confirmation: 'sucess',
            data: profile
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
    res.json({
        confirmation: 'success',
        data: "this is the update endpoint"
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
    res.json({
        confirmation: 'success',
        data: "this is the update endpoint"
    })
})

router.get('/student/:id', (req, res) => {
    const id = req.paraps.id
    
    Student.findById(id)
    .then(profile => {
        res.json({
        confirmation: 'success',
        data: profile
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
    .then(profile => {
        res.json({
            confirmation: 'success',
            data: profile
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
    
    Student.find(filters)
    .then(profiles => {
        res.json({
            confirmation: 'success',
            data: profiles
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