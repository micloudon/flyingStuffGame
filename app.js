const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var ballH = 100;
var ballV = 0;

var rectH = 200;
var rectV = 0;


var angle = 0;
var speed = -1;

var globalID;

// ctx.fillStyle = 'white';
// ctx.fillRect(40, 20, 200, 100);

// ctx.fillStyle = 'red';
// ctx.fillRect(40, 20, 10, 10);

function drawBall() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ballH, ballV, 15, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    updateBall();
}

function drawRect() {
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(rectH, rectV, 10, 10);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    updateRect();
}

function updateBall(){
    ballH -= angle;
    ballV -= speed;

    if(ballV == 200) {
        ballV -= 250;
    }
}

function updateRect(){
    rectH -= angle;
    rectV -= speed - 1;if(ballV == 200) {
        ballV -= 250;
    }

    if(rectV == 200) {
        rectV -= 250;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawRect();

    updateBall();
    updateRect();

    // ballVertical -= angle;
    // ballHorizontal -= speed;

    // rectVertical -= angle;
    // rectHorizontal -= speed - 1;
    
}


setInterval(draw, 25);


