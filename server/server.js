// เหมือนกับ import
const express = require("express");
const cors = require("cors");
const app = express();



// middleware
app.use( cors() )


// ROUTING เพื่อไปที่ไหน method  GET, POST, PUT, PATCH, DELETE
app.get( '/' , ( req,res ) => {
    console.log("NX BACKEND is EASY");
    // res.send("RES.SEND --> NX BACKEND is EASY")
    res.json("RES.SEND --> NX BACKEND is EASY2")
})


const PORT = 5000;
app.listen( PORT, () => { console.log(`NX SERVER RUNNING port ${PORT}`); })



// app.  << มาจาก const app = express();