// เหมือนกับ import
const express = require("express");
const cors = require("cors");
const app = express();

const campingRoute = require( './routes/camping' );
const morgan = require("morgan");




// middleware
app.use( cors() )  // ยังไม่ลอง

app.use( express.json() )  // ช่วยรับข้อมูลที่เป็น Json

app.use(morgan("dev"));

// เรียกใช้
app.use( '/api' , campingRoute )






const PORT = 5000;
app.listen( PORT, () => { console.log(`NX SERVER RUNNING port ${PORT}`); })



// app.  << มาจาก const app = express();