function load_images(){
    //function for loading assets
    enemy1_image = new Image();
    enemy1_image.src= "Assets/v1.png";
    
    player_image = new Image();
    player_image.src = "Assets/superhero.png";
    
    gem_image = new Image();
    gem_image.src = "Assets/gemm.png";
   
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
    
    enemy =[e1,e2,e3]; 
    
    player = {
        x:20,
        y:H/2,
        w: 60,
        h: 60,
        speed:20,
        isMoving : false,
        
    };
    
    gem = {
        
        x: W -100,
        y : H/2,
        w : 60,
        h : 60,
        
    };
    
    //add event listeners on th scanvas
    canvas.addEventListener("mousedown" , function(){
        player.isMoving = true;
        console.log("mouse pressed");
    });
    
    canvas.addEventListener("mouseup" , function(){
        player.isMoving = false;
        console.log("mouse released");
    });
    
    
}

function draw(){
    //console.log("in draw");
    pen.clearRect(0 , 0 , W,H);
    pen.fillStyle = "red";
    
    //draw the player
    pen.drawImage(player_image , player.x , player.y , player.w , player.h);
    
    //draw the gem
    pen.drawImage(gem_image , gem.x ,gem.y , gem.w,gem.h);
    
    //draw the score
    //pen.fillText()
    
//    //draw enemy
//    pen.drawImage(enemy1_image,e1.x , e1.y , e1.w , e1.h);
    
    for(var i =0 ; i <enemy.length ; i++){
        pen.drawImage(enemy1_image , enemy[i].x , enemy[i].y , enemy[i].w , enemy[i].w);
    }
}

function update(){
    //console.log("in update")

    if(player.isMoving){
        player.x+=player.speed;
    }
    //update enemy by same logic
    
    for(let i = 0 ; i < enemy.length ; i++){
        enemy[i].y += enemy[i].speed;
        
        if(enemy[i].y + enemy[i].h >= H || enemy[i].y <0){
            enemy[i].speed*=-1;
        }
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