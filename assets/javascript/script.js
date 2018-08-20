var player1Chosen = false;
var player2Chosen = false;
var allPlayersChosen = false;


$(".mario").on("click", function() {
    if (!allPlayersChosen) {
        if (!player1Chosen) {
            $(this).addClass("player1-position");
            player1Chosen = true;
        } else {
            $(this).addClass("player2-position");
            player2Chosen = true;
        }

        if (player1Chosen && player2Chosen) {
            allPlayersChosen = true;
        }
    }
});

$(".luigi").on("click", function() {
    if (!allPlayersChosen) {
        if (!player1Chosen) {
            $(this).addClass("player1-position");
            player1Chosen = true;
        } else {
            $(this).addClass("player2-position");
            player2Chosen = true;
        }

        if (player1Chosen && player2Chosen) {
            allPlayersChosen = true;
        }
    }
});
$(".yoshi").on("click", function() {
    if (!allPlayersChosen) {
        if (!player1Chosen) {
            $(this).addClass("player1-position");
            player1Chosen = true;
        } else {
            $(this).addClass("player2-position");
            player2Chosen = true;
        }

        if (player1Chosen && player2Chosen) {
            allPlayersChosen = true;
        }
    }
});
$(".bowser").on("click", function() {
    if (!allPlayersChosen) {
        if (!player1Chosen) {
            $(this).addClass("player1-position");
            player1Chosen = true;
        } else {
            $(this).addClass("player2-position");
            player2Chosen = true;
        }

        if (player1Chosen && player2Chosen) {
            allPlayersChosen = true;
        }
    }
});