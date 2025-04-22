const express = require('express');
const app = express();

app.use((req, res)=>{
    console.log("i am a middleware function");
    res.send("middleware finished");
})

app.get('/', (req, res) => {
    res.send('Hi, I am root');
});

app.get("/random",()=>{
    console.log("i am a random page");
})


app.listen(8080,(req, res)=>{
    console.log("Server is running on port 8080");
})