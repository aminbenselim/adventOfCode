const inputs = process.argv[2].split(", ");

const dir = ['up','down','right','left'];
var currentDir = dir[0];
var horizental = 0 , vertical = 0;
var visited = [];
var result = 0;

function isVisited(arr, ele) {
    let r= false;
     arr.forEach(function(e){
    if ( e[0]==ele[0] && e[1] == ele[1]) r = true;
    }); 
    return r;
}

function change(target, nb, op) {
    if(target == "h") {
        for(let i=1; i <= nb; i++) {
            (op === '+') ? horizental += 1 : horizental -= 1;
            elem = [horizental, vertical];
            if(isVisited(visited, elem) && result == 0) result = Math.abs(elem[0]) + Math.abs(elem[1]);
            visited.push(elem);
        }
    } else {
        for(let i=1; i <= nb; i++) {
            (op === '+') ? vertical += 1 : vertical -= 1;
            elem = [horizental, vertical];
            if(isVisited(visited, elem) && result == 0) result = Math.abs(elem[0]) + Math.abs(elem[1]);        }
            visited.push(elem);
    }
}


inputs.forEach(function(v) {
    let num = +v.split("").slice(1,v.length).join("");
    switch (currentDir) {
        case 'up': 
            if (v[0] === 'R') {
                change('h',num, '+'); 
                currentDir=dir[2];                
            } else {
                change('h',num, '-'); 
                currentDir=dir[3];
            } 
            break;
        case 'down': 
            if (v[0] == 'L') {
                change('h',num, '+'); 
                currentDir=dir[2];                
            } else {
                change('h',num, '-'); 
                currentDir=dir[3];
            } 
            break;
        case 'left': 
            if (v[0] == 'R') {
               change('v',num, '+'); 
                currentDir=dir[0];                
            } else {
                change('v',num, '-'); 
                currentDir=dir[1];
            } 
            break;
        case 'right': 
            if(v[0] === 'L') {
                change('v',num, '+'); 
                currentDir=dir[0];                
            } else {
                change('v',num, '-'); 
                currentDir=dir[1];
            } 
            break;
        default:
            break;
    } 
    elem = [horizental, vertical];
    console.log(elem.toString());
});
console.log(result);