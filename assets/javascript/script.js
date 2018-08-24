var game = {
  fighterData: [
    {
      name: "MARIO",
      hp: 0,
      ap: 0,
      cp: 0
    }, {
      name: "LUIGI",
      hp: 0,
      ap: 0,
      cp: 0
    }, {
      name: "YOSHI",
      hp: 0,
      ap: 0,
      cp: 0
    }, {
      name: "BOWSER",
      hp: 0,
      ap: 0,
      cp: 0
    }
  ],
  player1Chosen: false,
  allPlayersChosen: false,
  startClicked: false,
  gameOver: true,
  player1: {},
  player2: {},
  $statusBar: $(".message-text"),

  attack: function () {
    var $player1HP = $(".player1").children(".hp");
    var $player2HP = $(".player2").children(".hp");
    var p1 = this.player1;
    var p2 = this.player2;

    p2.hp -= p1.ap;
    if (p2.hp < 0) {
      p2.hp = 0;
    }
    $player2HP.text(p2.hp);

    if (p2.hp <= 0) {
      this.allPlayersChosen = false;
      $(".player2").addClass(p2.name + "-lose");
      $(".player2").addClass("defeated");
      $(".player2").removeClass("dock-player2 player2");
      $(".player2").removeClass(p2.name);
      $(".attack-button").addClass("hidden");
      game.$statusBar.text(p2.name + " HAS 0 HP! CHOOSE ANOTHER OPPONENT!").css("font-size", "25px");
      $player2HP.css("background-color", "black");
      if ($(".defeated").length === 3) {
        $(".player1").addClass(p1.name + "-win win-border");
        $(".hp").hide();
        game.$statusBar.text("GAME OVER! " + p1.name + " HAS WON THE MUSHROOM KINGDOM RPG CHALLENGE!").css("font-size", "20px");
        $(".restart-button").removeClass("hidden");
      }
    } else {
      p1.hp -= p2.cp;
      if (p1.hp < 0) {
        p1.hp = 0;
      }
      $player1HP.text(p1.hp);

      if (p1.hp <= 0) {
        $(".player1").addClass(p1.name + "-lose");
        $(".player2").addClass(p2.name + "-win win-border");
        $(".hp").hide();
        $player1HP.css("background-color", "black")
        game.$statusBar.text(p1.name + " HAS 0 HP! YOU LOSE!").css("font-size", "25px");
        $(".attack-button").addClass("hidden");
      } else {
        game.$statusBar.text(p1.name + " ATTACKS " + p2.name + " FOR " + p1.ap + " DAMAGE & " + p2.name + " ATTACKS " + p1.name + " FOR " + p2.cp + " DAMAGE").css("font-size", "20px");
      }
    }
    p1.ap *= 2;
  },

  gameStart: function () {
    // this.copy = this.fighterData;
    // console.log(this.fighterData);

    if (this.gameOver) {
      this.gameOver = false;
      this.startClicked = true;
      game.$statusBar.removeClass("blink");
      game.$statusBar.text("SELECT PLAYER 1");
    }
  },

  assignPlayer: function (fighter) {
    for (var i = 0; i < this.fighterData.length; i++) {
      if (this.fighterData[i].name === fighter.attr("data-fighter") && this.startClicked) {
        this.setHP(this.fighterData[i].name);
        if (!this.player1Chosen) {
          this.player1Chosen = true;
          this.player1 = this.fighterData[i];
          $(fighter).addClass("dock-player1 player1");
          game.$statusBar.text("SELECT PLAYER 2");
        } else {
          if (!$(fighter).hasClass("player1") && !$(fighter).hasClass("defeated") && (!this.allPlayersChosen)) {
            this.allPlayersChosen = true;
            this.player2 = this.fighterData[i];
            $(fighter).addClass("dock-player2 player2");
            $(".attack-button").removeClass("hidden");
            $(".hp").show();
            game.$statusBar.text("BATTLE! CLICK ATTACK TO DEFEAT " + this.fighterData[i].name);
          }
        }
      }
    }
  },

  restart: function() {
    this.player1Chosen = false;
    this.allPlayersChosen = false;
    this.startClicked = false;
    this.gameOver = true;
    this.player1 = {};
    this.player2 = {};
    $(".fighter").removeClass("win-border defeated dock-player1 player1 dock-player2 player2 MARIO-win MARIO-lose LUIGI-win LUIGI-lose YOSHI-win YOSHI-lose BOWSER-win BOWSER-lose");
    $(".attack-button").addClass("hidden");
    $(".MARIO-hp").css("background-color", "red").text(game.fighterData[0].hp);
    $(".LUIGI-hp").css("background-color", "blue").text(game.fighterData[1].hp);
    $(".YOSHI-hp").css("background-color", "green").text(game.fighterData[2].hp);
    $(".BOWSER-hp").css("background-color", "orange").text(game.fighterData[3].hp);

    
    game.$statusBar.addClass("blink");
    game.$statusBar.text("PRESS START TO PLAY").css("font-size", "25px");


  },

  setHP(character) {
    if (character === "MARIO") {
      this.fighterData[0].hp = 150;
      this.fighterData[0].ap = 6;
      this.fighterData[0].cp = 60;
      this.fighterData[1].hp = 180;
      this.fighterData[1].ap = 8;
      this.fighterData[1].cp = 30;
      this.fighterData[2].hp = 220;
      this.fighterData[2].ap = 9;
      this.fighterData[2].cp = 45;
      this.fighterData[3].hp = 160;
      this.fighterData[3].ap = 10;
      this.fighterData[3].cp = 35;
    }
    if (character === "LUIGI") {
      this.fighterData[0].hp = 160;
      this.fighterData[0].ap = 10;
      this.fighterData[0].cp = 35;
      this.fighterData[1].hp = 150;
      this.fighterData[1].ap = 6;
      this.fighterData[1].cp = 60;
      this.fighterData[2].hp = 180;
      this.fighterData[2].ap = 8;
      this.fighterData[2].cp = 30;
      this.fighterData[3].hp = 220;
      this.fighterData[3].ap = 9;
      this.fighterData[3].cp = 45;
    }
    if (character === "YOSHI") {
      this.fighterData[0].hp = 220;
      this.fighterData[0].ap = 9;
      this.fighterData[0].cp = 45;
      this.fighterData[1].hp = 160;
      this.fighterData[1].ap = 10;
      this.fighterData[1].cp = 35;
      this.fighterData[2].hp = 150;
      this.fighterData[2].ap = 6;
      this.fighterData[2].cp = 60;
      this.fighterData[3].hp = 180;
      this.fighterData[3].ap = 8;
      this.fighterData[3].cp = 30;
    }
    if (character === "BOWSER") {
      this.fighterData[0].hp = 180;
      this.fighterData[0].ap = 8;
      this.fighterData[0].cp = 30;
      this.fighterData[1].hp = 220;
      this.fighterData[1].ap = 9;
      this.fighterData[1].cp = 45;
      this.fighterData[2].hp = 160;
      this.fighterData[2].ap = 10;
      this.fighterData[2].cp = 35;
      this.fighterData[3].hp = 150;
      this.fighterData[3].ap = 6;
      this.fighterData[3].cp = 60;
    }
  }


}






$(document).ready(function () {

  $(".start-button").on("click", function () {
    game.gameStart();
  });

  $(".fighter").on("click", function () {
    var fighter = $(this);
    game.assignPlayer(fighter);
  });

  $(".attack-button").on("click", function () {
    game.attack();
  });

  $(".restart-button").on("click", function () {
    game.restart();
  });

  $(".toad").on("click", function () {
    $(".modal").hide();
    $('.MARIO-hp').text(game.fighterData[0].hp);
    $('.LUIGI-hp').text(game.fighterData[1].hp);
    $('.YOSHI-hp').text(game.fighterData[2].hp);
    $('.BOWSER-hp').text(game.fighterData[3].hp);
  });




});



