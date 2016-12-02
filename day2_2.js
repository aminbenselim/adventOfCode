const fs = require('fs');
const lines = fs.readFileSync('day2.txt').toString().split("\n"); //save input lines in an array

console.log(lines.reduce((acc, ele, i)=> {
    let currentVal = (i === 0) ? 5 : acc[i-1];
    console.log(acc);
    console.log('new line is '+ ele);
    ele.split('').forEach((e) => { //for each input line ,iterate iterate through its characters
        if(e === 'U' && [1,2,4,5,9].indexOf(currentVal) == -1)  { // it is not in the upper side of keypad
            (currentVal === 3 || currentVal === 13) ?  currentVal-= 2 : currentVal -=4; 
           console.log('operation is '+ e + ' , move value to  '+ currentVal);
        } 
        if(e === 'L' && [1,2,5,10,13].indexOf(currentVal) == -1) { // it is not in the left side of keypad
            currentVal -= 1; 
            console.log('operation is '+ e + ' , move value to  '+ currentVal);
        }
        if(e === 'R' && [1,12,4,9,13].indexOf(currentVal) == -1) { // it is not in the right side of keypad
            currentVal += 1; 
            console.log('operation is '+ e + ' , move value to  '+ currentVal);
        }
        if(e === 'D' && [10,12,5,9,13].indexOf(currentVal) == -1 ) { // it is not in the lower side of keypad
            (currentVal === 11 || currentVal === 1)?  currentVal+= 2 : currentVal +=4; 
            console.log('operation is '+ e + ' , move value to  '+ currentVal);
        }
    });
    let r = acc.concat(currentVal);
    return r;
},[]));