$('.starter').on('click', function(){
    $('#start').css('visibility', 'hidden');  
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
    cells.whosFirst();
    cells.clearCells();
    cells.round += 1;
    $('#gameRounds').text(`Round ${cells.round}`);
    $('.block').addClass('unclickable');
});

$('#close').on('click', function(){
    cells.whoWins();
    $('.container').addClass('offScreen');
    $('#winner').css('visibility', 'visible');
});

$('#winner').on('click', function(){
        cells.restartGame()
        $('input').removeClass('unclickable'); 
        $('#winner').css('visibility', 'hidden')
})
