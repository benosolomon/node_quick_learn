process.stdout.write("beno\n");
process.stdout.write("Solomon");

const arr = ["Dog","Cat","Rabbit"];

const output = (val= 0) => {
    process.stdout.write(arr[val]);
}

output(2);

process.stdin.on('data',data => {
   process.stdout.write(`you wrote  ${data}`); 
   process.exit();
});

process.on('exit',(data)=> {
    console.log('you exited');
})
