const fs = require('fs');
const lines = fs.readFileSync('day3.txt').toString().split("\n"); //save input lines in an array

console.log("result is " + lines.reduce((acc, l, i) => {
    var r = 1;
	line = l.trim().split('  ');
    line.forEach((e,k)=> {
        let comp = e >= Number(line[(k+1)%3]) + Number(line[(k+2)%3]);
        if (comp) r = 0;
    })
        return acc + r ;
},0));