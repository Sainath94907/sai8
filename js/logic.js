


let playerTurn = true


const cells = {
    c1:'',c2:'',c3:'',
    c4:'',c5:'',c6:'',
    c7:'',c8:'',c9:'', 
    moves : 0,
    button: 0,
    checkCells: function (){
        if ((this.c1 && this.c5 && this.c9) ||
            (this.c3 && this.c5 && this.c7) ||
            (this.c1 && this.c2 && this.c3) ||
            (this.c3 && this.c6 && this.c9) ||
            (this.c9 && this.c8 && this.c7) ||
            (this.c7 && this.c4 && this.c1) ||
            (this.c2 && this.c5 && this.c8) ||
            (this.c4 && this.c5 && this.c6)){
            $('#prompter').text(`Congratulations ${$('#player1').text()}!`);
            $('.block').addClass('unclickable');
        } else 
        if ((this.c1 === false && this.c5 === false && this.c9 === false) ||
            (this.c3 === false && this.c5 === false && this.c7 === false) ||
            (this.c1 === false && this.c2 === false && this.c3 === false) ||
            (this.c3 === false && this.c6 === false && this.c9 === false) ||
            (this.c9 === false && this.c8 === false && this.c7 === false) ||
            (this.c7 === false && this.c4 === false && this.c1 === false) ||
            (this.c2 === false && this.c5 === false && this.c8 === false) ||
            (this.c4 === false && this.c5 === false && this.c6 === false)){
            $('#prompter').text(`Congratulations ${$('#player2').text()}!`);
            $('.block').addClass('unclickable');
        } else
        if (this.moves === 8) {
            $('#prompter').text(`Draw!`);
            $('.block').addClass('unclickable');
        }
    },
    clearCells: function(){
        this.c1 = ''; this.c2 = ''; this.c3 = '';
        this.c4 = ''; this.c5= ''; this.c6 = '';
        this.c7 = ''; this.c8 = ''; this.c9 = '';
        $('.block').removeClass('unclickable');
        $('.block').empty();
        this.moves = 0;
    },
    player1Turn : function(){
        $('<img src="img/X.png" width="140">').appendTo(`#cell${this.button}`);
        $(`#cell${this.button}`).addClass('unclickable');
        $('#prompter').text(`It's ${$('#player2').text()}'s turn!`)
        cells.checkCells();
        playerTurn = false;
    },
    player2Turn : function(){
        $('<img src="img/O.png" width="140">').appendTo(`#cell${this.button}`);
        $(`#cell${this.button}`).addClass('unclickable');
        $('#prompter').text(`It's ${$('#player1').text()}'s turn!`);
        cells.checkCells();
        playerTurn = true;
    },
    playerInput : function(){
        if (playerTurn) {
            cells[`c${this.button}`] = true;
            cells.player1Turn();
            this.moves += 1;
        }  
         else {
            cells[`c${this.button}`] = false;
            cells.player2Turn();
            this.moves += 1;
        }
    }
    
}







//function to randomly choose which player goes first / if else Math.Random




