//constants
const express = require('express')
const app = express()
const port = 3000
const path = require('path');

//middlewares
app.use(express.urlencoded({
    extended: true
  }))

//routes

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/', (req, res) => {
    let word= req.body.name_field;
    let sendpath;
    const {search,insert}=require("./store");
    console.log(search(word));
    if(search(word)==true)
    {
        sendpath=path.join(__dirname, '/present.html')
    }
    else
    {
        sendpath=path.join(__dirname, '/absent.html')
        insert(word);
    }
    console.log(insert);
    console.log("post request triggered");
    res.sendFile(sendpath);
})

//spin up server

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})