const {KeyboardInput} = require("../Engine/Input/Keyboard.js")


class CreateObject{

    constructor(app,Sprite,url,manager){
        
        //Object Settings
        this.path = "../"
        this.app = app;
        this.ComponentManager = manager
        this.url = url;
        this.Sprite = Sprite
        
        //Input Settings
        this.Input = new KeyboardInput()
        this.keys = this.Input.KeysCodes
        this.Input.update()
        

    }

    setup(){

        //Changing Object Image
        this.url = this.path+"Images/zombie.png"
        //Loading Object Image
        this.ObjectSprite = this.Sprite.from(this.url);
        //Averaging Image
        this.ObjectSprite.anchor.set(0.5)

        //Setting Object Position
        this.ObjectSprite.x = this.app.screen.width / 2
        this.ObjectSprite.y = this.app.screen.height / 2

        //Resizing Object
        this.ObjectSprite.width = 100;
        this.ObjectSprite.height = 200;

        //Adding Object to App
        this.app.stage.addChild(this.ObjectSprite)

        
        

        

       
    }
    
    update(){
        
    }

}

module.exports = {CreateObject};