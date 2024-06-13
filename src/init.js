import Bootloader from './bootloader.js'
import Scene_play from './scenes/play.js'
import Scene_menu from './scenes/menu.js'

const config = {
    type:Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1475,
        heigth: 1000,
    },
    parent: "container",
    physics: {
        default: "arcade",
        arcade:{
            gravity: {y:300}
        } 
    },
    scene: [
        Bootloader,
        Scene_play,
        Scene_menu
    ]
}

new Phaser.Game(config)