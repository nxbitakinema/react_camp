// import ไม่ใช่ตัวแปร
const express = require( "express" )

// สร้างต้วแปรให้เรียกง่าย
const router = express.Router()


// @ENDPOINT = http://localhost:5000/api/camplings
// @METHOD = GET แบบที่ 1 =  read  list  all  data
// @ACCESS PUBLIC
router.get( '/camping', (req,res) => {
    res.send('test res.send GET');
});


// @ENDPOINT = http://localhost:5000/api/camplings/6666
// @METHOD = GET แบบที่ 2 ต้องมี id ต่อท้าย =  read  1  data  =  /:id
// @ACCESS PUBLIC
router.get( '/camping/:id', (req,res) => {
    res.send('test res.send GET');
});


// @ENDPOINT = http://localhost:5000/api/camplings
// @METHOD = POST   =  create
// @ACCESS = PRIVATE
router.post ( '/camping',  (req,res) => {
    const {title, price} = req.body
    console.log(title)
    console.log(price)
    res.send('test res.send POST')
})


// @ENDPOINT = http://localhost:5000/api/camplings/6666
// @METHOD = PUT   =  update
// @ACCESS = PRIVATE
router.put ( '/camping/:id',  (req,res) => {
    res.send('test res.send PUT id')
})


// @ENDPOINT = http://localhost:5000/api/camplings/6666
// @METHOD = DELETE   =  delete
// @ACCESS = PRIVATE
router.delete ( '/camping/:id',  (req,res) => {
    res.send('test res.send DELETE id')
})

module.exports = router