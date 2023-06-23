const { Application, Graphics,Sprite } = require('pixijs');
require('pixijs/unsafe-eval');

const {componentManager} = require("./ComponentManager.js")
const ComponentManager = new componentManager();





let PackageJson = require("../save.json")


const app = new Application({
    autoResize: true,
    resolution: devicePixelRatio
});

document.body.appendChild(app.view);




const {BackGround} = require('./Objects/bg/background.js');






//Arka Plan
let bg = new BackGround(app)
bg.draw();

//Oyuncu
const {PlayerClass} = require('./Objects/player/player.js')
let myplayer = new PlayerClass(app,"Player")
myplayer.draw()
let loop = ()=>{
    return myplayer.loop()
}
app.ticker.add(loop);


const GameLoop = ()=>{
    
    let playerX = myplayer.PlayerSprite.x
    let playerY = myplayer.PlayerSprite.y
    ComponentManager.setGame(playerX,playerY)
}

app.ticker.add(GameLoop)



for (let index = 0; index < PackageJson.ObjectUrls.length; index++) {
    const {CreateObject} = require(PackageJson.ObjectUrls[index].url)
    let objectNew = new CreateObject(app,Sprite,"../Images/zombie.png",ComponentManager);
    objectNew.setup()
    let ObjectLoop = function(){
        return objectNew.update();
    }
    app.ticker.add(ObjectLoop);
}









//En Altta Olmalı
window.addEventListener('resize', resize);
function resize() {
    
    app.renderer.resize(window.innerWidth, window.innerHeight);
    rect.position.set(app.screen.width, app.screen.height);
}

resize();
