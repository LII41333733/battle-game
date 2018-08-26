$("#BB").hide();


var game = {
  gameOver: true,
  fighterData: [],
  $statusBar: $(".message-text"),

  assignPlayer: function (fighter) {
    for (var i = 0; i < this.fighterData.length; i++) {
      if (this.fighterData[i].name === fighter.attr("data-fighter")) {
        if (!this.player1Chosen && this.startClicked) {
          this.player1Chosen = true;
          this.gameOver = false;
          this.player1 = this.fighterData[i];
          $(fighter).addClass("dock-player1 player1");
          game.$statusBar.text("SELECT PLAYER 2");
        } else {
          if (!$(fighter).hasClass("player1") && !$(fighter).hasClass("defeated") && (!this.allPlayersChosen)) {
            this.allPlayersChosen = true;
            this.player2 = this.fighterData[i];
            $(fighter).addClass("dock-player2 player2");
            $(".attack-button").show();
            game.$statusBar.text("BATTLE! CLICK ATTACK TO DEFEAT " + this.fighterData[i].name + "!");
          }
        }
      }
    }
  },

  attack: function () {
    var $player1HP = $(".player1").children(".hp");
    var $player2HP = $(".player2").children(".hp");
    var p1 = this.player1;
    var p2 = this.player2;

    p2.hp -= p1.ap;
    if (p2.hp < 0) {
      p2.hp = 0;
    }

    p1.hp -= p2.cp;
    if (p1.hp < 0) {
      p1.hp = 0;
    }

    $player1HP.text(p1.hp);
    $player2HP.text(p2.hp);
    this.$statusBar.text(p1.name + " ATTACKS " + p2.name + " FOR " + p1.ap + " DAMAGE & " + p2.name + " ATTACKS " + p1.name + " FOR " + p2.cp + " DAMAGE!").css("font-size", "20px");

    p1.ap *= 2;

    if (p1.hp <= 0) {
      $(".player1").addClass(p1.name + "-lose");
      $(".player2").addClass(p2.name + "-win win-border");
      $player1HP.css("background-color", "black")
      game.$statusBar.text(p1.name + " HAS 0 HP! YOU LOSE! CLICK RESTART TO PLAY AGAIN!").css("font-size", "25px");
      $(".attack-button").hide();
    } else if (p2.hp <= 0) {
      this.allPlayersChosen = false;
      $(".attack-button").hide();
      $(".player2").addClass(p2.name + "-lose");
      $(".player2").addClass("defeated");
      $(".player2").removeClass("dock-player2 player2");
      $(".player2").removeClass(p2.name);
      game.$statusBar.text(p2.name + " HAS 0 HP! CHOOSE ANOTHER OPPONENT!").css("font-size", "25px");
      $player2HP.css("background-color", "black");
      if ($(".defeated").length === 3) {
        $(".player1").addClass(p1.name + "-win win-border");
        game.$statusBar.text("GAME OVER! " + p1.name + " HAS WON THE MUSHROOM KINGDOM RPG CHALLENGE!").css("font-size", "20px");
      }
    }
  },

  gameStart: function () {
    if (this.gameOver) {
      this.restart();
      $(".hp").show();
      this.startClicked = true;
      this.$statusBar.removeClass("blink");
      this.$statusBar.text("SELECT PLAYER 1");
    }
  },

  restart: function () {

    this.fighterData = [
      {
        name: "MARIO",
        hp: 120,
        ap: 8,
        cp: 2
      }, {
        name: "LUIGI",
        hp: 100,
        ap: 9,
        cp: 5
      }, {
        name: "YOSHI",
        hp: 165,
        ap: 1,
        cp: 25
      }, {
        name: "BOWSER",
        hp: 150,
        ap: 2,
        cp: 20
      }
    ];

    this.gameOver = true;
    this.player1Chosen = false,
    this.allPlayersChosen = false,
    this.startClicked = false,
    this.player1 = {},
    this.player2 = {},

    $('.MARIO-hp').text(this.fighterData[0].hp);
    $('.LUIGI-hp').text(this.fighterData[1].hp);
    $('.YOSHI-hp').text(this.fighterData[2].hp);
    $('.BOWSER-hp').text(this.fighterData[3].hp);
    $(".fighter").removeClass("win-border defeated dock-player1 player1 dock-player2 player2 MARIO-win MARIO-lose LUIGI-win LUIGI-lose YOSHI-win YOSHI-lose BOWSER-win BOWSER-lose");
    $(".attack-button").hide();
    $(".hp").hide();
    $(".MARIO-hp").css("background-color", "red");
    $(".LUIGI-hp").css("background-color", "blue");
    $(".YOSHI-hp").css("background-color", "green");
    $(".BOWSER-hp").css("background-color", "orange");
    game.$statusBar.addClass("blink");
    game.$statusBar.text("PRESS START TO PLAY").css("font-size", "25px");
  }
}

$(document).ready(function () {

  $(".start-button").on("click", function () {
    game.gameStart();
  });

  $(".fighter").on("click", function () {
    if (game.startClicked) {
      var fighter = $(this);
      game.assignPlayer(fighter);
    }
  });

  $(".attack-button").on("click", function () {
    game.attack();
  });

  $(".restart-button").on("click", function () {
    game.restart();
  });

  $(".toad").on("click", function () {
    $(".modal").hide();
    $(".attack-button").hide();
    $(".hp").hide();
    setInterval(function() {
      $("#BB").show(); 
      $("#BB").animate({right: '1350px'}, 5000, function hideBB(){
        $("#BB").hide();
        $("#BB").animate({right: '-1350px'}, 5000);
      });
    
    }, 10000);
  });

});



