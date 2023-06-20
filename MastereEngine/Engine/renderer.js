const { Application, Graphics,Sprite } = require('pixijs');
require('pixijs/unsafe-eval');

let PackageJson = require("../Package.json")


const app = new Application({
    autoResize: true,
    resolution: devicePixelRatio
});

document.body.appendChild(app.view);



const {PlayerClass} = require('./Objects/player/player.js')
const {BackGround} = require('./Objects/bg/background.js');



//Arka Plan
let bg = new BackGround(app)
bg.draw();

//Oyuncu
let myplayer = new PlayerClass(app,"Player")
myplayer.draw()
let loop = ()=>{
    return myplayer.loop()
}
app.ticker.add(loop);





for (let index = 0; index < PackageJson.ObjectUrls.length; index++) {
   const {CreateObject} = require(PackageJson.ObjectUrls[index].url)
   let objectNew = new CreateObject(app,Sprite,"Zombie","../Images/zombie.png");
   objectNew.setup()
}






//En Altta Olmalı
window.addEventListener('resize', resize);
function resize() {
    
    app.renderer.resize(window.innerWidth, window.innerHeight);
    rect.position.set(app.screen.width, app.screen.height);
}

resize();

const pos = myplayer.PlayerSprite.x
module.exports = { pos }