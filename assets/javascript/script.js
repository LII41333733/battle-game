var $marioHP = $(".marioHP");
var $luigiHP = $(".luigiHP");
var $yoshiHP = $(".yoshiHP");
var $bowserHP = $(".bowserHP");


var game = {
    player1Chosen: false,
    player2Chosen: false,
    allPlayersChosen: false,
    mario: {
        hp: 120,
        ap: 3,
        cp: 15
    },
    luigi: {
        hp: 100,
        ap: 12,
        cp: 5
    },
    yoshi: {
        hp: 140,
        ap: 8,
        cp: 10
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

$(document).ready(function() {

    $(".mario").on("click", function() {
        if (!game.allPlayersChosen) {
            if (!game.player1Chosen) {
                $(this).addClass("player1-position");
                $(this).addClass("p1-designation");
                $marioHP.addClass("p1HP");
                game.player1 = game.mario;
                game.player1Chosen = true;
            } else {
                if (!this.hasClass("p1-designation")) {
                    $(this).addClass("player2-position");
                    $(this).addClass("p2-designation");
                    $marioHP.addClass("p2HP");
                    game.player2 = game.mario;
                    game.player2Chosen = true;
                }
            }
    
            if (game.player1Chosen && game.player2Chosen) {
                game.allPlayersChosen = true;
            }
        }

        if (game.allPlayersChosen) {
            $(".attackButton").removeClass("hidden");
        }

    });

    $(".luigi").on("click", function() {
        if (!game.allPlayersChosen) {
            if (!game.player1Chosen) {
                $(this).addClass("player1-position");
                $(this).addClass("p1-designation");
                $luigiHP.addClass("p1HP");
                game.player1 = game.luigi;
                game.player1Chosen = true;
            } else {
                $(this).addClass("player2-position");
                $(this).addClass("p2-designation");
                $luigiHP.addClass("p2HP");
                game.player2 = game.luigi;
                game.player2Chosen = true;
            }
    
            if (game.player1Chosen && game.player2Chosen) {
                game.allPlayersChosen = true;
            }
        }

        if (game.allPlayersChosen) {
            $(".attackButton").removeClass("hidden");
        }

    });
    $(".yoshi").on("click", function() {
        if (!game.allPlayersChosen) {
            if (!game.player1Chosen) {
                $(this).addClass("player1-position");
                $(this).addClass("p1-designation");
                $yoshiHP.addClass("p1HP");
                game.player1 = game.yoshi;
                game.player1Chosen = true;
            } else {
                $(this).addClass("player2-position");
                $(this).addClass("p2-designation");
                $yoshiHP.addClass("p2HP");
                game.player2 = game.yoshi;
                console.log(game.player2.hp);
                game.player2Chosen = true;
            }
    
            if (game.player1Chosen && game.player2Chosen) {
                game.allPlayersChosen = true;
            }
        }

        if (game.allPlayersChosen) {
            $(".attackButton").removeClass("hidden");
        }

    });
    $(".bowser").on("click", function() {
        if (!game.allPlayersChosen) {
            if (!game.player1Chosen) {
                $(this).addClass("player1-position");
                $(this).addClass("p1-designation");
                $bowserHP.addClass("p1HP");
                game.player1 = game.bowser;
                game.player1Chosen = true;
            } else {
                $(this).addClass("player2-position");
                $(this).addClass("p2-designation");
                $bowserHP.addClass("p2HP");
                game.player2 = game.bowser;
                game.player2Chosen = true;
            }
    
            if (game.player1Chosen && game.player2Chosen) {
                game.allPlayersChosen = true;
            }
        }

        if (game.allPlayersChosen) {
            $(".attackButton").removeClass("hidden");
        }

    });
    

    $(".attackButton").on("click", function() {



        game.player2.hp -= game.player1.ap;
        console.log(game.player1.ap); 
        game.player1.ap *= 2;

        game.player1.hp -= game.player2.cp;

        if (game.player1.hp < 0) {
            game.player1.hp = 0
            console.log("P1 Died - GAME OVER");
        }
        if (game.player2.hp < 0) {
            game.player2.hp = 0
            console.log("P2 Died");
            $(".p2-designation").removeClass("player2-position");
            $(".p2-designation").removeClass("p2HP");
            $(".p2-designation").removeClass("p2-designation");
            game.player2Chosen = false;
            game.allPlayersChosen = false;
        }

        console.log("Player 1 HP: " + game.player1.hp + " Player 2 HP: " + game.player2.hp);

        $(".p1HP").text(game.player1.hp);

        $(".p2HP").text(game.player2.hp);

    });

});

