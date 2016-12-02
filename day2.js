const fs = require('fs');
const lines = fs.readFileSync('day2.txt').toString().split("\n"); //save input lines in an array

console.log(lines.reduce((acc, ele, i)=> {
    let currentVal = (i === 0) ? 5 : acc[i-1];
    console.log('new line is '+ ele);
    ele.split('').forEach((e) => { //for each input line ,iterate iterate through its characters
        if(e === 'U' && currentVal > 3)  { // it is not in the upper line of keypad
            currentVal -= 3; 
            console.log('operation is '+ e + ' , move value to  '+ currentVal);
        } 
        if(e === 'L' && (currentVal) % 3 != 1) { // it is not 1, 4, 7
            currentVal -= 1; 
            console.log('operation is '+ e + ' , move value to  '+ currentVal);
        }
        if(e === 'R' && (currentVal) % 3 != 0) { // it is not 3, 6, 9
            currentVal += 1; 
            console.log('operation is '+ e + ' , move value to  '+ currentVal);
        }
        if(e === 'D' && currentVal <= 6) { // it is not in the lower line of keypad
            currentVal += 3; 
            console.log('operation is '+ e + ' , move value to  '+ currentVal);
        }
    });
    let r = acc.concat(currentVal);
    return r;
},[]));