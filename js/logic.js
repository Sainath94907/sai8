

const p1 = true
const p2 = false
let playerTurn = true
let button = ''

const cells = {
    c1:'',c2:'',c3:'',
    c4:'',c5:'',c6:'',
    c7:'',c8:'',c9:'',
    checkCells: function (){
        if ((this.c1 && this.c5 && this.c9) ||
            (this.c3 && this.c5 && this.c7) ||
            (this.c1 && this.c2 && this.c3) ||
            (this.c3 && this.c6 && this.c9) ||
            (this.c9 && this.c8 && this.c7) ||
            (this.c7 && this.c4 && this.c1) ||
            (this.c2 && this.c5 && this.c8) ||
            (this.c4 && this.c5 && this.c6)){
            console.log('player 1 wins')
            $('.block').addClass('unclickable');
        }

        if ((this.c1 === false && this.c5 === false && this.c9 === false) ||
            (this.c3 === false && this.c5 === false && this.c7 === false) ||
            (this.c1 === false && this.c2 === false && this.c3 === false) ||
            (this.c3 === false && this.c6 === false && this.c9 === false) ||
            (this.c9 === false && this.c8 === false && this.c7 === false) ||
            (this.c7 === false && this.c4 === false && this.c1 === false) ||
            (this.c2 === false && this.c5 === false && this.c8 === false) ||
            (this.c4 === false && this.c5 === false && this.c6 === false)){
            console.log('player 2 wins')
            $('.block').addClass('unclickable');
        }
    },
    clearCells: function(){
        this.c1 = ''; this.c2 = ''; this.c3 = '';
        this.c4 = ''; this.c5= ''; this.c6 = '';
        this.c7 = ''; this.c8 = ''; this.c9 = '';
        $('.block').removeClass('unclickable');
        $('.block').empty();
    },
    player1Turn : function(){
        $('<img src="http://www.fillmurray.com/150/150">').appendTo(`#cell${button}`);
        $(`#cell${button}`).addClass('unclickable');
        cells.checkCells();
        playerTurn = false;
    },
    player2Turn : function(){
        $('<img src="http://www.placebear.com/150/150">').appendTo(`#cell${button}`);
        $(`#cell${button}`).addClass('unclickable');
        cells.checkCells();
        playerTurn = true;
    },
    playerInput : function(){
        if (playerTurn) {
            cells[`c${button}`] = p1;
            cells.player1Turn();
        }  
         else {
            cells[`c${button}`] = p2;
            cells.player2Turn();
        }
    }
}



$('#cell1').on('click', function(){
    button = 1
    cells.playerInput();
});

$('#cell2').on('click', function(){
    button = 2
    cells.playerInput();
});

$('#cell3').on('click', function(){
    button = 3
    cells.playerInput();
});

$('#cell4').on('click', function(){
    button = 4
    cells.playerInput();
});
$('#cell5').on('click', function(){
    button = 5
    cells.playerInput();
});
$('#cell6').on('click', function(){
    button = 6
    cells.playerInput();
});
$('#cell7').on('click', function(){
    button = 7
    cells.playerInput();
});

$('#cell8').on('click', function(){
    button = 8
    cells.playerInput();
});
$('#cell9').on('click', function(){
    button = 9
    cells.playerInput();
});



//function to randomly choose which player goes first / if else Math.Random




