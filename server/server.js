// เหมือนกับ import
const express = require("express");
const cors = require("cors");
const app = express();

const campingRoute = require( './routes/camping' )



// middleware
app.use( cors() )  // ยังไม่ลอง

app.use( express.json() )  // ช่วยรับข้อมูลที่เป็น Json



// เรียกใช้
app.use( '/' , campingRoute )






const PORT = 5000;
app.listen( PORT, () => { console.log(`NX SERVER RUNNING port ${PORT}`); })



// app.  << มาจาก const app = express();