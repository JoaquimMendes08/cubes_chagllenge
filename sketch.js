var lives = 5;
var stars = 0;

var gameOverImg;
var victoryImg;

var starImg;

function preload(){

  gameOverImg = loadImage('gameOver.png');
  victoryImg = loadImage('victory.png');

  starImg = loadImage('star.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  player = createSprite(windowWidth / 25, windowHeight - 80, 25, 25);
  player.shapeColor = 'lightgreen';

  gameOver = createSprite(windowWidth / 2, windowHeight - 400);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;

  victory = createSprite(windowWidth / 2, windowHeight - 400);
  victory.addImage(victoryImg);
  victory.visible = false;

  // -------------------------------------------------------------------------
  wallR = createSprite(windowWidth / 1, windowHeight - 360, 15, windowHeight);
  wallR.shapeColor = 'black'
  wallL = createSprite(windowWidth / 220, windowHeight - 360, 15, windowHeight);
  wallL.shapeColor = 'black'
  wallT = createSprite(windowWidth / 2, windowHeight - 720, windowWidth, 15);
  wallT.shapeColor = 'black'
  wallB = createSprite(windowWidth / 2, windowHeight - 5, windowWidth, 15);
  wallB.shapeColor = 'black'

  //-------------------------------------------------------------------------
  wall2 = createSprite(windowWidth / 10, windowHeight - 150, 10, windowHeight / 2.3);
  wall2.shapeColor = 'blue';

  wall3 = createSprite(windowWidth / 4, windowHeight - 600, windowWidth /1.4, 10);
  wall3.shapeColor = 'red';

  wall4 = createSprite(windowWidth / 10, windowHeight - 665, 10, windowHeight / 6.5);
  wall4.shapeColor = 'orange';

  gate = createSprite(windowWidth / 7, windowHeight - 665, 15, windowHeight / 6);
  gate.shapeColor = '#4F4F4F';

  // -------------------------------------------------------------------------
  wallG1 = createSprite(windowWidth / 3.7, windowHeight - 104, 10, windowHeight / 3.7);
  wallG1.shapeColor = '#279700';

  wallG2 = createSprite(windowWidth / 2.5, windowHeight - 104, 10, windowHeight / 3.7);
  wallG2.shapeColor = '#279700'; 

  wallG3 = createSprite(windowWidth / 1.9, windowHeight - 104, 10, windowHeight / 3.7);
  wallG3.shapeColor = '#279700';

  wallG4 = createSprite(windowWidth / 1.57, windowHeight - 104, 10, windowHeight / 3.7);
  wallG4.shapeColor = '#279700';

  wallG5 = createSprite(windowWidth / 1.33, windowHeight - 104, 10, windowHeight / 3.7);
  wallG5.shapeColor = '#279700';

  wallG6 = createSprite(windowWidth / 1.15, windowHeight - 104, 10, windowHeight / 3.7);
  wallG6.shapeColor = '#279700';

  // -------------------------------------------------------------------------
  cubeH1 = createSprite(windowWidth / 7, windowHeight - 190, 20, 20);
  cubeH1.shapeColor = 'red';

  cubeH2 = createSprite(windowWidth / 3, windowHeight - 190, 20, 20);
  cubeH2.shapeColor = 'red';

  cubeH3 = createSprite(windowWidth / 2.1, windowHeight - 190, 20, 20);
  cubeH3.shapeColor = 'red';

  cubeH4 = createSprite(windowWidth / 1.8, windowHeight - 190, 20, 20);
  cubeH4.shapeColor = 'red';

  cubeH5 = createSprite(windowWidth / 1.4, windowHeight - 190, 20, 20);
  cubeH5.shapeColor = 'red';

  cubeH6 = createSprite(windowWidth / 1.3, windowHeight - 190, 20, 20);
  cubeH6.shapeColor = 'red';

  cubeH7 = createSprite(windowWidth / 1.1, windowHeight - 190, 20, 20);
  cubeH7.shapeColor = 'red';

  //--------------------------------------------------------------------------
  cubeV1 = createSprite(windowWidth / 3.7, windowHeight - 320, 20, 20);
  cubeV1.shapeColor = 'red';

  cubeV2 = createSprite(windowWidth / 2.5, windowHeight - 350, 20, 20);
  cubeV2.shapeColor = 'red';

  cubeV3 = createSprite(windowWidth / 1.9, windowHeight - 330, 20, 20);
  cubeV3.shapeColor = 'red';

  cubeV4 = createSprite(windowWidth / 1.57, windowHeight - 347, 20, 20);
  cubeV4.shapeColor = 'red';

  cubeV5 = createSprite(windowWidth / 1.33, windowHeight - 300, 20, 20);
  cubeV5.shapeColor = 'red';

  cubeV6 = createSprite(windowWidth / 1.15, windowHeight - 370, 20, 20);
  cubeV6.shapeColor = 'red';

  cubeV7 = createSprite(windowWidth / 1.9, windowHeight - 690, 20, 20);
  cubeV7.shapeColor = 'red';
  cubeV7.velocity.y = 10

  //---------------------------------------------------------------------------
  star1 = createSprite(windowWidth / 5, windowHeight - 60)
  star1.addImage(starImg);
  star1.scale = 0.3;

  star2 = createSprite(windowWidth / 3, windowHeight - 60)
  star2.addImage(starImg);
  star2.scale = 0.3;

  star3 = createSprite(windowWidth / 2.15, windowHeight - 60)
  star3.addImage(starImg);
  star3.scale = 0.3;

  star4 = createSprite(windowWidth / 1.7, windowHeight - 60)
  star4.addImage(starImg);
  star4.scale = 0.3;

  star5 = createSprite(windowWidth / 1.47, windowHeight - 60)
  star5.addImage(starImg);
  star5.scale = 0.3;

  star6 = createSprite(windowWidth / 1.25, windowHeight - 60)
  star6.addImage(starImg);
  star6.scale = 0.3;

  star7 = createSprite(windowWidth / 1.1, windowHeight - 60)
  star7.addImage(starImg);
  star7.scale = 0.3;

  //---------------------------------------------------------------------------
  cubeHG = new Group();
  cubeHG.add(cubeH1);
  cubeHG.add(cubeH2);
  cubeHG.add(cubeH3);
  cubeHG.add(cubeH4);
  cubeHG.add(cubeH5);
  cubeHG.add(cubeH6);
  cubeHG.add(cubeH7);

  cubeHG.setVelocityXEach(15);

  //-----------------------------------------------------------------------------
  cubeVG = new Group();
  cubeVG.add(cubeV1);
  cubeVG.add(cubeV2);
  cubeVG.add(cubeV3);
  cubeVG.add(cubeV4);
  cubeVG.add(cubeV5);
  cubeVG.add(cubeV6);

  cubeVG.setVelocityYEach(16);
  
}

function draw() {
  background("black");

//----------------------------------------------------------------------------
  player.collide(wall2);
  player.collide(wall3);
  player.collide(gate);
  player.collide(wallG1);
  player.collide(wallG2);
  player.collide(wallG3);
  player.collide(wallG4);
  player.collide(wallG5);
  player.collide(wallG6);
  player.collide(wallL);
  player.collide(wallR);
  player.collide(wallT);
  player.collide(wallB);

// ---------------------------------------------------------------------------
  cubeHG.bounceOff(wall2);
  cubeHG.bounceOff(wallG1);
  cubeHG.bounceOff(wallG2);
  cubeHG.bounceOff(wallG3);
  cubeHG.bounceOff(wallG4);
  cubeHG.bounceOff(wallG5);
  cubeHG.bounceOff(wallG6);
  cubeHG.bounceOff(wallR);

//-------------------------------------------------------------------------------
  cubeVG.bounceOff(wall2);
  cubeVG.bounceOff(wallG1);
  cubeVG.bounceOff(wallG2);
  cubeVG.bounceOff(wallG3);
  cubeVG.bounceOff(wallG4);
  cubeVG.bounceOff(wallG5);
  cubeVG.bounceOff(wallG6);
  cubeVG.bounceOff(wall3);
  cubeVG.bounceOff(wallT);
  cubeV7.bounceOff(wall3);
  cubeV7.bounceOff(wallT);

//--------------------------------------------------------------------------------
  if(player.isTouching(cubeHG) || player.isTouching(cubeVG) || player.isTouching(cubeV7)){
    console.log("perdeu")
    lives -= 1;
    player.x = windowWidth / 25;
    player.y = windowHeight - 80;
  }

  if(lives == 0){
    gameOver.visible = true;
    cubeHG.setVelocityXEach(0);
    cubeVG.setVelocityYEach(0);
    cubeV7.velocity.y = 0
    player.shapeColor = 'red';
    player.velocity.x = 0;
    player.velocity.y = 0;
  }else{
    playerMover();
  }

  if(player.isTouching(star1)){
    star1.destroy();
    stars += 1
  }
  if(player.isTouching(star2)){
    star2.destroy();
    stars += 1
  }
  if(player.isTouching(star3)){
    star3.destroy();
    stars += 1
  }
  if(player.isTouching(star4)){
    star4.destroy();
    stars += 1
  }
  if(player.isTouching(star5)){
    star5.destroy();
    stars += 1
  }
  if(player.isTouching(star6)){
    star6.destroy();
    stars += 1
  }
  if(player.isTouching(star7)){
    star7.destroy();
    stars += 1
  }
  if(stars == 7){
    gate.destroy();
  }
  if(player.isTouching(wall4)){
    victory.visible = true;
    cubeHG.destroyEach();
    cubeVG.destroyEach();
    cubeV7.destroy();
  }

  drawSprites(); 

//-----------------------------------------------------------------------------------
  fill('white');
  textSize(40);
  text("❤️: " + lives + "/5", windowWidth / 1.5, windowHeight - 665);

  fill('white');
  textSize(40);
  text("⭐: " + stars + "/7", windowWidth / 1.3, windowHeight - 665);
}

function playerMover(){
  if(keyIsDown(UP_ARROW)){
    player.position.y -= 10;
  }

  if(keyIsDown(DOWN_ARROW)){
    player.position.y += 10;
  }
       
  if(keyIsDown(LEFT_ARROW)){
    player.position.x -= 10;
  }

  if(keyIsDown(RIGHT_ARROW)){
    player.position.x += 10;
  }
}