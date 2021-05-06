const canvas = document.getElementById("canvas");

// improve resolution
canvas.width = 3840;
canvas.height = 2000;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.scale(13,13);


var angle = 0;

var score = 1;

var squareX = 300;
var squareY = 30;

var longRectBottomX = 300;
var longRectBottomY = 120;

var longRectTopX = -30;
var longRectTopY = 5;

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    score++;
    ctx.fillText("Score: "+score, 8, 20);
   }


const userCircle = {
    userX: 100, 
    userY: 50, 
    radius: 4,
    color: "red",
    drawUserShape: function() {
        ctx.beginPath(),
        ctx.arc(this.userX, this.userY, this.radius, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
        canvas.addEventListener("mousemove", updateUserShape, false);
    }

};

const tallRect = {
    x: 280,
    y: -50,
    width: 10,
    length: 135,
    drawTallRect: function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, 10, 135);
        ctx.fillStyle = "#0095DD";
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    },

    updateTallRect: function(){
        this.x -= (angle + 0.75);
        this.y += 0.5;
    
    
        if(this.y == 200 || this.x == 0) {
            this.y = -50;
            this.x = 280;
        }
    }

}

const bigCircle = {
    bCirX: 60,
    bCirY: 250,
    radius: 60,
    drawBall: function() {
        ctx.beginPath();
        ctx.arc(this.bCirX, this.bCirY, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    },

    updateBall: function(){
        this.bCirX -= angle;
        this.bCirY -= 0.25;
    
        if(this.bCirY <= -70) {
            this.bCirY += 270;
        }
    }

}

class Rectangle {
    constructor(rectX, rectY, rectWidth, rectHeight, fallSpeed){
        this.rectX = rectX;
        this.rectY = rectY;
        this.rectWidth = rectWidth;
        this.rectHeight = rectHeight;
        this.fallSpeed = fallSpeed;
    }

    drawRect() {
        ctx.beginPath();
        ctx.rect(this.rectX, this.rectY, this.rectWidth, this.rectHeight);
        ctx.fillStyle = "#0095DD";
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
            
        this.updateRect();

        }

        updateRect(){
            this.rectX -= angle;
            this.rectY += this.fallSpeed;
                
            if(this.rectY >= 200) {
            this.rectY -= 250;
            }
        }
}



const rectangle = new Rectangle(100, 0, 10, 10, 1.5);
const rectangle2 = new Rectangle(125, 0, 10, 10, 2);
const rectangle3 = new Rectangle(150, 0, 10, 10, 2.25);
const rectangle4 = new Rectangle(175, 0, 10, 10, 2.5);
const rectangle5 = new Rectangle(195, 0, 10, 10, 2.75);
const longRect = new Rectangle(195, 0, 100, 20, 0.35);


// big square
function drawSquare() {
    ctx.beginPath();
    ctx.rect(squareX, squareY, 50, 50);
    ctx.fillStyle = "#0095DD";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}

function longRectBottom() {
    ctx.beginPath();
    ctx.rect(longRectBottomX, longRectBottomY, 50, 30);
    ctx.fillStyle = "#0095DD";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}

function longRectTop() {
    ctx.beginPath();
    ctx.rect(longRectTopX, longRectTopY, 50, 20);
    ctx.fillStyle = "#0095DD";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

}


function updateSquare(){
    squareX -= 1


    if(squareX <= -50) {
        squareX += 350;
    }
}

function updatelongRectBottom(){
    longRectBottomX -= 0.66;


    if(longRectBottomX <= -50) {
        longRectBottomX += 350;
    }
}

function updatelongRectTop(){
    longRectTopX += 0.4;


    if(longRectTopX >= 350) {
        longRectTopX -= 380;
    }
}

function updateUserShape(e){
    userCircle.userX = (e.clientX/6.3);
    userCircle.userY = (e.clientY/6.3);
    console.log(e.clientX);
    console.log(e.clientY);
    
}

function collisionDectection(){
    var dx = bigCircle.bCirX - userCircle.userX;
    var dy = bigCircle.bCirY - userCircle.userY;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < bigCircle.radius + userCircle.radius) {
        // alert("game over. Your score: "+ score);
        userCircle.color = "yellow";
    }
    else if(userCircle.userX < rectangle.rectX + (rectangle.rectWidth + 5) &&
        userCircle.userX + (rectangle.rectWidth - 5) > rectangle.rectX &&
        userCircle.userY < rectangle.rectY + (rectangle.rectHeight + 3) &&
        userCircle.userY + (rectangle.rectHeight - 5) > rectangle.rectY) {
        // alert("game over. Your score: "+ score);
        userCircle.color = "yellow";
    }

    else if(userCircle.userX < rectangle2.rectX + (rectangle2.rectWidth + 5) &&
        userCircle.userX + (rectangle2.rectWidth - 5) > rectangle2.rectX &&
        userCircle.userY < rectangle2.rectY + (rectangle2.rectHeight + 3) &&
        userCircle.userY + (rectangle2.rectHeight - 5) > rectangle2.rectY) {
        // alert("game over. Your score: "+ score);
        userCircle.color = "yellow";
    }

    else if(userCircle.userX < rectangle3.rectX + (rectangle3.rectWidth + 5) &&
    userCircle.userX + (rectangle3.rectWidth - 5) > rectangle3.rectX &&
    userCircle.userY < rectangle3.rectY + (rectangle3.rectHeight + 3) &&
    userCircle.userY + (rectangle3.rectHeight - 5) > rectangle3.rectY) {
        // alert("game over. Your score: "+ score);
        userCircle.color = "yellow";

    }

    else if(userCircle.userX < rectangle4.rectX + (rectangle4.rectWidth + 5) &&
    userCircle.userX + (rectangle4.rectWidth - 5) > rectangle4.rectX &&
    userCircle.userY < rectangle4.rectY + (rectangle4.rectHeight + 3) &&
    userCircle.userY + (rectangle4.rectHeight - 5) > rectangle4.rectY) {
        // alert("game over. Your score: "+ score);
        userCircle.color = "yellow";

    }   

    else if(userCircle.userX < rectangle5.rectX + (rectangle5.rectWidth + 5) &&
    userCircle.userX + (rectangle5.rectWidth - 5) > rectangle5.rectX &&
    userCircle.userY < rectangle5.rectY + (rectangle5.rectHeight + 3) &&
    userCircle.userY + (rectangle5.rectHeight - 5) > rectangle5.rectY) {
        // alert("game over. Your score: "+ score);
        userCircle.color = "yellow";

    }
    
    else if(userCircle.userX < longRect.rectX + (longRect.rectWidth + 5) &&
    userCircle.userX + (longRect.rectWidth - 96) > longRect.rectX &&
    userCircle.userY < longRect.rectY + longRect.rectHeight &&
    userCircle.userY + longRect.rectHeight > (longRect.rectY + 15)) {
        // alert("game over. Your score: "+ score);
        userCircle.color = "yellow";

    }

    else if(userCircle.userX < tallRect.x + 14 &&
    userCircle.userX + 5 > tallRect.x &&
    userCircle.userY < tallRect.y + 140 &&
    userCircle.userY + 3 > tallRect.y) {
        // alert("game over. Your score: "+ score);
        userCircle.color = "yellow";

    }

    else if(userCircle.userX < squareX + 50 &&
        userCircle.userX + 0 > squareX &&
        userCircle.userY < squareY + 55 &&
        userCircle.userY + 5 > squareY) {
            // alert("game over. Your score: "+ score);
            userCircle.color = "yellow";
    }

    else if(userCircle.userX < longRectBottomX + 55 &&
        userCircle.userX + 5 > longRectBottomX &&
        userCircle.userY < longRectBottomY + 55 &&
        userCircle.userY + 5 > longRectBottomY) {
            // alert("game over. Your score: "+ score);
            userCircle.color = "yellow";
    }

    else if(userCircle.userX < longRectTopX + 55 &&
        userCircle.userX + 5 > longRectTopX &&
        userCircle.userY < longRectTopY + 25 &&
        userCircle.userY + 5 > longRectTopY) {
            // alert("game over. Your score: "+ score);
            userCircle.color = "yellow";
    }

    else {
        userCircle.color = "red";
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bigCircle.drawBall();
    rectangle.drawRect();
    rectangle2.drawRect();

    // if(score >= 250) {
    rectangle3.drawRect();
    rectangle4.drawRect();
    rectangle3.updateRect();
    rectangle4.updateRect();
    

    // }

    // if(score >= 500) {
        rectangle5.drawRect();
        rectangle5.updateRect();

        

    // }

    // if(score >= 750){
        longRect.drawRect();
        longRect.updateRect();
    // }

    // if(score >= 1000) {
        tallRect.drawTallRect();
        drawSquare();
        tallRect.updateTallRect();
        updateSquare();
    // }

    // if(score > 1250) {
        longRectBottom();
        longRectTop();
        updatelongRectBottom();
        updatelongRectTop();
    // }

    
    userCircle.drawUserShape();

    bigCircle.updateBall();
    rectangle.updateRect();
    rectangle2.updateRect();
    
    
    canvas.addEventListener("mousemove", updateUserShape, false);

    collisionDectection();
    // drawScore();

    
}

console.log(canvas.width);
setInterval(draw, 25);


