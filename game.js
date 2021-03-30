function load_images(){
    //function for loading assets
    enemy1_image = new Image();
    enemy1_image.src= "Assets/v1.png";
    
    enemy2_image = new Image();
    enemy2_image.src = "Assets/v2.png";
    
    enemy3_image = new Image();
    enemy3_image.src= "Assets/v1.png";
}

function init(){
    
    //define the objects that we will have in the game
    canvas = document.getElementById("mycanvas");
    H = canvas.height = 400;
    W = canvas.width = 700;
    console.log("In init");
    
    pen = canvas.getContext('2d');
    console.log(canvas);
    
    e1 = {
        x:150,
        y:50,
        w:60,
        h:60,
        speed:20,
    }
    
    e2 = {
        x:300,
        y:150,
        w:60,
        h:60,
        speed:30,
    }
    
    e3 = {
        x:450,
        y:20,
        w:60,
        h:60,
        speed:40,
    }
    
//    player = {
//        
//    }
//    
//    enemy = {
//        
//    }
    
    
}

function draw(){
    //console.log("in draw");
    pen.clearRect(0 , 0 , W,H);
    pen.fillStyle = "red";
    
    //draw enemy 1
    pen.drawImage(enemy1_image,e1.x , e1.y , e1.w , e1.h);
    
    //draw enemy2
    pen.drawImage(enemy2_image , e2.x , e2.y , e2.w , e2.h);
    
    //draw enemy3
    pen.drawImage(enemy3_image , e3.x , e3.y , e3.w , e3.h);
}

function update(){
    //console.log("in update")
    //enemy =1 movement
    e1.y +=e1.speed;
    
    if(e1.y + e1.h>= H || e1.y <=0){
        e1.speed *= -1;
    }
    
    //enemy2 movement
    e2.y+= e2.speed;
    
    if(e2.y + e2.h >= H || e2.y <=0){
        e2.speed *=-1;
    }
    
    //enemy 3  movement
    
    e3.y += e3.speed;
    
    if(e3.y + e3.h >= H || e3.y <=0){
        e3.speed *=-1;
    }
}

function gameLoop(){
    
    //console.log("Inside gameLoop");
    draw();
    update();
}

load_images();
init();
var f=setInterval(gameLoop,100);