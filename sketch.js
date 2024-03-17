var bg,bg2;
var girl,home,hospital,virus,germ,aeroplane,bus,cigarette,mask,sanitizer,vaccine,gathering,veggie,fruits,pizza,bfc_junk,mask2,sanitizer2;
var girl1,home1,hospital1,virus1,germ1,aeroplane1,bus1,cigarette1,mask1,sanitizer1,vaccine1,gathering1,veggie1,fruits1,pizza1,bfc_junk1;
var germG,saniG,cigG,maskG;
var score=0;
var life=5;
var PLAY =1;
var END =0
var gameState=PLAY

function preload(){

  bg=loadImage("bg.jpg");
  bg2=loadImage("bg2.jpg");
  girl1=loadImage("girlfinal.png");
  home1=loadImage("home.png");
  hospital1=loadImage("hospital.png");
  virus1=loadImage("virus.png");
  germ1=loadImage("germ.png");
  aeroplane1=loadImage("aeroplane.png");
  bus1=loadImage("busimg.jpg");
  cigarette1=loadImage("Cigaretteimg.jpg");
  mask1=loadImage("maskimg.jpg");
  sanitizer1=loadImage("sanitizerimg.jpg");
  vaccine1=loadImage("vaccineimg.jpg");
  gathering1=loadImage("gathering.png");
  veggie1=loadImage("veggie.jpg");
  fruits1=loadImage("fruits.jpg");
  pizza1=loadImage("pizza.png");
  bfc_junk1=loadImage("bfc_junk.png");
  
  }


  function setup() {


    createCanvas(displayWidth,displayHeight);
  
  home=createSprite(displayWidth-150,displayHeight-750,50,50);
  home.addImage(home1);
  home.scale=0.85;

  hospital=createSprite(displayWidth-150,displayHeight-267,50,50);
  hospital.addImage(hospital1);
  hospital.scale=0.8;

  aeroplane=createSprite(120,displayHeight-550,10,10);
  aeroplane.addImage(aeroplane1);
  aeroplane.scale=0.3;

  bus =createSprite(650,displayHeight-600,10,10);
  bus.addImage(bus1);
  bus.scale=0.4;

  mask=createSprite(650,displayHeight-350,10,10);
  mask.addImage(mask1);
  mask.scale=0.5;

  pizza=createSprite(100,displayHeight-360,10,10);
  pizza.addImage(pizza1);
  pizza.scale=0.5;
  
  sanitizer=createSprite(400,displayHeight-650,10,10);
  sanitizer.addImage(sanitizer1);
  sanitizer.scale=0.32;

  vaccine=createSprite(400,displayHeight-450,10,10);
  vaccine.addImage(vaccine1);
  vaccine.scale=0.16;

  gathering=createSprite(1160,displayHeight-600,10,10);
  gathering.addImage(gathering1);
  gathering.scale=0.57;

  veggie=createSprite(400,displayHeight-250,50,50);
  veggie.addImage(veggie1);
  veggie.scale=0.17;

  fruits=createSprite(900,displayHeight-450,50,50);
  fruits.addImage(fruits1);
  fruits.scale=0.3;

  bfc_junk=createSprite(1100,displayHeight-230,10,10);
  bfc_junk.addImage(bfc_junk1);
  bfc_junk.scale=0.7;

  girl=createSprite(50,displayHeight-200,50,50);
  girl.addImage(girl1);
  girl.scale=0.25;

  germG=new Group();
  maskG=new Group();
  saniG=new Group();
  cigG=new Group();

}


function draw() {

 background(bg); 

fill("green");
textSize(30);
strokeWeight(1);
stroke("green");
text("HOME",1342,228);
text("HOSPITAL",1318,716);

if(gameState === PLAY && gameState!=END){
  fill("red");
  textSize(65);
  text("TRAP OF 2021",540,displayHeight-800);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("AEROPLANE",49,240);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("BUS",630,177);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("MASK",623,displayHeight-430);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("PIZZA",70,displayHeight-415);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("SANITIZER",347,140);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("VACCINE",358,displayHeight-520);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("GATHERINGS",1100,displayHeight-700);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("FRUITS",859,displayHeight-540);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("VEGGIES",358,displayHeight-325);

  fill(255);
  textSize(20);
  strokeWeight(1);
  stroke(255);
  text("JUNK FOOD",1044,displayHeight-320);

  fill("yellow");
  textSize(30);
  strokeWeight(1);
  stroke(255);
  text("SCORE : "+score,20,36);

  fill("yellow");
  textSize(30);
  strokeWeight(1);
  stroke(255);
  text("LIFES : "+ life,20,70);
  }
  girl.depth=pizza.depth;
  girl.depth+=1;

  girl.depth=gathering.depth;
  girl.depth+=1;
  
  girl.depth=mask.depth;
  girl.depth+=1;

  girl.depth=fruits.depth;
  girl.depth+=1;

  girl.depth=veggie.depth;
  girl.depth+=1;

  girl.depth= bfc_junk.depth;
  girl.depth+=1;

  drawSprites();


  
  spawnvirus();
  spawngerm();
  spawncig();
  
  
if(life<=-100){
  gameState=END
girl.x=displayWidth-150;
girl.y = displayHeight-235
pizza.destroy();
veggie.destroy();
fruits.destroy();
gathering.destroy();
bfc_junk.destroy();
aeroplane.destroy();
bus.destroy();
vaccine.destroy();
sanitizer.destroy();
mask.destroy();
germG.setVelocityXEach(0)
    germG.setVelocityYEach(0)
    saniG.setVelocityXEach(0)
    saniG.setVelocityYEach(0)
    germG.destroyEach();
    saniG.destroyEach();

    textSize(60)
   fill ("yellow")
   text("COVID +VE",displayWidth/2-235,displayHeight/2-50)


   

}
if(score>=100){
  girl.x=displayWidth-150;
girl.y = displayHeight-750
pizza.destroy();
veggie.destroy();
fruits.destroy();
gathering.destroy();
bfc_junk.destroy();
aeroplane.destroy();
bus.destroy();
vaccine.destroy();
sanitizer.destroy();
mask.destroy();
germG.setVelocityXEach(0)
    germG.setVelocityYEach(0)
    saniG.setVelocityXEach(0)
    saniG.setVelocityYEach(0)
    germG.destroyEach();
    saniG.destroyEach();

    textSize(60)
   fill ("yellow")
   text("FREE FROM COVID",displayWidth/2-260,displayHeight/2-50)
   gameState=END

}
  if(girl.isTouching (mask)||girl.isTouching (vaccine)||girl.isTouching (sanitizer)||girl.isTouching (veggie)|| girl.isTouching (fruits)
  ||girl.isTouching (saniG) ){
    score = score+1
  }
if(girl.isTouching (pizza)||girl.isTouching (aeroplane)||girl.isTouching (bus)||girl.isTouching (bfc_junk)|| girl.isTouching (gathering)
||girl.isTouching (germG) ){
  life = life -1
  
}





  
  }
function keyPressed(){
  if(keyCode === UP_ARROW){
    girl.y += -60;
  }
  if(keyCode === DOWN_ARROW){
    girl.y +=  60;
  }
  if(keyCode === RIGHT_ARROW){
    girl.x +=  60;
  }
  if(keyCode === LEFT_ARROW){
    girl.x += -60;
  }
}


function spawnvirus(){
  if(frameCount % 70 === 0){
    virus=createSprite(displayWidth,displayHeight/2,10,10);
    virus.addImage(virus1);
    virus.scale=0.1;
    virus.velocityX=-2;
    virus.x=Math.round(random(displayWidth,displayWidth+500));    
    virus.y=Math.round(random(10,displayHeight));
   
    girl.depth=virus.depth;
    girl.depth+=1;
    germG.add(virus);
  }
}

  function spawngerm(){
    if(frameCount % 70 === 0){
      germ=createSprite(displayWidth/2,displayHeight,10,10);
      germ.addImage(germ1);
      germ.scale=0.1;
      germ.velocityY=-2;
      germ.x=Math.round(random(displayWidth-1200,displayWidth));    
      germ.y=Math.round(random(displayWidth,10)); 
      germG.add(germ);
      girl.depth=germ.depth;
      girl.depth+=1;
  }
}

  function spawncig(){
  if(frameCount % 150 === 0){
    cigarette=createSprite(0,displayHeight/2-100,10,10);
    cigarette.addImage(cigarette1);
    cigarette.scale=0.1;
    cigarette.velocityX=2;
    cigarette.velocityY=-2;
    cigarette.x=Math.round(random(0,displayWidth));   
    cigarette.y=Math.round(random(displayHeight/2,0));
    germG.add(cigarette);
    girl.depth=cigarette.depth;
    girl.depth+=1;

    mask2=createSprite(0,displayHeight/2-500,10,10);
    mask2.addImage(mask1);
    mask2.scale=0.2;
    mask2.velocityX=2;
    mask2.x=Math.round(random(0,displayWidth));   
    mask2.y=Math.round(random(displayHeight/2,0));
    
    girl.depth=mask2.depth;
    girl.depth+=1;
    
    sanitizer2=createSprite(displayWidth,displayHeight/2,10,10);
    sanitizer2.addImage(sanitizer1);
    sanitizer2.scale=0.15;
    sanitizer2.velocityX=2;
    sanitizer2.velocityY=-2;
    sanitizer2.x=Math.round(random(displayWidth,0));   
    sanitizer2.y=Math.round(random(0,displayHeight/2));
   
    girl.depth=sanitizer2.depth;
    girl.depth+=1;
    saniG.add(sanitizer2);
    saniG.add(mask2);
  }
}
function textreplace(){
  
}
