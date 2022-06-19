class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setpositions(){
    this.titleImg.position(120,100);
    this.input.position(width/2,height/2);
    this.playButton.position(width/2,height/2+50)

  }

  setstylecontent(){
    this.playButton.class("customButton");
    this.input.class("customInput");
    this.titleImg.class("gameTitle")

  }

  display(){
    this.setpositions();
    this.setstylecontent()
  }

}

