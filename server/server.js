// IMPORT
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const { readdirSync } = require("fs");

// MIDDLEWARE
app.use(cors()); // ยังไม่ลอง
app.use(express.json()); // ช่วยรับข้อมูลที่เป็น Json
app.use(morgan("dev"));

// ENDPOINT USE
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

const PORT = 5000;
app.listen(PORT, () => { console.log(`NX SERVER RUNNING port ${PORT}`); });
