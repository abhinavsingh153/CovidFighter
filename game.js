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
    
    game_over = false;
    
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
        health:100,
        
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

function isOverLap(rect1 , rect2){
    if (rect1.x < rect2.x + rect2.w &&
   rect1.x + rect1.w > rect2.x &&
   rect1.y < rect2.y + rect2.h &&
   rect1.y + rect1.h > rect2.y) {
    // collision detected!
        return true;
    }
    
    return false;
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
    pen.fillStyle = "white";
    pen.fillText("Health " +  player.health , 10 ,10);
    
    pen.fillStyle = "white";
    pen.fillText("Score" + player.health , W-100 , 10);
    
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
        player.health+= 20;
    }
    
    //overlap between enemy and player
    
    for(let i = 0 ; i < enemy.length ; i++){
        
        if(isOverLap(player , enemy[i])){
            player.health-=10;
            
            if(player.health <0){
                
                console.log(player.health);
                game_over = true;
                alert("game over " + player.health);
            }
        }
    }
    
    //overlap between player and gem
    if(isOverLap(player , gem)){
        console.log("You won");
        alert("you won!");
        game_over = true;
        return;
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
    
    if(game_over == true){
        clearInterval(f);
    }
    draw();
    update();
}

load_images();
init();
var f=setInterval(gameLoop,100);