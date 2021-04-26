var fixedrect , movingrect; 

function setup()
{
createCanvas(600,600);
fixedrect=createSprite(200,200,50,50);
fixedrect.shapeColor = "red";
fixedrect.debug=true;

movingrect=createSprite(400,200,50,50);
movingrect.shapeColor = "red";
movingrect.debug=true;
}


function draw()
{

background("gold");
movingrect.x=mouseX;
movingrect.y=mouseY;

if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
   movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
   fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
   movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2)
{
  fixedrect.shapeColor  = "blue";
  movingrect.shapeColor = "blue";
}
else
{
  fixedrect.shapeColor  = "red";
  movingrect.shapeColor = "red";
}

drawSprites();



}