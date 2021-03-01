class form {
     constructor() {
      this.input = createInput("Name"); 
      this.button = createButton('Play'); 
      this.greeting = createElement('h2');
      } 
      hide(){ this.greeting.hide(); 
        this.button.hide(); this.input.hide(); 
      }
      
    display(){ 
      var title = createElement('h2')
      title.html("Car Racing Game"); 
      title.position(500, 0); 
      
      this.input = createInput("Name"); 
      this.button = createButton('Play'); 

      this.input.position(500, 160);
       
      this.button.position(500, 200); 
      this.button.mousePressed(()=>{ 
        this.input.hide(); 
        this.button.hide(); 
        player1.name = this.input.value(); 
        playerCount+=1; player1.index = playerCount; 
        player1.update(); 
        player1.updateCount(playerCount); 
        this.greeting.html("Hello " + player1.name) 
        this.greeting.position(130, 100); 
      });
  } 
}