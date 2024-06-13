class Scene_play extends Phaser.Scene {
    constructor() {
        super({key:"Scene_play"})
    }
    preload(){
        
    }
    create(){
        var house = this.add.image(0,0,"house")
        var houseGround = this.physics.add.image(0,0,"ground")

        this.sina = this.add.sprite(600,510, "sina_idle")
        this.elen = this.physics.add.sprite(300,525,"elen_idle")

        

        this.anims.create({
            key:"idle",
            frames: [
                {key: "elen_idle",frame:"Elen IDLE_0010.png"},
                {key: "elen_idle",frame:"Elen IDLE_0010.png"},
                {key: "elen_idle",frame:"Elen IDLE_0011.png"},
                {key: "elen_idle",frame:"Elen IDLE_0011.png"},
                {key: "elen_idle",frame:"Elen IDLE_0011.png"},
                {key: "elen_idle",frame:"Elen IDLE_0010.png"},
                {key: "elen_idle",frame:"Elen IDLE_0010.png"},
                {key: "elen_idle",frame:"Elen IDLE_0000.png"},
                {key: "elen_idle",frame:"Elen IDLE_0000.png"},
                {key: "elen_idle",frame:"Elen IDLE_0009.png"},
            ],
            frameRate:10,
            repeat: 0
        })

        this.anims.create({
            key:"stand",
            frames:[
                {key: "elen_idle",frame:"Elen IDLE_0009.png"}
            ],
            frameRate:1,
            repeat:-1
        })

        this.anims.create({
            key:"run",
            frames:[
                {key: "elen_run",frame:"elen run_0001.png"},
                {key: "elen_run",frame:"elen run_0002.png"},
                {key: "elen_run",frame:"elen run_0006.png"},
                {key: "elen_run",frame:"elen run_0008.png"},
                {key: "elen_run",frame:"elen run_0010.png"},
                {key: "elen_run",frame:"elen run_0014.png"},
            ],
            frameRate:8,
            repeat:-1
        })

        this.anims.create({
            key:"attack",
            frames: [
                {key: "elen_attack",frame:"elen attack_0000.png"},
                {key: "elen_attack",frame:"elen attack_0004.png"},
                {key: "elen_attack",frame:"elen attack_0004.png"},
                {key: "elen_attack",frame:"elen attack_0001.png"},
                {key: "elen_attack",frame:"elen attack_0001.png"},
                {key: "elen_attack",frame:"elen attack_0002.png"},
                {key: "elen_attack",frame:"elen attack_0002.png"},
                {key: "elen_attack",frame:"elen attack_0005.png"},
                {key: "elen_attack",frame:"elen attack_0005.png"},
                {key: "elen_attack",frame:"elen attack_0006.png"},
                {key: "elen_attack",frame:"elen attack_0006.png"},
                {key: "elen_attack",frame:"elen attack_0000.png"},
            ],
            frameRate:18,
            repeat: 0
        })

        this.sina.setScale(0.2)
        this.sina.flipX = true
        this.elen.setScale(0.2)
        this.elen.setCollideWorldBounds(true)


        house.setScale(0.7)
        house.setOrigin(0,0)
        houseGround.setScale(0.65)
        houseGround.setY(950)
        houseGround.setOrigin(0,1)
        houseGround.setImmovable(true)
        houseGround.body.allowGravity = false
        this.physics.add.collider(this.elen, houseGround)
    }

    update(time, delta){
        
        const cursors = this.input.keyboard.createCursorKeys();
        if(cursors.right.isUp){
            this.elen.body.velocity.x = 0
        }
        if(cursors.left.isUp){
            this.elen.body.velocity.x = 0
        }
        if (cursors.left.isDown){
            this.elen.body.velocity.x = -300
            this.elen.flipX = true
            this.elen.play("run")
        }
        if (cursors.right.isDown){
            this.elen.body.velocity.x = 300
            this.elen.flipX = false
            this.elen.play("run")
        }
        
    }
}

export default Scene_play