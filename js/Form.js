class Form{


constructor(){
     this.title =createElement('h2');
     this.input=createInput("Name");
     this.button=createButton("play");
     this.greeting= createElement('h3');
}
hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
}
display(){

this.title.html("Whiplash");
this.title.position(130,20);


this.input.position(130,160);


this.button.position(250,200);

this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name=this.input.value();

   
    this.greeting.html("Hello "+player.name);
    this.greeting.position(130,160);

    playerCount+=1
    player.index=playerCount
    player.updateCount(playerCount);
    player.update();
    

})




}
}