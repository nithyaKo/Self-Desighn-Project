  coin1 = createSprite (100,100)
  coin2 = createSprite (100,100)
  coin3 = createSprite (100,100)
  coin4 = createSprite (100,100)
  coin5 = createSprite (100,100)
  coin6 = createSprite (100,100)
  coin7 = createSprite (100,100)
  coin8 = createSprite (100,100)
  coin9 = createSprite (100,100)
  coin10 = createSprite (100,100)
  coin11 = createSprite (100,100)
  coin12 = createSprite (100,100)
  coin13 = createSprite (100,100)
  coin14 = createSprite (100,100)
  coin15 = createSprite (100,100)
  coin16 = createSprite (100,100)
  coin17 = createSprite (100,100)
  coin18 = createSprite (100,100)
  coin19 = createSprite (100,100)
  coin19 = createSprite (100,100)
  coin20 = createSprite (100,100)
  coin21 = createSprite (100,100)
  coin22 = createSprite (100,100)
  coin23 = createSprite (100,100)
  coin24 = createSprite (100,100)
  coin25 = createSprite (100,100)
  coin26 = createSprite (100,100)
  coin27 = createSprite (100,100)
  coin28 = createSprite (100,100)
  coin29 = createSprite (100,100)
  coin30 = createSprite (100,100)
  coin31 = createSprite (100,100)
  coin32= createSprite (100,100)
  coin33= createSprite (100,100)
  coin34= createSprite (100,100)
  coin35= createSprite (100,100)
  coin36= createSprite (100,100)
  coin37= createSprite (100,100)
  coin38= createSprite (100,100)
  coin39= createSprite (100,100)
  coin40= createSprite (100,100)
  coin41 = createSprite (100,100)
  coin42 = createSprite (100,100)
  coin43 = createSprite (100,100)
  coin44 = createSprite (100,100)
  coin45 = createSprite (100,100)
  coin46 = createSprite (100,100)
  coin47 = createSprite (100,100)
  coin48 = createSprite (100,100)
  coin49 = createSprite (100,100)
  coin50 = createSprite (100,100)
  coin51 = createSprite (100,100)
  coin52 = createSprite (100,100)
  coin53 = createSprite (100,100)
  coin54 = createSprite (100,100)
  coin55 = createSprite (100,100)
  coin56 = createSprite (100,100)
  coin57 = createSprite (100,100)
  coin58 = createSprite (100,100)
  coin59 = createSprite (100,100)
  coin60 = createSprite (100,100)
  coin61 = createSprite (100,100)
  coin62 = createSprite (100,100)
  coin63 = createSprite (100,100)
  coin64 = createSprite (100,100)
  coin65 = createSprite (100,100)
  coin66 = createSprite (100,100)
  coin67 = createSprite (100,100)
  coin68 = createSprite (100,100)
  coin69 = createSprite (100,100)
  coin70 = createSprite (100,100)
  coin71 = createSprite (100,100)
  coin72 = createSprite (100,100)
  coin73 = createSprite (100,100)
  coin74 = createSprite (100,100)
  coin75 = createSprite (100,100)

function preload()
{
  
  pacman = loadImage("Pacman.png")
Background = loadImage("Pacman Background.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  pacman = createSprite(100,50,30,30)
  pacman.addImage(pacman)
  pacman.scale = 0.5;
  pacman.setCollider("rectangle",0,0,200,200)

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background.addImage(Background)
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  textSize(24)
  fill("black")
  text("COINS: "+
 coin, 510,70)

  //fall down
  vy +=g;
  lander.position.y+=vy;

if(keyDown(LEFT_ARROW)){
  pacman.x = pacman.x - 2
}
else if(keyDown(RIGHT_ARROW)){
pacman.x = pacman.x + 2
}
else if(keyDown(UP_ARROW)){
pacman.y = pacman.y - 2
}
else if(keyDown(DOWN_ARROW)){
  pacman.y = pacman.y + 2

 if(pacman.isTouching(coin1)){
    coin1.destroyed
}
 if(pacman.isTouching(coin2)){
    coin2.destroyed
}
 if(pacman.isTouching(coin3)){
    coin3.destroyed
}
 if(pacman.isTouching(coin4)){
    coin4.destroyed
}
if(pacman.isTouching(coin5)){
    coin5.destroyed
}
 if(pacman.isTouching(coin6)){
    coin6.destroyed
}
 if(pacman.isTouching(coin7)){
    coin7.destroyed
}
 if(pacman.isTouching(coin8)){
    coin8.destroyed
}
if(pacman.isTouching(coin9)){
    coin9.destroyed
}
 if(pacman.isTouching(coin10)){
    coin10.destroyed
}
 if(pacman.isTouching(coin11)){
    coin11.destroyed
}
 if(pacman.isTouching(coin12)){
    coin12.destroyed
}
if(pacman.isTouching(coin13)){
    coin13.destroyed
}
 if(pacman.isTouching(coin14)){
    coin14.destroyed
}
 if(pacman.isTouching(coin15)){
    coin15.destroyed
}
 if(pacman.isTouching(coin16)){
    coin16.destroyed
}
if(pacman.isTouching(coin17)){
    coin17.destroyed
}
 if(pacman.isTouching(coin18)){
    coin18.destroyed
}
 if(pacman.isTouching(coin19)){
    coin19.destroyed
}
 if(pacman.isTouching(coin20)){
    coin20.destroyed
}
if(pacman.isTouching(coin21)){
    coin21.destroyed
}
 if(pacman.isTouching(coin22)){
    coin22.destroyed
}
 if(pacman.isTouching(coin23)){
    coin23.destroyed
}
 if(pacman.isTouching(coin24)){
    coin24.destroyed
}
if(pacman.isTouching(coin25)){
    coin25.destroyed
}
if(pacman.isTouching(coin26)){
    coin26.destroyed
}
 if(pacman.isTouching(coin27)){
    coin27.destroyed
}
 if(pacman.isTouching(coin28)){
    coin28.destroyed
}
 if(pacman.isTouching(coin29)){
    coin29.destroyed
}
if(pacman.isTouching(coin30)){
    coin30.destroyed
}
 if(pacman.isTouching(coin31)){
    coin31.destroyed
}
 if(pacman.isTouching(coin32)){
    coin32.destroyed
}
 if(pacman.isTouching(coin33)){
    coin33.destroyed
}
if(pacman.isTouching(coin34)){
    coin34.destroyed
}
 if(pacman.isTouching(coin35)){
    coin35.destroyed
}
 if(pacman.isTouching(coin36)){
    coin36.destroyed
}
 if(pacman.isTouching(coin37)){
    coin37.destroyed
}
if(pacman.isTouching(coin38)){
    coin38.destroyed
}
 if(pacman.isTouching(coin39)){
    coin39.destroyed
}
 if(pacman.isTouching(coin40)){
    coin40.destroyed
}
 if(pacman.isTouching(coin41)){
    coin41.destroyed
}
if(pacman.isTouching(coin42)){
    coin42.destroyed
}
 if(pacman.isTouching(coin43)){
    coin43.destroyed
}
 if(pacman.isTouching(coin44)){
    coin44.destroyed
}
 if(pacman.isTouching(coin45)){
    coin45.destroyed
}
if(pacman.isTouching(coin46)){
    coin46.destroyed
}
 if(pacman.isTouching(coin47)){
    coin47.destroyed
}
 if(pacman.isTouching(coin48)){
    coin49.destroyed
}
 if(pacman.isTouching(coin50)){
    coin50.destroyed
}
if(pacman.isTouching(coin51)){
    coin51.destroyed
}
if(pacman.isTouching(coin52)){
    coin52.destroyed
}
 if(pacman.isTouching(coin53)){
    coin53.destroyed
}
 if(pacman.isTouching(coin54)){
    coin54.destroyed
}
 if(pacman.isTouching(coin55)){
    coin55.destroyed
}
if(pacman.isTouching(coin56)){
    coin56.destroyed
}
 if(pacman.isTouching(coin57)){
    coin57.destroyed
}
 if(pacman.isTouching(coin58)){
    coin58.destroyed
}
 if(pacman.isTouching(coin59)){
    coin59.destroyed
}
if(pacman.isTouching(coin60)){
    coin60.destroyed
}
 if(pacman.isTouching(coin61)){
    coin61.destroyed
}
 if(pacman.isTouching(coin62)){
    coin62.destroyed
}
 if(pacman.isTouching(coin63)){
    coin63.destroyed
}
if(pacman.isTouching(coin64)){
    coin64.destroyed
}
 if(pacman.isTouching(coin65)){
    coin65.destroyed
}
 if(pacman.isTouching(coin66)){
    coin66.destroyed
}
 if(pacman.isTouching(coin67)){
    coin67.destroyed
}
if(pacman.isTouching(coin68)){
    coin68.destroyed
}
 if(pacman.isTouching(coin69)){
    coin69.destroyed
}
 if(pacman.isTouching(coin70)){
    coin70.destroyed
}
 if(pacman.isTouching(coin71)){
    coin71.destroyed
}
if(pacman.isTouching(coin72)){
    coin72.destroyed
}
 if(pacman.isTouching(coin73)){
    coin73.destroyed
}
 if(pacman.isTouching(coin74)){
    coin74.destroyed
}
 if(pacman.isTouching(coin75)){
    coin75.destroyed
}

}


  drawSprites();
}



  


