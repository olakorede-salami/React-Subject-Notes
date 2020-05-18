const express = require('express');
const SubjectDB = require('../model/database')
const router = express.Router();

//Routing
router.get('/api', (req,res) => {
    res.send("This API is working")

    // SubjectDB.find({ })
    // .then((data) => {
    //     console.log('Data: ', data);
    //     res.json(data)
    // })
    // .catch((error) => {
    //     console.log('error: ', daerrorta)
    // });

    // res.json(data)
} )
router.get('/api/name', (req,res) => {
    const data = {
        username: "Tester",
        password: 4
    }
    console.log(res.json)

})
//Handling POST requests
router.post('/save', (req,res) => {
console.log("Body: ", req.body)

const data = req.body;

const newSubjectDB = new SubjectDB(data)

//.save
newSubjectDB.save((error) => {
    if (error) {
    res.status(500).json({msg: "Sorry internal server error "})
    }
    else {
    res.json({
    msg: "We have receieved the data"
    });
 }
})

});



module.exports = router;