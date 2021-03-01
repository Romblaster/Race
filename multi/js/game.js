class game {

    constructor(){
        
    } 

    getState()
    { 
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){ 
            gameState = data.val();   
        })
    } 
        
    update(state){ 
        database.ref('/').update({ gameState: state });
    }
    async start(){
        if(gameState === 0){ 
            player1 = new player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){ 
                playerCount = playerCountRef.val(); 
                player1.getCount(); 
            } 
            form1 = new form() 
            form1.display();
        }
    }
    play(){
        form1.hide()
        textSize(30); 
        text("Game Start", 120, 100) 
        player.getPlayerInfo();
        if(allPlayers !== undefined){
            var display_position = 130; 
            for(var plr in allPlayers){
                 if (plr === "player" + player1.index) 
                    fill("red") 
                 else 
                    fill("black"); 
                display_position+=20; 
                textSize(15); 
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
            } 
        }
        if(keyIsDown(UP_ARROW) && player1.index !== null){ 
            player1.distance +=50
            player1.update(); 
        }   
    }
}
