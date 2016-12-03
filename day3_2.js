const fs = require('fs');
const lines = fs.readFileSync('day3.txt').toString().split("\n"); //save input lines in an array
newInput = [];

//flatten the array to a 1D array
for(var i=0; i < lines.length;i++) {
    line = lines[i].split("").slice(2,lines[i].length).join("").split('  ');
    line.forEach((e) => {
    if(e !== '') newInput.push(Number(e));
});
}
newTr = [];
//convert the array to pairs of three in an appropriate order
newInput.forEach((e,j) => {
    if([0, 1, 2].indexOf(j%9) !== -1 && j < (newInput.length-newInput.length%3)-6){
    newTr.push([e,newInput[j+3],newInput[j+6]]);}
});

console.log("result is " + newTr.reduce((acc, l, i) => {
    var r = 1;
    l.forEach((e,k)=> {
        let comp = e >= Number(l[(k+1)%3]) + Number(l[(k+2)%3]);
        if (comp) r = 0;
    })
        return acc + r ;
},0));