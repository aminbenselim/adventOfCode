const inputs = process.argv[2].split(", ");

const dir = ['up','down','right','left'];
var currentDir = dir[0];
var horizental = 0 , vertical = 0;

inputs.forEach(function(v) {
    let num = +v.split("").slice(1,v.length).join("");
    console.log(num);
    switch (currentDir) {
        case 'up': 
            if (v[0] === 'R') {
                horizental += num; 
                currentDir=dir[2];
            } else {
                horizental -= num;
                currentDir=dir[3];
            } 
            break;
        case 'down': 
            if (v[0] == 'L') {
                horizental += num; 
                currentDir=dir[2];
            } else {
                horizental -= num;
                currentDir=dir[3];
            } 
            break;
        case 'left': 
            if (v[0] == 'R') {
                vertical += num;
                currentDir=dir[0];
            } else {
                vertical -= num;
                currentDir=dir[1];
            }
            break;
        case 'right': 
            if(v[0] === 'L') {
                vertical += num; 
                currentDir=dir[0];
            } else {
                vertical -= num;
                currentDir=dir[1];
            } 
            break;
        default:
            break;
    }     
});
console.log(horizental);
console.log(vertical);
console.log(Math.abs(horizental) + Math.abs(vertical));