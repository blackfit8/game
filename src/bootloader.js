class Bootloader extends Phaser.Scene {
    constructor() {
        super({key:"Bootloader"})

    }

    preload(){
        this.load.on("complete", ()=>{
            this.scene.start("Scene_menu")
        })
        this.load.image("menu","./assets/menu.png");
        this.load.image("logo", "./assets/logo4.png")
        this.load.image("ground","./assets/ground.png")
        this.load.image("goblin","./assets/goblin.png")
        this.load.image("house","./assets/house.png")

        this.load.atlas("elen_attack", "./assets/elen attack corregido-0.png", "./src/gameObjects/elen_attack-0.json")
        this.load.atlas("elen_run", "./assets/elen run.png", "./src/gameObjects/elen run.json")
        this.load.atlas("elen_idle", "./assets/Elen_Idle.png", "./src/gameObjects/Elen_Idle.json")
        this.load.atlas("sina_idle", "./assets/sina idle.png", "./src/gameObjects/sina idle.json")

        
    }
}

export default Bootloader