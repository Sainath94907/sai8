
const cells = {
    c1:'',c2:'',c3:'',
    c4:'',c5:'',c6:'',
    c7:'',c8:'',c9:'',
    playerTurn : true,
    moves : 0,
    button: 0,
    score1: '',
    score2: '',
    round: 1,
    checkCells: function (){
        if ((this.c1 && this.c5 && this.c9) ||
            (this.c3 && this.c5 && this.c7) ||
            (this.c1 && this.c2 && this.c3) ||
            (this.c3 && this.c6 && this.c9) ||
            (this.c9 && this.c8 && this.c7) ||
            (this.c7 && this.c4 && this.c1) ||
            (this.c2 && this.c5 && this.c8) ||
            (this.c4 && this.c5 && this.c6)){
            $('#promptM').text(`${$('#name1').val()} wins!`);
            $('#kabuki')[0].volume = 0.4;
            $('#kabuki')[0].playbackRate = 2;
            $('#kabuki')[0].play();
            $('.block').addClass('unclickable');
            this.navSide();
            this.score1 = Number(this.score1) + 1;
            $('#p1s').text(`${this.score1}`);
            
        } else 
        if ((this.c1 === false && this.c5 === false && this.c9 === false) ||
            (this.c3 === false && this.c5 === false && this.c7 === false) ||
            (this.c1 === false && this.c2 === false && this.c3 === false) ||
            (this.c3 === false && this.c6 === false && this.c9 === false) ||
            (this.c9 === false && this.c8 === false && this.c7 === false) ||
            (this.c7 === false && this.c4 === false && this.c1 === false) ||
            (this.c2 === false && this.c5 === false && this.c8 === false) ||
            (this.c4 === false && this.c5 === false && this.c6 === false)){
            $('#promptM').text(`${$('#name2').val()} wins!`);
            $('.block').addClass('unclickable');
            $('#kabuki')[0].volume = 0.4;
            $('#kabuki')[0].playbackRate = 3;
            $('#kabuki')[0].play();
            this.navSide();
            this.score2 = Number(this.score2) + 1;
            $('#p2s').text(`${this.score2}`);
        } else
        if (this.moves === 8) {
            $('#promptM').text(`Draw!`);
            $('.block').addClass('unclickable');
            this.navSide();
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
    restartGame : function(){
        this.clearCells();
        this.round = 1;
        this.score1 = '';
        this.score2 = '';
        $('#start').css('visibility', 'visible');
        $('.starter').css('visibility', 'visible');
        $('.container').addClass('offScreen');
        $('.block').addClass('unclickable');  
        $('#gameRounds').text('');
        $('#name1').val('');
        $('#name2').val('');
        $('#promptM').text('');
        $('.score').text('');
    },
    player1Turn : function(){
        $('<img src="img/X.png">').appendTo(`#cell${this.button}`);
        $(`#cell${this.button}`).addClass('unclickable');
        $('#promptM').text(`It's ${$('#name2').val()}'s turn!`)
        cells.checkCells();
        this.playerTurn = false;
    },
    player2Turn : function(){
        $('<img src="img/O.png">').appendTo(`#cell${this.button}`);
        $(`#cell${this.button}`).addClass('unclickable');
        $('#promptM').text(`It's ${$('#name1').val()}'s turn!`);
        cells.checkCells();
        this.playerTurn = true;
    },
    playerInput : function(){
        if (this.playerTurn) {
            cells[`c${this.button}`] = true;
            cells.player1Turn();
            this.moves += 1;
        }  
         else {
            cells[`c${this.button}`] = false;
            cells.player2Turn();
            this.moves += 1;
        }
    }, 
    nameCheck : function(){
        if ($('#name1').val() === '' || $('#name2').val() === ''){
            $('#promptM').text(' Enter your names first!');
        } else { 
            this.whosFirst();
        }
    },
    whosFirst : function(){
        $('.whosTurn').css('visibility', 'visible');
        $('input').addClass('unclickable');
        $('.sideButtons').addClass('unclickable');
        $('#promptM').text('Who goes first?!');
        $('div').not('#prompter, #promptM, .game , .whosTurn ').addClass('offScreen');
    
        
        $('#x').on('click', function(){
            cells.playerTurn = true;
            $('#promptM').text(`It's ${$('#name1').val()}'s turn!`);       
            $('#gameRounds').text(`Round ${cells.round}`);
            $('.whosTurn').css('visibility', 'hidden');
            $('.res').css('visibility', 'visible');
            $('.block').removeClass('unclickable');
            $('.sideButtons').removeClass('unclickable');
            $('div').removeClass('offScreen');

        });
        $('#o').on('click', function(){
            cells.playerTurn = false;
            $('#promptM').text(`It's ${$('#name2').val()}'s turn!`);
            $('#gameRounds').text(`Round ${cells.round}`);
            $('.whosTurn').css('visibility', 'hidden');
            $('.res').css('visibility', 'visible');
            $('.block').removeClass('unclickable');
            $('.sideButtons').removeClass('unclickable');
            $('div').removeClass('offScreen');
        });
    },
    whoWins : function(){
        $('#promptM').text('');
        if (this.score1 === '' && this.score2 ===''){
            cells.restartGame()
            $('input').removeClass('unclickable'); 
            $('#winner').css('visibility', 'hidden');
            $('.winImg').css('visibility', 'hidden');
            $('#start').css('visibility', 'visible');
            $('#bgmusic')[0].pause();
            $('#bgmusic')[0].currentTime = 0;
        } else
        if (this.score1 > this.score2){
            $('.container').addClass('offScreen');
            $('#winner').css('visibility', 'visible');
            $('.winImg').css('visibility', 'visible');
            $('#winner').text(`${($('#name1').val()).toUpperCase()} IS THE WINNER! ㋡`);
            $('#victory')[0].play();
            $('#victory')[0].volume = 0.2;
        } else
        if (this.score1 < this.score2){
            $('.container').addClass('offScreen');
            $('#winner').css('visibility', 'visible');
            $('.winImg').css('visibility', 'visible');
            $('#winner').text(`${($('#name2').val()).toUpperCase()} IS THE WINNER! ㋡`);
            $('#victory')[0].play();
            $('#victory')[0].volume = 0.2;
        } else
        if (Number(this.score1) === Number(this.score2)){
            $('.container').addClass('offScreen');
            $('#winner').css('visibility', 'visible');
            $('.winImg').css('visibility', 'visible');
            $('#winner').text(`IT'S A DRAW! ㋛ `);
        }
    },
    navSide : function(){
        $('#restart').removeClass('res');
        $('#restart').addClass('sideB resNav');
        $('#close').removeClass('clo');
        $('#close').addClass('sideB cloNav');
    },
    navTop : function(){
        $('#restart').removeClass('resNav');
        $('#restart').addClass('res');
        $('#close').removeClass('cloNav');
        $('#close').addClass('clo');
    }
}





