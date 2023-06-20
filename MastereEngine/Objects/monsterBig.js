const {KeyboardInput} = require("../Engine/Input/Keyboard.js")



class CreateObject{

    constructor(app,Sprite,name,url){
       
        this.app = app;
        this.name = name;
        this.url = url;
        this.Sprite = Sprite
        this.ObjectSprite = this.Sprite.from(this.url);
        this.Input = new KeyboardInput()
        this.keys = this.Input.KeysCodes

    }

    setup(){
        this.ObjectSprite.anchor.set(0.5)

        this.ObjectSprite.x = this.app.screen.width / 2
        this.ObjectSprite.y = this.app.screen.height / 2

        this.ObjectSprite.width = 100;
        this.ObjectSprite.height = 200;

        this.app.stage.addChild(this.ObjectSprite)

        this.Input.update()
    }
    
    update(){
        
    }

}

module.exports = {CreateObject};

