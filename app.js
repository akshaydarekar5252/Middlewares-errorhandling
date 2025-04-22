const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');

// app.use((req, res,next)=>{
//     console.log("i am a middleware function");
//    next();
// });

// app.use("/random", (req, res, next) => {
//     console.log("i am a middleware function for random route");
//     next();
// });

const checkToken = (req,res,next)=>{
    let {token}= req.query;
    if(token === "giveaccess"){
        next();
    }
   throw new ExpressError(401,"access denied");
}


app.get("/api",checkToken,(req, res)=>{
    res.send("data");
})



//error handling middleware

app.get("/err",(req, res)=>{
    abcd = abcd;
});

//Activity 

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to forbidden");
})

app.use((err,req,res,next)=>{
    let {status=500, message="some error occurred"}= err;
   res.status(status).send(message);
})
// app.use((err,req,res,next)=>{
//     console.log("_____ERROR2______");
//     next(err);
// })



// //logger
// app.use((req, res, next) => {
//     req.time= new Date(Date.now()).toString();
//     console.log(req.method , req.hostname,req.path , req.time);
//     next();
// });

//404
app.use((req,res)=>{
    res.status(404).send("page not found");
})

app.get('/', (req, res) => {
    res.send('Hi, I am root');
});

app.get("/random",()=>{
    console.log("i am a random page");
});


app.listen(8080,(req, res)=>{
    console.log("Server is running on port 8080");
});


