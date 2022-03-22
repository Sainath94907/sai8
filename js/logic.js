

const p1 = true
const p2 = false

const cells = {
    c1:'',c2: p2,c3: p2,
    c4:'',c5:'',c6:'',
    c7:'',c8:'',c9:'',

    checkCells: function (){
        if ((this.c1 === this.c2 === this.c3)
            
        ){
            console.log('player 1 wins')
        }

        if ((!this.c1 === !this.c2 === !this.c3)
            
        ){
            console.log('player 2 wins')
        }
    },
    clearCells: function(){
        this.c1 = ''; this.c2 = ''; this.c3 = '';
        this.c4 = ''; this.c5= ''; this.c6 = '';
        this.c7 = ''; this.c8 = ''; this.c9 = '';
        $('.block').removeClass('unclickable');
    }
}


let player1 = false
let button = ''
const player1Turn = function(){
    $(button).addClass('unclickable');
    $('<img src="http://www.fillmurray.com/150/150">').appendTo(button)
    cells.checkCells();
}

const player2Turn = function(){
    $(button).addClass('unclickable');
    $('<img src="http://www.placebear.com/150/150">').appendTo(button)
    cells.checkCells();
}

$('#cell1').on('click', function(){
    button = '#cell1'
    if (player1 = true) {
        cells.c1 = p1;
        player1Turn();
        return player1 = false
    } else {
        cells.c1 = p2;
        player2Turn();
        return player1 = true
    }
})

//function to randomly choose which player goes first / if else Math.Random




// let player1 = true

// const playerTurn = function() {
//     if (player1 = true){
//         player1Turn();
//         return player1 = false
//     } else {
//         player2Turn()
//         return player1 = true
//     }   
// }

// const player1Turn = function(){
// $('#cell1').on('click', function(){
//     cells.c1 = p1;
//     $('#cell1').addClass('unclickable');
//     $('<img src="http://www.fillmurray.com/150/150">').appendTo('#cell1')
//     cells.checkCells();
//     playerTurn();
//     return player1 = false
    
// });
// $('#cell6').on('click', function(){
//     cells.c3 = p1;
//     $('#cell6').addClass('unclickable');
//     $('<img src="http://www.fillmurray.com/150/150">').appendTo('#cell6')
//     cells.checkCells();
//     playerTurn();
// });
// }

// const player2Turn = function(){
// $('#cell2').on('click', function(){
//     cells.c2 = p2;
//     $('#cell2').addClass('unclickable');
//     $('<img src="http://www.placebear.com/150/150">').appendTo('#cell2')
//     cells.checkCells();
//     return player1 = true
//     playerTurn();
// });
// }
// $('#cell9').on('click', function(){
//     cells.c = p2;
//     $('#cell9').addClass('unclickable');
//     $('<img src="http://www.placebear.com/150/150">').appendTo('#cell9')
//     cells.checkCells();
//     player1Turn();
// });


// player1Turn();

// $('#cell2').on('click', function(){
//     cells.c2 = p2
//     console.log('heyooooo');
// })

// const pInput = function (){
    
// }
// const check

// const cellss = [
//     ['','',''],
//     ['','',''],
//     ['','','']
// ];

// const clearCells = function(){
//     for (let i = 0; i < 3 ; i++){
//         for (let j = 0; j < 3 ; j++){
//         cells[i][j] = '';
//         }
//     }
// }