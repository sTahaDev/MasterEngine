const { Graphics,Sprite } = require('pixijs');
const {KeyboardInput} = require("../../Input/Keyboard.js")

class PlayerClass{
    constructor(app,name){
        this.name = name;
        this.app = app;
        this.speed = 20;
        this.PlayerSprite = Sprite.from("./Objects/player/steve.png");
        this.Input = new KeyboardInput()
        this.KeysCodes = this.Input.KeysCodes
    }
    draw(){
       
        this.PlayerSprite.anchor.set(0.5)

        this.PlayerSprite.x = this.app.screen.width / 2
        this.PlayerSprite.y = this.app.screen.height / 2

        this.PlayerSprite.width = 100;
        this.PlayerSprite.height = 200;

        this.app.stage.addChild(this.PlayerSprite)

        this.Input.update()
        

        
    }
    loop(){
    
        if(this.KeysCodes.W.isPress){
            
            this.PlayerSprite.y -= this.speed;
        }if(this.KeysCodes.S.isPress){
            this.PlayerSprite.y += this.speed;
        }if(this.KeysCodes.A.isPress){
            this.PlayerSprite.x -= this.speed;
        }if(this.KeysCodes.D.isPress){
            this.PlayerSprite.x += this.speed;
        }
    }

}

module.exports = {PlayerClass}