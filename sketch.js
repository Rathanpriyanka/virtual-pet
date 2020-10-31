var dog,happyDog;
var database;
var foodS,foodStoke;
var dogImage;
var milk;

function preload () {
dogImage=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png");


}




function setup(){
  createCanvas(500,500);
  database = firebase.database();
  console.log(database);
  
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale=0.2;
  
 var foodStoke = database.ref('food');
  foodStoke.on("value", readStoke);
  milk = new Food(200,200,20,20);
  
}

function draw(){
  background(46,136,89);
  fill("white")
  if(keyDown(UP_ARROW)) {
    writeStoke(foodS);
    dog.addImage(happyDog);
  }
  
  text("Note :press UP_ARROW key to feed drago milk!",100,20);
  textSize(100);
  

  
  
    
   milk.display();
    drawSprites();
  
}


function readStoke (data) {

foodS=data.val();

}

function writeStoke (x) {

database.ref('/').update({

  food:x
}) 

}


