var Laser = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    function Laser (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, -3, -3, 'laser');	
    },

    fire: function (ship, speed)
    {
        this.lifespan = 1000;
        this.setActive(true);
        this.setVisible(true);

        this.rotation = ship.rotation;

        const width = ship.width / 2 + this.width / 2;
        const posizione = new Phaser.Geom.Point(width, 0);
        Phaser.Math.Rotate(posizione, ship.rotation);
        this.setPosition(ship.x + posizione.x, ship.y + posizione.y);

        const angle = Phaser.Math.DegToRad(ship.body.rotation); // si può ruotare solo con i radianti
        this.body.world.scene.physics.velocityFromRotation(angle, speed, this.body.velocity);

        this.body.setCircle(1, 60, 12);
        //this.body.setSize(1, 1);

    },
    update: function ()
    {
        this.lifespan -= 10;

        if (this.lifespan <= 0)
        {
            this.setActive(false);
            this.setVisible(false);
            this.body.stop();
        }
    }
});
    