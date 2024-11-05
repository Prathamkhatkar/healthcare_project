//Framework Configuration
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
var hbs = require("hbs")
const doctorRoutes = require("./routes/doctorRoutes");

//app.use('/api/users', userRoutes);


// env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/user", require("./routes/userRoutes"));
app.use('/api/doctors', require("./routes/doctorRoutes"));
// ERROR handling middleware
app.use(errorHandler);
app.set('view engine','hbs');

//ROUTES BELOW
app.get('/',(req,res)=>{
    res.send("working");
});
app.get("/home",(req,res)=>{
    // let user =user.findone({id:})
    res.render("home",{})
});
app.get("/allusers",(req,res)=>{
    res.render("user",{
        users: [
            { username: "Parth", date: "23-10-2024", subject: "Maths" },
            { username: "Aarav", date: "23-10-2024", subject: "Science" },
            { username: "Ishita", date: "23-10-2024", subject: "History" }
        ]
    })
})
//hbs.registerPartials(path.join(__dirname, '/views/partials'));



// APP CONFIG START
app.listen(port, () =>{
    console.log(`Server running in port http://localhost:${port}`);
});
