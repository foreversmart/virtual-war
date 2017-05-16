import * as Phaser from "phaser-ce";

class SimpleGame {

  constructor() {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
  }

  game: Phaser.Game;
  logo: Phaser.Sprite;
  t: Phaser.Graphics;

  preload() {
    this.game.load.image('logo', 'phaser.png');
  }

  create() {
    this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.logo.anchor.setTo(0.5, 0.5);

    this.game.add.sprite

    this.game.physics.arcade.enable(this.logo);

    this.t = this.game.add.graphics()
    this.t.beginFill(0xff0000)
    this.t.lineTo(300, 20)
    this.t.lineTo(300, 200)
    this.t.endFill()
    this.game.physics.arcade.enable(this.t)

  }

  update() {
    this.logo.body.velocity.x = 59
    this.t.body.velocity.x = 50
  }

}

window.onload = () => {

  var game = new SimpleGame();

};
