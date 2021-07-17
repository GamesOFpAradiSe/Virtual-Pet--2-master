//Create variables here
var  dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here

doge = loadImage("images/happydog.png")
bg = loadImage("bg.png")
milki =loadImage("images/Milk.png")
}

function setup() {
	createCanvas(windowWidth,windowHeight);
  dog = createSprite(800,450)
  dog.addImage(doge)
  dog.scale =0.1
  
  

  
  //It's database contion nothing but when we give this > now is firbase simple
database = firebase.database()
//Here we ref = reference that inside database think what is in database yes firebase 
  foodStock=database.ref('Food')
//Here they checking for any types of change in data
  foodStock.on('value',readStock)
  food = new Food()
  food.display()

  

}


function draw() {  
background("blue")
  drawSprites();
  //add styles here
textFont('Italic')
textSize(15)
fill("white")
stroke("black")
strokeWeight(2)
text(foodS,250,350)
text(mouseX+","+mouseY,width/2,height/2)


if(foodS<=0){
  foodS = 0
  
      }


}
//making readStock function
function readStock(data){

  foodS = data.val()

}




