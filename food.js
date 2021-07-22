class Food{
    constructor(){
    
        this.image = loadImage("images/Milk.png")
    
    
    }
    
    display(){
    
    

    var button = createButton("ADD FOOD")
    button.position(845,495)
      
    var button2 = createButton("FEED FOOD")
    button2.position(1000,495)

   

    button.mousePressed(function(){
    
        foodS = foodS+1
    
    })
    
    button2.mousePressed(function(){
    
        foodS = foodS-1
         
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
                
            }