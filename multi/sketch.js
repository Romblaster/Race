var database
var canvas, bgimg
var gameState = 0
var playerCount = 0
var form1
var player1
var game1
var allPlayers

function setup(){
    database = firebase.database();
    createCanvas(500,500);

    game1 = new game(); 
    game1.getState(); 
    game1.start();

}

function draw(){
    background("white"); 

    if (playerCount === 4){
        game1.update(1)
    }
    if(gameState === 1){ 
        clear(); 
        game1.play(); 
    }
}


function writePosition(x,y){
     database.ref('ball/position').set({ 
        'x': position.x + x, 
        'y': position.y + y
    })
}
function readPosition(data){
    position = data.val();
    console.log("position " + position); 
    ball.x = position.x; ball.y = position.y; 
    }
    function showError(error){
        console.log("What's the error?? " + error); 
    }

