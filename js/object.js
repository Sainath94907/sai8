$('#restart').append('<img src="img/restart.png">');
$('#close').append('<img src="img/close.png">');
$('#prompter').append('<img src="img/banner.png">');
$('.header').append('<img src="img/banner1.png">');
$('#start').append('<img src="img/start.png">');
$('.winImg').append('<img src="img/win.png">');
$('#x').append('<img src="img/X.png">');
$('#o').append('<img src="img/O.png">');
$('.players').append('<img class="tokenx" src="img/X.png">');
$('.players').append('<img class="tokeno" src="img/O.png">');


$('.starter').on('click', function(){
    $('#start').css('visibility', 'hidden');
    $('.starter').css('visibility', 'hidden');
    $('.container').removeClass('offScreen');
    $('.block').addClass('unclickable');
    cells.nameCheck();
})

$('input').on('focusout', function(){
    cells.nameCheck();
});

$('#cell1').on('click', function(){
    cells.button = 1;
    cells.playerInput();
});

$('#cell2').on('click', function(){
    cells.button = 2;
    cells.playerInput();
});

$('#cell3').on('click', function(){
    cells.button = 3;
    cells.playerInput();
});

$('#cell4').on('click', function(){
    cells.button = 4;
    cells.playerInput();
});
$('#cell5').on('click', function(){
    cells.button = 5;
    cells.playerInput();
});
$('#cell6').on('click', function(){
    cells.button = 6;
    cells.playerInput();
});
$('#cell7').on('click', function(){
    cells.button = 7;
    cells.playerInput();
});

$('#cell8').on('click', function(){
    cells.button = 8;
    cells.playerInput();
});
$('#cell9').on('click', function(){
    cells.button = 9;
    cells.playerInput();
});


$('#restart').on('click', function(){
    cells.navTop();
    cells.whosFirst();
    cells.clearCells();
    cells.round += 1;
    $('#gameRounds').text(`Round ${cells.round}`);
    $('.block').addClass('unclickable');
});

$('#close').on('click', function(){
    cells.navTop();
    cells.whoWins();
    $('#restart').css('visibility','hidden');
});

$('#winner').on('click', function(){
        cells.restartGame()
        $('input').removeClass('unclickable'); 
        $('.winImg').css('visibility', 'hidden');
        $('#winner').css('visibility', 'hidden');
});


