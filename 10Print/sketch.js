let x = 0;
let y = 0;
let length = 20;
var normal10Print = true;
function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    if (normal10Print){
        strokeWeight(5);
        if(random(1) > 0.5){
            stroke(255);
        }
        else{
            stroke(100,200,255);
        }
        if(random(1) > 0.5){
            line(x, y, x + length, y + length);
        }
        else{
            line(x + length, y, x, y + length);
        }
        x = x + length

        if (x > width){
            y = y + length;
            x = 0;
        }
    }
    else{
        
    }
}