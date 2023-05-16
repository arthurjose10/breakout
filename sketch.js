var ball, edges, paddle, brick, vidas;
var score;
var gameState;

function setup () {
createCanvas(400, 400);
//comando da bola
gameState =  "serve";


montarJogo();
}



function createRow(y, color) {
for (i = 0; i < 6; i++) {
brick = createSprite(65 + 54 * i, y + 50, 50, 25);
brick.shapeColor = color;
brinks.add(brick);
}
}


function brickHit(ball, brick) {
brick.remove();
score += 5;
}


function montarJogo() {
ball = createSprite(200, 250, 20, 20)
ball.shapeColor = "white";


//comando da raquete
paddle = createSprite(200, 350, 120, 10);
paddle.shapeColor = "white";



//criando as bordas de tela
edges = createEdgeSprites();



brinks = createGroup();



createRow(0, "red");
createRow(29, "yellow");
createRow(29 + 29, "green");
createRow(29 + 29 + 29, "blue");
  


score = 0;
vidas = 3;
}




function draw() {
background(0);
  
  
//texto da pontuação
textSize(20);
text("score: " + score, 100, 20);
text("vidas: " + vidas, 250, 20);

if (gameState == "serve"){
  paddle.velocityX = 0;
text('pressione "ESPAÇO" para iniciar', 60, 200)
if (keyDown("SPACE")){
//velocidade da bola
gameState = "play";
ball.velocityY = -5;
ball.velocityX = -6;
}
}

if(gameState == "gameOver"){
  textSize(50)
text("Game Over", 90, 200)

}
  
if(vidas<1){
gameState = "gameOver"


}

 
  

drawSprites();

if (gameState == "play") {
  
if(ball.y > 400){
gameState = 'serve'

ball.y = 250
ball.x = 200


paddle.x = 200
  
ball.velocityY = 0;
ball.velocityX = 0;
vidas -= 1;

}
  
  
  
  
if (!brinks[0]) {
//texto de vencedor
textSize(50);
text("você ganhou!", 55, 200);
ball.velocityY = 0;
ball.velocityX = 0;
ball.destroy();
paddle.destroy();
}



for (i = 0; i < 3; i++) {
  ball.bounceOff(edges[i]);
}


paddle.collide(edges);
ball.bounceOff(paddle);
ball.bounceOff(brinks, brickHit);



if (keyDown(LEFT_ARROW)){
paddle.velocityX = -6;
}

if (keyDown(RIGHT_ARROW)){
paddle.velocityX = 6;
 }
}


  if(gameState == " gameOver"){
  }


drawSprites();
}