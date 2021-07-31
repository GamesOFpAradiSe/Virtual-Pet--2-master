class Foo{
    constructor(){
    
        this.image = loadImage("images/Milk.png")
this. button = createButton("ADD FOOD")
this.button2 = createButton("FEED FOOD")
    
    }
   update(state){
    database.ref('/').update({
      lastFeedTime  : state
    })
   }

        
    display(){
     //updation version 0.1.2.354 is in progress
   {var v = 1.0}

   this. button.position(845,495)
      
 
   this. button2.position(1000,495)

    //after updation version 0.1.2.354 then u can unlock this 
    //feature so please wait work in progress
  if(v!== 1.0) { var boy = createButton("BOY")
    boy.position(200,495)

    var girl = createButton("GIRL")
    girl.position(500,495)
   
    }
  this. button.mousePressed(()=>{
    
    foodS =foodS+1
  
    
    })
    
   this. button2.mousePressed(()=>{
    
  
  foodS+=-1

lastFeedTime = hour  
         })
      
        
          

  var x=80,y=400;

 

  if(foodS!=0){
for(var i=0;i<foodS;i++){
if(i%10==0){
x=100
y=y+30
}
image(this.image,x,y,50,50)
x=x+30
}

  }
          
                }
hidea(){
  this.button.hide()
  this.button2.hide()

}
}