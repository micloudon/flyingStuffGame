const canvas = document.getElementById("canvas");
const startBtn = document.querySelector('#start-game');


// improve resolution
canvas.width = 3840;
canvas.height = 2000;
const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.scale(13,13);


// Global variables
var score = 1;
var speed = 1;
var intervalTimer = 30;
var mx = canvas.width / canvas.clientWidth;
var my = canvas.height / canvas.clientHeight;
var angle = 0;
var interval = setInterval(draw, intervalTimer);
var myobj = document.getElementById("overlay");


// Game flow functions

startBtn.addEventListener('click', () => {

    if(score < 100) {
        startGame();
    }

    else {
        location.reload();
    }
})


function startGame() {
    interval
    myobj.style.width = "0%";

  }

  function gameOver() {

    if(score > 100) {
     clearInterval(interval);
    myobj.style.width = "100%";
    document.getElementById('game-over-msg').innerHTML = "GameOver";
    document.getElementById('display-score').innerHTML = "Your Score: " + (score + 1);
    document.getElementById('start-game').innerHTML = "New Game";   
    }
    
}


function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    score++;
    ctx.fillText("Score: "+score, 8, 20);
   }


//    Shapes
const userCircle = {
    x: 100, 
    y: 50, 
    radius: 4,
    color: "red",
    draw: function() {
        ctx.beginPath(),
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
        canvas.addEventListener("mousemove", updateUserShape, false);
        canvas.addEventListener("touchmove", updateUserShape, false);
    }

};

const tallRect = {
    x: 400,
    y: -70,
    width: 10,
    length: 135,
    draw: function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, 10, 135);
        ctx.fillStyle = "#0095DD";
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    },

    update: function(){
        this.x -= (1.5 * speed);
        this.y += (1 * speed);
    
    
        if(this.y == 200 || this.x == 0) {
            this.y = -50;
            this.x = 280;
        }
    }

}

const square = {
    x: 500,
    y: 30,
    width: 50,
    length: 50,
    draw: function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.length);
        ctx.fillStyle = "#0095DD";
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    },

    update: function(){
        this.x -= (1.5 * speed)
        if(this.x <= -50) {
            this.x += 350;
        }
    }
}

const longRectBottom = {
    x: 500,
    y: 120,
    width: 50,
    length: 30,
    draw: function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.length);
        ctx.fillStyle = "#0095DD";
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    },

    update: function(){
        this.x -= (1.2 * speed);


    if(this.x <= -50) {
        this.x += 350;
        }
    }
}

const longRectTop = {
    x: -60,
    y: 5,
    width: 50,
    length: 30,
    draw: function() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.length);
        ctx.fillStyle = "#0095DD";
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    },

    update: function(){
        this.x += (0.8 * speed);
    if(this.x >= 350) {
        this.x -= 380;
        }
    }
}


const bigCircle = {
    x: 60,
    y: 300,
    radius: 60,
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    
    },

    update: function(){
        this.x -= angle;
        this.y -= 0.5 * speed;
        
    
        if(this.y <= -70) {
            this.y += 270;
        }
    }

}

class Rectangle {
    constructor(x, y, width, height, fallSpeed){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fallSpeed = fallSpeed;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#0095DD";
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
            
        }

        update(){
            this.x -= angle;
            this.y += this.fallSpeed;
                
            if(this.y >= 200) {
            this.y -= 250;
            }
        }
}



const rectangle = new Rectangle(100, -15, 10, 10, (2.5 * speed));
const rectangle2 = new Rectangle(125, -15, 10, 10, (3 * speed));
const rectangle3 = new Rectangle(150, -15, 10, 10, (3.25 * speed));
const rectangle4 = new Rectangle(175, -15, 10, 10, (3.5 * speed));
const rectangle5 = new Rectangle(188, -15, 10, 10, (4 * speed));
const rectangle6 = new Rectangle(112, -15, 10, 10, (1.8 * speed));
const rectangle7 = new Rectangle(137, -15, 10, 10, (2.2 * speed));
const rectangle8 = new Rectangle(160, -15, 10, 10, (2.8 * speed));
const rectangle9 = new Rectangle(208, -15, 10, 10, (2 * speed));
const rectangle10 = new Rectangle(228, -15, 10, 10, (2.5 * speed));
const rectangle11 = new Rectangle(248, -15, 10, 10, (2.3 * speed));
const longRect = new Rectangle(195, -25, 100, 20, (0.35 * speed));


function updateUserShape(e){

    userCircle.x = (e.clientX/13) * mx;
    userCircle.y = (e.clientY/13) * my;
    
}

// Game dynamics
function collisionDectection(){
    var dx = bigCircle.x - userCircle.x;
    var dy = bigCircle.y - userCircle.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < bigCircle.radius + userCircle.radius) {
        // userCircle.color = "yellow";
        gameOver();
        
    }
    else if(userCircle.x < rectangle.x + (rectangle.width + 5) &&
        userCircle.x + (rectangle.width - 5) > rectangle.x &&
        userCircle.y < rectangle.y + (rectangle.height + 3) &&
        userCircle.y + (rectangle.height - 5) > rectangle.y) {
        // userCircle.color = "yellow";
        gameOver();
    }

    else if(userCircle.x < rectangle2.x + (rectangle2.width + 5) &&
        userCircle.x + (rectangle2.width - 5) > rectangle2.x &&
        userCircle.y < rectangle2.y + (rectangle2.height + 3) &&
        userCircle.y + (rectangle2.height - 5) > rectangle2.y) {
            // userCircle.color = "yellow";
        gameOver();
    }

    else if(userCircle.x < rectangle3.x + (rectangle3.width + 5) &&
    userCircle.x + (rectangle3.width - 5) > rectangle3.x &&
    userCircle.y < rectangle3.y + (rectangle3.height + 3) &&
    userCircle.y + (rectangle3.height - 5) > rectangle3.y) {
        // userCircle.color = "yellow";
        gameOver();
    }

    else if(userCircle.x < rectangle4.x + (rectangle4.width + 5) &&
    userCircle.x + (rectangle4.width - 5) > rectangle4.x &&
    userCircle.y < rectangle4.y + (rectangle4.height + 3) &&
    userCircle.y + (rectangle4.height - 5) > rectangle4.y) {
        // userCircle.color = "yellow";
        gameOver();

    }   

    else if(userCircle.x < rectangle5.x + (rectangle5.width + 5) &&
    userCircle.x + (rectangle5.width - 5) > rectangle5.x &&
    userCircle.y < rectangle5.y + (rectangle5.height + 3) &&
    userCircle.y + (rectangle5.height - 5) > rectangle5.y) {
        // userCircle.color = "yellow";
        gameOver();

    }

    else if(userCircle.x < rectangle6.x + (rectangle6.width + 5) &&
    userCircle.x + (rectangle6.width - 5) > rectangle6.x &&
    userCircle.y < rectangle6.y + (rectangle6.height + 3) &&
    userCircle.y + (rectangle6.height - 5) > rectangle6.y) {
        // userCircle.color = "yellow";
        gameOver();

    }

    else if(userCircle.x < rectangle7.x + (rectangle7.width + 5) &&
    userCircle.x + (rectangle7.width - 5) > rectangle7.x &&
    userCircle.y < rectangle7.y + (rectangle7.height + 3) &&
    userCircle.y + (rectangle7.height - 5) > rectangle7.y) {
        // userCircle.color = "yellow";
        gameOver();

    }

    else if(userCircle.x < rectangle8.x + (rectangle8.width + 5) &&
    userCircle.x + (rectangle8.width - 5) > rectangle8.x &&
    userCircle.y < rectangle8.y + (rectangle8.height + 3) &&
    userCircle.y + (rectangle8.height - 5) > rectangle8.y) {
        // userCircle.color = "yellow";
        gameOver();

    }

    else if(userCircle.x < rectangle9.x + (rectangle9.width + 5) &&
    userCircle.x + (rectangle9.width - 5) > rectangle9.x &&
    userCircle.y < rectangle9.y + (rectangle9.height + 3) &&
    userCircle.y + (rectangle9.height - 5) > rectangle9.y) {
        // userCircle.color = "yellow";
        gameOver();

    }

    else if(userCircle.x < rectangle10.x + (rectangle10.width + 5) &&
    userCircle.x + (rectangle10.width - 5) > rectangle10.x &&
    userCircle.y < rectangle10.y + (rectangle10.height + 3) &&
    userCircle.y + (rectangle10.height - 5) > rectangle10.y) {
        // userCircle.color = "yellow";
        gameOver();

    }

    else if(userCircle.x < rectangle11.x + (rectangle11.width + 5) &&
    userCircle.x + (rectangle11.width - 5) > rectangle11.x &&
    userCircle.y < rectangle11.y + (rectangle11.height + 3) &&
    userCircle.y + (rectangle11.height - 5) > rectangle11.y) {
        // userCircle.color = "yellow";
        gameOver();

    }
    
    else if(userCircle.x < longRect.x + (longRect.width + 5) &&
    userCircle.x + (longRect.width - 96) > longRect.x &&
    userCircle.y < longRect.y + longRect.height &&
    userCircle.y + longRect.height > (longRect.y + 15)) {
        // userCircle.color = "yellow";
        gameOver();

    }

    else if(userCircle.x < tallRect.x + 14 &&
    userCircle.x + 5 > tallRect.x &&
    userCircle.y < tallRect.y + 140 &&
    userCircle.y + 3 > tallRect.y) {
        // userCircle.color = "yellow";
        gameOver();

    }

    else if(userCircle.x < square.x + square.width &&
        userCircle.x + 0 > square.x &&
        userCircle.y < square.y + (square.width + 5) &&
        userCircle.y + 5 > square.y) {
            // userCircle.color = "yellow";
            gameOver();
    }

    else if(userCircle.x < longRectBottom.x + 55 &&
        userCircle.x + 4 > longRectBottom.x &&
        userCircle.y < longRectBottom.y + 55 &&
        userCircle.y + 5 > longRectBottom.y) {
            // userCircle.color = "yellow";
            gameOver();
    }

    else if(userCircle.x < longRectTop.x + 55 &&
        userCircle.x + 5 > longRectTop.x &&
        userCircle.y < longRectTop.y + 25 &&
        userCircle.y + 5 > longRectTop.y) {
            // userCircle.color = "yellow";
            gameOver();
    }

    else {
        userCircle.color = "red";
    }
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    bigCircle.draw();
    rectangle.draw();
    rectangle2.draw();

    userCircle.draw();


    bigCircle.update();
    rectangle.update();
    rectangle2.update();

    if(score >= 250) {
    intervalTimer -= 3;
    speed = 1.2;
    rectangle3.draw();
    rectangle4.draw();
    rectangle3.update();
    rectangle4.update();
    
    }

    if(score >= 500) {
         intervalTimer -= 3;
         speed += 0.3;
         rectangle5.draw();
         rectangle5.update();
         longRect.draw();
         longRect.update();
     }

     if(score >= 750){
         intervalTimer -= 3;
         speed += 0.3;
         tallRect.draw();
         tallRect.update();
         square.draw();
         square.update();
        
     }

     if(score >= 1000) {
         intervalTimer -= 3;
         longRectBottom.draw();
         longRectTop.draw();
         longRectBottom.update();
         longRectTop.update();
        
     }

     if(score > 1250) {
         intervalTimer -= 3;
         speed += 0.3;
         rectangle6.draw();
         rectangle6.update();
         rectangle7.draw();
         rectangle7.update();
        
     }

     if(score > 1500) {
         speed += 0.3;
         intervalTimer -= 3;
         rectangle8.update();
         rectangle8.draw();
         rectangle9.update();
         rectangle9.draw();

     }

     if(score > 1750) {
         speed += 0.4;
         rectangle10.update();
         rectangle10.draw();
         rectangle11.update();
         rectangle11.draw();
     }

     if(score > 2000) {
         speed += 0.4;
     }
    
     
    
    canvas.addEventListener("mousemove", updateUserShape, false);
    canvas.addEventListener("touchmove", updateUserShape, false);

    collisionDectection();
    drawScore();

    
}



