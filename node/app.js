const express = require('express');

const app = express();

const port =3000;

app.get('/',(req,res)=> {
    res.send('works');
})

app.get('/test',(req,res)=> {
    res.send('test');
})

app.listen(port,()=> {
    return console.log('ready for runnung');
})