var game = {
    fighterData: [
      {
        name: "MARIO",
        hp: 120,
        ap: 8,
        cp: 15
      }, {
        name: "LUIGI",
        hp: 100,
        ap: 10,
        cp: 10
      }, {
        name: "YOSHI",
        hp: 150,
        ap: 6,
        cp: 20
      }, {
        name: "BOWSER",
        hp: 180,
        ap: 4,
        cp: 25
      }
    ],
    player1Chosen: false,
    player2Chosen: false,
    startClicked: false,
    gameOver: true,
    player1: {},
    player2: {},
    $statusBar: $(".message-text"),

    attack: function() {
      var $player1HP = $(".player1").children(".hp");
      var $player2HP = $(".player2").children(".hp");
      var p1 = this.player1;
      var p2 = this.player2;
      if (this.player2Chosen) {
        p2.hp -= p1.ap;
        p1.hp -= p2.cp;
        $player1HP.text(p1.hp);
        $player2HP.text(p2.hp);
        game.$statusBar.text(p1.name + " ATTACKS " + p2.name + " FOR " + p1.ap + " DAMAGE & " + p2.name + " ATTACKS " + p1.name + " FOR " + p2.cp + " DAMAGE").css("font-size", "20px");
        p1.ap *= 2;
      }
    
      if (p1.hp <= 0) {
        p1.hp = 0
        game.$statusBar.text(p1.name + " HAS 0 HP! YOU LOSE!").css("font-size", "25px");
        $(".player1").addClass(p1.name + "-lose");
      }
    
      if (p2.hp <= 0) {
        p2Chosen = false;
        p2.hp = 0
        game.$statusBar.text(p2.name + " HAS 0 HP! CHOOSE ANOTHER OPPONENT!").css("font-size", "25px");
        $(".player2").addClass(p2.name + "-lose");
        $(".player2").addClass("defeated");
        $(".player2").removeClass("dock-player2 player2");
      }
    
      if ($(".defeated").length === 3) {
        game.$statusBar.text("GAME OVER! " + p1.name + " HAS WON THE MUSHROOM KINGDOM RPG CHALLENGE!").css("font-size", "20px");
        $(".player1").addClass(p1.name + "-win win-border");
        $(".player1").children().hide();
      }
    },

    gameStart: function () {
      if (this.gameOver) {
        this.gameOver = false;
        this.startClicked = true;
        game.$statusBar.removeClass("blink");
        game.$statusBar.text("SELECT PLAYER 1");
      }
    },

    assignPlayer: function(fighter) {
      for (var i = 0; i < this.fighterData.length; i++) {
        if (this.fighterData[i].name === fighter.attr("data-fighter") && this.startClicked) {
          if (!this.player1Chosen) {
            this.player1Chosen = true;
            this.player1 = this.fighterData[i];
            $(fighter).addClass("dock-player1 player1");
            game.$statusBar.text("SELECT PLAYER 2");
          } else {
            if (!$(this).hasClass("player1") && !$(this).hasClass("defeated")) {
              this.player2Chosen = true;
              this.player2 = this.fighterData[i];
              $(fighter).addClass("dock-player2 player2");
              $(".attack-button").removeClass("hidden");
              game.$statusBar.text("BATTLE! CLICK ATTACK TO DEFEAT " + this.fighterData[i].name);
            }
          }
        }
      }
    }
  }
  
$(document).ready(function () {

  $(".start-button").on("click", function() {
    game.gameStart();
  });

  $(".fighter").on("click", function() {
    var fighter = $(this);
    game.assignPlayer(fighter);
  });

  $(".attack-button").on("click", function() {
    game.attack();
  }); 

});


