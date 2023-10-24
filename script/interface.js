document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){

        setTimeout(()=>{
            let result = document.getElementsByClassName('.inv')
            result.innerHTML = `<div class = `

            alert("O jogo acabou!  - o vencedor foi o jogador "+ playerTime)
        },15)


    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class = '${symbol}'></div>`
}

