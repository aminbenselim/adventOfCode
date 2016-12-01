const inputs = process.argv[2].split(", ");

const dir = ['up','down','right','left'];
var currentDir = dir[0];
var lef = 0 , top = 0;

inputs.forEach(function(v) {
    switch (currentDir) {
        case 'up': 
            if (v[0] === 'R') {
                lef += +v[1]; 
                currentDir=dir[2];
            } else {
                lef -= +v[1];
                currentDir=dir[3];
            } 
            break;
        case 'down': 
            if (v[0] == 'L') {
                lef += +v[1]; 
                currentDir=dir[2];
            } else {
                lef -= +v[1];
                currentDir=dir[3];
            } 
            break;
        case 'left': 
            if (v[0] == 'R') {
                top += +v[1]; 
                currentDir=dir[0];
            } else {
                top -= +v[1];
                currentDir=dir[1];
            }
            break;
        case 'right': 
            if(v[0] === 'L') {
                top += +v[1]; 
                currentDir=dir[0];
            } else {
                top -= +v[1];
                currentDir=dir[1];
            } 
            break;
        default:
            break;
    }     
});
console.log(lef);
console.log(top);
console.log(Math.abs(lef) + Math.abs(top));