const inputs = process.argv[2].split(", ");

const dir = ['up','down','right','left'];
var currentDir = dir[0];
var x = 0 , y = 0;
var visited = [];
var result = 0;

function isVisited(arr, ele) {
    let r = false;
    arr.forEach(function(e){
    if ( e[0] === ele[0] && e[1] === ele[1]) r = true;
    }); 
    return r;
}

function change(target, nb, op) {
    if(target == "x") {
        for(var i=0; i < nb; i++) {
            (op === '+') ? x += 1 : x -= 1;
            var e = [x, y];
            console.log(e + " x changed ");
            if(isVisited(visited, e) && result === 0) result = Math.abs(x) + Math.abs(y);
            visited.push(e);
        }
    } else {
        for(var j=0; j < nb; j++) {
            (op === '+') ? y += 1 : y -= 1;
            var e = [x, y];
            console.log(e + " y changed ");
            if(isVisited(visited, e) && result === 0) result = Math.abs(x) + Math.abs(y);
            visited.push(e);        }    
    }
}


inputs.forEach(function(v) {
    let num = +v.split("").slice(1,v.length).join("");
    switch (currentDir) {
        case 'up': 
            if (v[0] === 'R') {
                change('x',num, '+'); 
                currentDir=dir[2];                
            } else {
                change('x',num, '-'); 
                currentDir=dir[3];
            } 
            break;
        case 'down': 
            if (v[0] == 'L') {
                change('x',num, '+'); 
                currentDir=dir[2];                
            } else {
                change('x',num, '-'); 
                currentDir=dir[3];
            } 
            break;
        case 'left': 
            if (v[0] == 'R') {
               change('y',num, '+'); 
                currentDir=dir[0];                
            } else {
                change('y',num, '-'); 
                currentDir=dir[1];
            } 
            break;
        case 'right': 
            if(v[0] === 'L') {
                change('y',num, '+'); 
                currentDir=dir[0];                
            } else {
                change('y',num, '-'); 
                currentDir=dir[1];
            } 
            break;
        default:
            break;
    } 
});
console.log(result);