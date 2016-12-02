const fs = require('fs');
const lines = fs.readFileSync('day2.txt').toString().split("\n");

console.log(lines.reduce((acc, ele, i)=> {
    let currentVal = (i === 0) ? 5 : acc[i-1];
    console.log('new line is '+ ele);
    ele.split('').forEach((e) => {
        if(e === 'U' && currentVal > 3)  {currentVal -= 3; console.log('operation is '+ e + ' , move value to  '+ currentVal);} // it is not in the upper line of keypad
        if(e === 'L' && (currentVal) % 3 != 1) {currentVal -= 1; console.log('operation is '+ e + ' , move value to  '+ currentVal);}// it is not 1, 4, 7
        if(e === 'R' && (currentVal) % 3 != 0) {currentVal += 1; console.log('operation is '+ e + ' , move value to  '+ currentVal);}// it is not 3, 6, 9
        if(e === 'D' && currentVal <= 6) {currentVal += 3 ; console.log('operation is '+ e + ' , move value to  '+ currentVal);}// it is not in the lower line of keypad
    });
    let r = acc.concat(currentVal);
    return r;
},[]));