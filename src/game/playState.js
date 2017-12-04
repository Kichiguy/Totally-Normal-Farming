var game;
var headerText;

var playState = {

  preload: function() {

  },

  create: function() {
    game.stage.backgroundColor = "#ffffff";
    headerText = game.add.text(0,0,"Totally Normal Farming Simulator 2018",{ font: "bold 28px Arial", boundsAlignH:"center"});
    headerText.setTextBounds(0,0,1280,50);
  },

  update: function() {

  }
};

window.onload = function () {
    game = new Phaser.Game(
    1280,
    720,
    Phaser.AUTO,
    'game',
    playState
  );
  game.state.add('play', playState);
}
