class Scene_menu extends Phaser.Scene {
    constructor(){
        super({key:"Scene_menu"})
    }

    create(){
        var background = this.add.image(0,0, "menu")
        var title = this.add.image(0,0,"logo")
        var newGameBtn = this.add.text(1150,275,"Nueva partida",{font:"40px",fill:"#ffffff",align:"center"}).setInteractive()
        var optionsBtn = this.add.text(1150,325,"Opciones",{font:"40px",fill:"#ffffff",align:"center"})
        var exitBtn = this.add.text(1150,375,"Salir",{font:"40px",align:"right"})
        title.setScale(0.1)
        title.setOrigin(1,0)
        title.setX(1400)
        title.setY(25)
        background.setScale(0.36)
        background.setOrigin(0,0)

        newGameBtn.on("pointerdown", function (){
            this.scene.start("Scene_play")
        },this)

        
        
        
    }
}

export default Scene_menu