const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongodb = require("./db")
const cors = require("cors")
dotenv.config()
PORT = process.env.PORT || 5000
app.use(cors({
    origin:"http://localhost:3000"
}))
app.use(express.json())

app.use("/api", require("./routes/register"))

app.listen(PORT,()=>{
    console.log(`Server running at Port ${PORT}`);  
    mongodb();
})