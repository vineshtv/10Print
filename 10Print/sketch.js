let x = 0;
let y = 0;
let length = 20;
var normal10Print = 2;
function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    if (normal10Print == 0){
        strokeWeight(1);
        if(random(1) > 0.5){
            //stroke(255);
            stroke(100,200,255);
        }
        else{
            stroke(100,200,255);
        }
        if(random(1) > 0.5){
            line(x, y, x + length, y + length);
            //stroke(255);
            line(x+1, y-1, x + length + 1, y + length-1);
            line(x+2, y-2, x + length + 2, y + length-2);
            //line(x+3, y-3, x + length + 3, y + length-3);
        }
        else{
            line(x + length, y, x, y + length);
        }
        x = x + length;

        if (x > width){
            y = y + length;
            x = 0;
        }
    }
    else if (normal10Print == 1){
        stroke(100,200,255);
        var rand = floor(random(4));
        if (rand == 0) {
            line(x + length/2, y, x + length/2, y + length /2);
            line(x + length/2, y + length/2, x + length, y + length/2);
        }
        else if (rand == 1){
            line(x + length/2, y + length/2, x + length, y + length/2);
            line(x + length/2, y + length/2, x + length/2, y + length);
        }
        else if (rand == 2){
            line(x + length/2, y + length/2, x + length/2, y + length);
            line(x + length/2, y + length/2, x, y + length/2);
        }
        else if (rand == 3){
            line(x + length/2, y + length/2, x, y + length/2);
            line(x + length/2, y + length/2, x + length/2, y);
        }
        x = x + length;
        
        if (x > width){
            y = y + length;
            x = 0;
        }
    }
    else if (normal10Print == 2){
        stroke(100,200,255);
        strokeWeight(5);
        console.log(x,y);
        var rand = floor(random(4));
        
        if (rand == 0){
            line(x, y, x, y + length);
            line(x, y, x + length, y);
        }
        else if (rand == 1){
            line(x + length, y, x + length, y + length);
            line(x, y, x + length, y);
        }
        else if (rand == 2){
            line(x + length, y, x + length, y + length);
            line(x + length, y + length, x, y + length);
        }
        else if (rand == 3){
            line(x, y + length, x, y);
            line(x + length, y + length, x, y + length);
        }
        x = x + length;
        if (x > width){
            y = y + length;
            x = 0;
        }
        if(y > height){
            x = 0;
            y = 0;
        }
    }
}