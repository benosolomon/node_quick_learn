const fs = require('fs');

const myfiles = fs.readdirSync('./');

fs.readdir('/',(error,files)=> {
    if(error) {
        throw error;
    }
})

const getSec = fs.readFileSync('./testing.txt','UTF-8');

console.log(getSec);
fs.readFile("./testing.txt","UTF-8",(err,output)=> {
    if(err) {
        throw error;
    }
    console.log(output);
})

const myText = `This is new Text in a new File`;

fs.writeFile("./secret.txt",myText,(err,output)=> {
    if(err) {
        throw err;
    }
    console.log("File ready");
});