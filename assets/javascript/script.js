var $marioHP = $(".MARIO-HP");
var $luigiHP = $(".LUIGI-HP");
var $yoshiHP = $(".YOSHI-HP");
var $bowserHP = $(".BOWSER-HP");


var game = {
  player1Chosen: false,
  player2Chosen: false,
  allPlayersChosen: false,
  startClicked: false,
  gameOver: true,
  mario: {
    hp: 120,
    ap: 8,
    cp: 15
  },
  luigi: {
    hp: 100,
    ap: 10,
    cp: 10
  },
  yoshi: {
    hp: 150,
    ap: 6,
    cp: 20
  },
  bowser: {
    hp: 180,
    ap: 4,
    cp: 25
  },
  player1: {},
  player2: {},
  p1Multiplier: 1
}

$(document).ready(function () {

  $(".startButton").on("click", function () {
    if (game.gameOver) {
      game.gameOver = false;
      game.startClicked = true;
      $(".message-text").removeClass("blink-feature");
      $(".message-text").text("SELECT PLAYER 1");
    }

  })

  $(".marioCard").on("click", function () {
    if (game.startClicked) {
      if (!game.allPlayersChosen) {
        if (!game.player1Chosen) {
          $(this).addClass("player1-position");
          $(this).addClass("p1-designation");
          $marioHP.addClass("p1HP");
          game.player1 = game.mario;
          game.player1Chosen = true;
          $(".message-text").text("SELECT PLAYER 2");
        } else {
          if (!$(this).hasClass("p1-designation") && parseInt($(".MARIO").text()) > 0) {
            $(this).addClass("player2-position");
            $(this).addClass("p2-designation");
            $marioHP.addClass("p2HP");
            game.player2 = game.mario;
            game.player2Chosen = true;
            $(".message-text").text("BATTLE! CLICK ATTACK TO DEFEAT " + $(".p2-designation").attr("value"));
          }
        }

        if (game.player1Chosen && game.player2Chosen) {
          game.allPlayersChosen = true;
        }
      }

      if (game.allPlayersChosen) {
        $(".attackButton").removeClass("hidden");
      }

    }
  });

  $(".luigiCard").on("click", function () {
    console.log(game.startClicked);
    console.log(game.allPlayersChosen);
    console.log(game.player1Chosen);
    console.log($(this));
    if (game.startClicked) {
      if (!game.allPlayersChosen) {
        if (!game.player1Chosen) {
          $(this).addClass("player1-position");
          $(this).addClass("p1-designation");
          $luigiHP.addClass("p1HP");
          game.player1 = game.luigi;
          game.player1Chosen = true;
          $(".message-text").text("SELECT PLAYER 2");
        } else {
          if (!$(this).hasClass("p1-designation") && parseInt($(".LUIGI").text()) > 0) {
            console.log(this)
            $(this).addClass("player2-position");
            $(this).addClass("p2-designation");
            $luigiHP.addClass("p2HP");
            game.player2 = game.luigi;
            game.player2Chosen = true;
            $(".message-text").text("BATTLE! CLICK ATTACK TO DEFEAT " + $(".p2-designation").attr("value"));
          }
        }

        if (game.player1Chosen && game.player2Chosen) {
          game.allPlayersChosen = true;
        }
      }

      if (game.allPlayersChosen) {
        $(".attackButton").removeClass("hidden");
      }

    }
  });

  $(".yoshiCard").on("click", function () {
    if (game.startClicked) {
      if (!game.allPlayersChosen) {
        if (!game.player1Chosen) {
          $(this).addClass("player1-position");
          $(this).addClass("p1-designation");
          $yoshiHP.addClass("p1HP");
          game.player1 = game.yoshi;
          game.player1Chosen = true;
          $(".message-text").text("SELECT PLAYER 2");
        } else {
          if (!$(this).hasClass("p1-designation") && parseInt($(".YOSHI").text()) > 0) {
            $(this).addClass("player2-position");
            $(this).addClass("p2-designation");
            $yoshiHP.addClass("p2HP");
            game.player2 = game.yoshi;
            game.player2Chosen = true;
            $(".message-text").text("BATTLE! CLICK ATTACK TO DEFEAT " + $(".p2-designation").attr("value"));
          }
        }

        if (game.player1Chosen && game.player2Chosen) {
          game.allPlayersChosen = true;
        }
      }

      if (game.allPlayersChosen) {
        $(".attackButton").removeClass("hidden");
      }

    }
  });

  $(".bowserCard").on("click", function () {
    if (game.startClicked) {
      if (!game.allPlayersChosen) {
        if (!game.player1Chosen) {
          $(this).addClass("player1-position");
          $(this).addClass("p1-designation");
          $bowserHP.addClass("p1HP");
          game.player1 = game.bowser;
          game.player1Chosen = true;
          $(".message-text").text("SELECT PLAYER 2");
        } else {
          if (!$(this).hasClass("p1-designation") && parseInt($(".BOWSER").text()) > 0) {
            $(this).addClass("player2-position");
            $(this).addClass("p2-designation");
            $bowserHP.addClass("p2HP");
            game.player2 = game.bowser;
            game.player2Chosen = true;
            $(".message-text").text("BATTLE! CLICK ATTACK TO DEFEAT " + $(".p2-designation").attr("value"));
          }
        }

        if (game.player1Chosen && game.player2Chosen) {
          game.allPlayersChosen = true;
        }
      }

      if (game.allPlayersChosen) {
        $(".attackButton").removeClass("hidden");
      }

    }
  });


  $(".attackButton").on("click", function () {

    if (game.allPlayersChosen) {
      var p1 = $(".p1-designation").attr("value");
      var p2 = $(".p2-designation").attr("value");
  
      game.player2.hp -= game.player1.ap;
      game.player1.hp -= game.player2.cp;
  
  
      $(".message-text").text(p1 + " ATTACKS " + p2 + " FOR " + game.player1.ap + " DAMAGE & " + p2 + " ATTACKS " + p1 + " FOR " + game.player2.cp + " DAMAGE").css("font-size", "20px");
  
      game.player1.ap *= 2;
  
      if (game.player1.hp <= 0) {
        game.player1.hp = 0
        $(".message-text").text(p1 + " HAS 0 HP! YOU HAVE LOST!").css("font-size", "25px");
        $(".p1-designation").addClass(p1 + "-lose");
      }
      if (game.player2.hp <= 0) {
        game.player2.hp = 0
        $(".message-text").text(p2 + " HAS 0 HP! CHOOSE ANOTHER OPPONENT!").css("font-size", "25px");
        $(".p2-designation").addClass(p2 + "-lose");
        $(".p2-designation").addClass("defeated");
        $(".p2-designation").children().css( "background-color", "black" );
        $(".p2-designation").removeClass("player2-position");
        $(".p2-designation").removeClass("p2HP");
        $(".p2-designation").removeClass("p2-designation");
        game.player2Chosen = false;
        game.allPlayersChosen = false;
        if($(".defeated").length === 3) {
          console.log($(".p1-designation"))
          $(".message-text").text("GAME OVER! " + p1 + " HAS WON THE MUSHROOM KINGDOM CHALLENGE!");
          $(".p1-designation").addClass(p1 + "-win");
          $(".p1-designation").addClass("win-border");
          $(".p1-designation").removeClass(p1 + "-HP");
        }

      }
  
      console.log("Player 1 HP: " + game.player1.hp + " Player 2 HP: " + game.player2.hp);
  
      $(".p1HP").text(game.player1.hp);
  
      $(".p2HP").text(game.player2.hp);
  
    }


  });

});

