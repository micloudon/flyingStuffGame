const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var ballH = 50;
var ballV = 0;

var rectH = 100;
var rectV = 0;

var rectH2 = 135;
var rectV2 = 0;

var rectH3 = 165;
var rectV3 = 0;

var rectH4 = 195;
var rectV4 = 0;

var longRectH = 200;
var longRectV = 0;

var longRectH = 200;
var longRectV = 0;

var tallRectH = 280;
var tallRectV = -50;

var squareH = 300;
var squareV = 30;

var userCircle = {
    userX: 100, 
    userY: 50, 
    radius: 6,
    drawUserShape: function() {
        ctx.beginPath(),
        ctx.arc(this.userX, this.userY, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    
        canvas.addEventListener("mousemove", updateUserShape, false);
    }

};

var bigCircle = {
    bCirX: 50,
    bCirY: 0,
    radius: 40,
    drawBall: function() {
        ctx.beginPath();
        ctx.arc(this.bCirX, this.bCirY, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    
        updateBall();
    }

}


var angle = 0;

// ball shape
// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(ballH, ballV, 40, 0, Math.PI*2);
//     ctx.fillStyle = "#0095DD";
//     ctx.fill();
//     ctx.closePath();

//     updateBall();
// }

// small rect
function drawRect() {
    ctx.beginPath();
    ctx.rect(rectH, rectV, 10, 10);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    updateRect();
}

// small rect
function drawRect2() {
    ctx.beginPath();
    ctx.rect(rectH2, rectV2, 10, 10);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    updateRect2();
}

// small rect
function drawRect3() {
    ctx.beginPath();
    ctx.rect(rectH3, rectV3, 10, 10);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    updateRect3();
}

// small rect
function drawRect4() {
    ctx.beginPath();
    ctx.rect(rectH4, rectV4, 10, 10);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    updateRect4();
}

// long rect
function drawLongRect() {
    ctx.beginPath();
    ctx.rect(longRectH, longRectV, 90, 20);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    updateLongRect();
}

// tall rect
function drawTallRect() {
    ctx.beginPath();
    ctx.rect(tallRectH, tallRectV, 10, 70);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    updateTallRect()
}

// big square
function drawSquare() {
    ctx.beginPath();
    ctx.rect(squareH, squareV, 50, 50);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    

}



function updateBall(){
    ballH -= angle;
    ballV += 0.25;

    if(ballV >= 200) {
        ballV -= 250;
    }
}

function updateRect(){
    rectH -= angle;
    rectV += 1.8;

    if(rectV == 200) {
        rectV -= 250;
    }
}

function updateRect2(){
    rectH2 -= angle;
    rectV2 += 2.5;

    if(rectV2 >= 200) {
        rectV2 -= 250;
    }
}

function updateRect3(){
    rectH3 -= angle;
    rectV3 += 3;

    if(rectV3 >= 200) {
        rectV3 -= 250;
    }
}

function updateRect4(){
    rectH4 -= angle;
    rectV4 += 3.3;

    if(rectV4 >= 200) {
        rectV4 -= 250;
    }
}

function updateLongRect(){
    longRectH -= angle;
    longRectV += 0.35;


    if(longRectV >= 200) {
        longRectV -= 250;
    
    }

}

function updateTallRect(){
    tallRectH -= (angle + 1.5);
    tallRectV += 1;


    if(tallRectV == 200 || tallRectH == 0) {
        tallRectV = -50;
        tallRectH = 280;
    }
}

function updateSquare(){
    squareH -= 1


    if(squareH == -50) {
        squareH += 350;
    }
}


function updateUserShape(e){
    userCircle.userX = (e.clientX/6);
    userCircle.userY = (e.clientY/6);
    
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawRect();
    drawRect2();
    drawRect3();
    drawRect4();
    drawLongRect();
    drawTallRect();
    drawSquare();
    // drawUserShape();
    userCircle.drawUserShape();

    updateBall();
    updateRect();
    updateRect2();
    updateRect3();
    updateRect4();
    updateLongRect();
    updateTallRect();
    updateSquare();
    canvas.addEventListener("mousemove", updateUserShape, false);

    var dx = ballH - userH;
    var dy = ballV - userV;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 40 + 6) {
        
    }
    
}



setInterval(draw, 25);

