var bg,bgImg,ironman,ironmanImg,bluegem,goldengem,purplegem,purplegemImg,greengem,greengemImg;
var bluegemImg,goldengemImg,greengemImg



function preload () {
  
   bgImg = loadImage("Background.png")
   ironmanImg = loadAnimation("ironman/0.gif",
   "ironman/1.gif","ironman/2.gif","ironman/3.gif"
   ,"ironman/4.gif","ironman/5.gif","ironman/6.gif","ironman/7.gif")

   purplegemImg = loadAnimation("purple/0.gif","purple/1.gif","purple/2.gif","purple/3.gif","purple/4.gif",
   "purple/5.gif","purple/6.gif","purple/7.gif","purple/8.gif","purple/9.gif")
    
   greengemImg = loadAnimation("greenzip/0.gif","greenzip/2.gif","greenzip/4.gif"
   ,"greenzip/6.gif","greenzip/8.gif","greenzip/10.gif","greenzip/12.gif","greenzip/14.gif"
   ,"greenzip/16.gif","greenzip/18.gif","greenzip/20.gif")

   goldengemImg = loadAnimation("goldgem/0.gif","goldgem/1.gif","goldgem/2.gif"
   ,"goldgem/3.gif","goldgem/4.gif","goldgem/5.gif","goldgem/6.gif","goldgem/7.gif"
   ,"goldgem/8.gif","goldgem/9.gif","goldgem/10.gif","goldgem/11.gif","goldgem/12.gif",
   "goldgem/13.gif","goldgem/14.gif","goldgem/15.gif","goldgem/16.gif","goldgem/17.gif","goldgem/18.gif"
   ,"goldgem/19.gif","goldgem/20.gif","goldgem/21.gif","goldgem/22.gif","goldgem/23.gif","goldgem/24.gif")

   bluegemImg = loadAnimation("bluegem/0.gif","bluegem/1.gif","bluegem/2.gif","bluegem/3.gif"
   ,"bluegem/4.gif","bluegem/5.gif","bluegem/6.gif","bluegem/7.gif","bluegem/8.gif","bluegem/9.gif"
   ,"bluegem/10.gif","bluegem/11.gif","bluegem/12.gif","bluegem/13.gif","bluegem/14.gif","bluegem/15.gif","bluegem/16.gif"
   ,"bluegem/17.gif","bluegem/18.gif","bluegem/19.gif","bluegem/20.gif","bluegem/21.gif","bluegem/22.gif")
}



function setup() {
  createCanvas(800,400);
  ironman = createSprite(200,200,50,50)
  ironman.addAnimation("flying",ironmanImg)
  ironman.scale = 0.4
  purplegem = createSprite(200,300,50,50)
  purplegem.addAnimation("P",purplegemImg)
  purplegem.scale = 0.1
  greengem = createSprite(200,200,50,50)
  greengem.addAnimation("G",greengemImg)
  greengem.scale = 0.1
  goldengem = createSprite(200,250,50,50)
  goldengem.addAnimation("GO",goldengemImg)
  goldengem.scale = 0.1
  bluegem = createSprite(200,100,50,50)
  bluegem.addAnimation("B",bluegemImg)
  bluegem.scale = 0.1




}

function draw() {
  background(bgImg);  
  drawSprites();
}

function spawnGems () {

}