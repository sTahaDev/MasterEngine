class componentManager {
  constructor() {
    this.playerX = 0
    this.playerY = 0
  }

  setGame(playerX,playerY){
    this.playerX = playerX
    this.playerY = playerY
  }
  getPlayerPos(){
    return {
      "x":this.playerX,
      "y":this.playerY
    }
  }
  
}

module.exports = {componentManager}