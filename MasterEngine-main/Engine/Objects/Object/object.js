const { Graphics,Sprite } = require('pixijs');
import KeyboardInput from '../../Input/Keyboard.js';

export default class CreateObject{

    constructor(app,name,url){
        this.app = app;
        this.name = name;
        this.url = url;

        this.ObjectSprite = Sprite.from(this.url);
        this.Input = new KeyboardInput()
        this.KeysCodes = this.Input.KeysCodes
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