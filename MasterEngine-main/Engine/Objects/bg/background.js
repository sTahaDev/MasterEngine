const { Graphics } = require('pixijs');

class BackGround{
    constructor(app){
        this.app = app;
    }
    draw(){
        const graphics = new Graphics();
        graphics.beginFill(0xFF0000);
        graphics.drawRect(0, 0, 800, 600);
        graphics.endFill();
        this.app.stage.addChild(graphics);
    
    }
}

module.exports = {BackGround}