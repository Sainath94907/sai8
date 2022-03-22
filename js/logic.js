

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
        $('<img src="http://www.fillmurray.com/150/150">').appendTo(button);
        $(button).addClass('unclickable');
        cells.checkCells();
        playerTurn = false;
    },
    player2Turn : function(){
        $('<img src="http://www.placebear.com/150/150">').appendTo(button);
        $(button).addClass('unclickable');
        cells.checkCells();
        playerTurn = true;
    }
}



$('#cell1').on('click', function(){
    button = '#cell1'
    if (playerTurn) {
        cells.c1 = p1;
        cells.player1Turn();
    }  
     else {
        cells.c1 = p2;
        cells.player2Turn();
    }
});

$('#cell2').on('click', function(){
    button = '#cell2'
    if (playerTurn) {
        cells.c2 = p1;
       cells.player1Turn()
    } 
    else {
        cells.c2 = p2;
        cells.player2Turn();
    }
});

$('#cell3').on('click', function(){
    button = '#cell3'
    if (playerTurn) {
        cells.c3 = p1;
        cells.player1Turn()
    } 
    else {
        cells.c3 = p2;
        cells.player2Turn();
    }
});

$('#cell4').on('click', function(){
    button = '#cell4'
    if (playerTurn) {
        cells.c4 = p1;
        cells.player1Turn()
    } 
    else {
        cells.c4 = p2;
        cells.player2Turn();
    }
});

$('#cell5').on('click', function(){
    button = '#cell5'
    if (playerTurn) {
        cells.c5 = p1;
        cells.player1Turn()
    } 
    else {
        cells.c5 = p2;
        cells.player2Turn();
    }
});

$('#cell6').on('click', function(){
    button = '#cell6'
    if (playerTurn) {
        cells.c6 = p1;
        cells.player1Turn()
    } 
    else {
        cells.c6 = p2;
        cells.player2Turn();
    }
});

$('#cell7').on('click', function(){
    button = '#cell7'
    if (playerTurn) {
        cells.c7 = p1;
        cells.player1Turn()
    } 
    else {
        cells.c7 = p2;
        cells.player2Turn();
    }
});

$('#cell8').on('click', function(){
    button = '#cell8'
    if (playerTurn) {
        cells.c8 = p1;
        cells.player1Turn()
    } 
    else {
        cells.c8 = p2;
        cells.player2Turn();
    }
});

$('#cell9').on('click', function(){
    button = '#cell9'
    if (playerTurn) {
        cells.c9 = p1;
        cells.player1Turn()
    } 
    else {
        cells.c9 = p2;
        cells.player2Turn();
    }
});




//function to randomly choose which player goes first / if else Math.Random




