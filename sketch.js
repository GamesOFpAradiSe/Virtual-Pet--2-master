//Create variables here
var  dog, happyDog, database, foodS, foodStock
var hour,gs,gameState,lastFeedTime,lfupdate,bg
function preload()
{
	//load images here
doge = loadImage("images/happydog.png")

milki =loadImage("images/Milk.png")
}

function setup() {
	createCanvas(1168,551);
  dog = createSprite(800,450)
  dog.addImage(doge)
  dog.scale =0.1
 


  hour = hour()

  

  
 
database = firebase.database() 
  foodStock=database.ref('Food')
  foodStock.on('value',readStock)
  food = new Foo()
  gs=database.ref('gameState')
  gs.on('value',rs)
  lft=database.ref('lastFeed')
  lft.on('value',rt)
 
}


function draw() { 
if(bg)
background(bg)
  drawSprites();

 

  //add styles here
textFont('Algerian')
textSize(25)
fill("yellow")
stroke("red")
strokeWeight(2)

if(hour<=12){
text("last feeded time : "+lastFeedTime+" am",560,110)
}else  {text("last feeded time : "+lastFeedTime+" pm",560,110)}
text(mouseX+","+mouseY,width/2,height/2)




if(foodS<=0){
  foodS = 0
   //add styles here
textFont('Algerian')
textSize(25)
fill("yellow")
stroke("red")
strokeWeight(2)
        text("Bottels are empty click on add food",500,50)
      }
      if(foodS>=30){
        foodS = 30
    //add styles here
textFont('Algerian')
textSize(25)
fill("yellow")
stroke("red")
strokeWeight(2)
        text("You can't add more than 30 bottel",500,50)
       
            }

  if(hour==(lastFeedTime+1)){
update(1)
food.hidea()
bg = loadImage("images/Garden.png")
dog.visible = false


  }else  if(hour==(lastFeedTime+2)){
    update(2)
food.hidea()
bg = loadImage("images/Bed Room.png")
dog.visible = false

 }else  if(hour>(lastFeedTime+2)&&hour<=(lastFeedTime+4)){
update(3)
food.hidea()
bg = loadImage("images/Wash Room.png")
dog.visible = false

 }else {
  food.display()
   update(0)
   bg = loadImage("bg.png")
   dog.visible = true
  // writeStock(foodS)
    }
  

}

 function readStock(data){
  foodS = data.val()
}
function rs(data){
  gameState = data.val()
}

function rt(data){
  lastFeedTime = data.val()
}
 
function update(state){
  database.ref('/').update({
    gameState: state
  })

}
function writeStock(x){
    
  x = x-1
               
 database.ref('/').update({
                
Food:x
  })}


