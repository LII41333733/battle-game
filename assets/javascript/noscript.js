var game = {
  fighterData: [
    {
      name: "MARIO",
      hp: 160,
      ap: 150,
      cp: 35
    }, {
      name: "LUIGI",
      hp: 150,
      ap: 6,
      cp: 60
    }, {
      name: "YOSHI",
      hp: 180,
      ap: 8,
      cp: 30
    }, {
      name: "BOWSER",
      hp: 220,
      ap: 9,
      cp: 45
    }
  ],
  player1Chosen: false,
  allPlayersChosen: false,
  startClicked: false,
  gameOver: true,
  player1: {},
  player2: {},
  $statusBar: $(".message-text"),
  objectCopy: {},
  attack: function () {
    // console.log(this.fighterData)
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
      $(".attack-button").hide();
      game.$statusBar.text(p2.name + " HAS 0 HP! CHOOSE ANOTHER OPPONENT!").css("font-size", "25px");
      $player2HP.css("background-color", "black");
      if ($(".defeated").length === 3) {
        $(".player1").addClass(p1.name + "-win win-border");
        $(".hp").hide();
        game.$statusBar.text("GAME OVER! " + p1.name + " HAS WON THE MUSHROOM KINGDOM RPG CHALLENGE!").css("font-size", "20px");
        $(".restart-button").show();
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
        game.$statusBar.text(p1.name + " HAS 0 HP! YOU LOSE! CLICK RESTART TO PLAY AGAIN!").css("font-size", "25px");
        $(".attack-button").hide();
      } else {
        game.$statusBar.text(p1.name + " ATTACKS " + p2.name + " FOR " + p1.ap + " DAMAGE & " + p2.name + " ATTACKS " + p1.name + " FOR " + p2.cp + " DAMAGE!").css("font-size", "20px");
      }
    }
    p1.ap *= 2;
  },

  gameStart: function () {
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
        if (!this.player1Chosen) {
          this.player1Chosen = true;
          this.player1 = this.fighterData[i];
          $(fighter).addClass("dock-player1 player1");
          game.$statusBar.text("SELECT PLAYER 2");
        } else {
          if (!$(fighter).hasClass("player1") && !$(fighter).hasClass("defeated") && (!this.allPlayersChosen)) {
            this.allPlayersChosen = true;
            // console.log(this.fighterData[i])
            this.player2 = this.fighterData[i];
            $(fighter).addClass("dock-player2 player2");
            $(".attack-button").show();
            $(".hp").show();
            game.$statusBar.text("BATTLE! CLICK ATTACK TO DEFEAT " + this.fighterData[i].name + "!");
          }
        }
      }
    }
  },

  restart: function() {
    console.log(game.objectCopy);
    // this.player1Chosen = false;
    // this.allPlayersChosen = false;
    // this.startClicked = false;
    // this.gameOver = true;
    // this.player1 = {};
    // this.player2 = {};
    $(".fighter").removeClass("win-border defeated dock-player1 player1 dock-player2 player2 MARIO-win MARIO-lose LUIGI-win LUIGI-lose YOSHI-win YOSHI-lose BOWSER-win BOWSER-lose");
    $(".attack-button").hide();
    $(".hp").hide();
    $(".MARIO-hp").css("background-color", "red");
    $(".LUIGI-hp").css("background-color", "blue");
    $(".YOSHI-hp").css("background-color", "green");
    $(".BOWSER-hp").css("background-color", "orange");
    $('.MARIO-hp').text(this.fighterData[0].hp);
    $('.LUIGI-hp').text(this.fighterData[1].hp);
    $('.YOSHI-hp').text(this.fighterData[2].hp);
    $('.BOWSER-hp').text(this.fighterData[3].hp);


    
    game.$statusBar.addClass("blink");
    game.$statusBar.text("PRESS START TO PLAY").css("font-size", "25px");


  },




}





$(document).ready(function () {

  $(".start-button").on("click", function () {
    const copy = Object.assign({}, game);
    game.objectCopy = copy;
    console.log(game.objectCopy);
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
    $(".attack-button").hide();
    $('.MARIO-hp').text(game.fighterData[0].hp);
    $('.LUIGI-hp').text(game.fighterData[1].hp);
    $('.YOSHI-hp').text(game.fighterData[2].hp);
    $('.BOWSER-hp').text(game.fighterData[3].hp);
  });




});



