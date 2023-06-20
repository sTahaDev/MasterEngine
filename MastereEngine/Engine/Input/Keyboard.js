class KeyboardInput{
    constructor(){
        //Keys
        this.KeysCodes = {
            "W": {"down":87,"up":"87","isPress":false},
            "A": {"down":65,"up":"65","isPress":false},
            "S": {"down":83,"up":"83","isPress":false},
            "D": {"down":68,"up":"68","isPress":false}

        }
    }
    
    
    update(){
        //Mouse Event
        const keysdown = e => {
            const code = e.keyCode;
            
            
            if (code == this.KeysCodes.W.down){
                this.KeysCodes.W.isPress = true;
            }if (code == this.KeysCodes.A.down){
                this.KeysCodes.A.isPress = true;
            }if (code == this.KeysCodes.S.down){
                this.KeysCodes.S.isPress = true;
            }if (code == this.KeysCodes.D.down){
                this.KeysCodes.D.isPress = true;
            }
        }
        const keysup = e =>{
            const code = e.keyCode;
            
            if (code == this.KeysCodes.W.up){
                this.KeysCodes.W.isPress = false;
            }if (code == this.KeysCodes.A.up){
                this.KeysCodes.A.isPress = false;
            }if (code == this.KeysCodes.S.up){
                this.KeysCodes.S.isPress = false;
            }if (code == this.KeysCodes.D.up){
                this.KeysCodes.D.isPress = false;
            }
        }
        
        window.addEventListener("keydown",keysdown);
        window.addEventListener("keyup",keysup);
    }
    
}

module.exports = {KeyboardInput}