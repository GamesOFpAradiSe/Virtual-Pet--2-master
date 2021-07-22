//Create variables here
var  dog, happyDog, database, foodS, foodStock
var hour
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
  
  hour = hour()
  

  
  //It's database contion nothing but when we give this > now is firbase simple
database = firebase.database()
//Here we ref = reference that inside database think what is in database yes firebase 
  foodStock=database.ref('Food')
//Here they checking for any types of change in data
  foodStock.on('value',readStock)
  food = new Food()

  

}


function draw() {  
background(bg)
  drawSprites();
  //add styles here
textFont('Italic')
textSize(25)
fill("green")
stroke("green")
strokeWeight(1)
text("no. of bottel : "+foodS,560,130)
if(hour<=12){
text("last feeded time : "+hour+" am",600,180)
}else {text("last feeded time : "+hour+" pm",600,180)}
text(mouseX+","+mouseY,width/2,height/2)

food.display()


if(foodS<=0){
  foodS = 0
  textFont('Italic')
textSize(25)
fill("green")
stroke("green")
strokeWeight(2)
        text("Bottels are empty click on add food",400,50)
      }
      if(foodS>=30){
        foodS = 30
        textFont('Italic')
textSize(25)
fill("green")
stroke("green")
strokeWeight(2)
        text("You can't add more than 30 bottel",400,50)
       
            }

}

 async function readStock(data){

  foodS = await data.val()

}




