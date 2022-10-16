const game=document.querySelector(".game");
const numberRange=document.querySelector("h3 .number-range");
const chooseNumber=document.querySelector("h5 .choose-number");

function gameStart(event){
    event.preventDefault();
    const number = Math.round(Math.random()*numberRange.value);
    if(String(chooseNumber.value)=== String(number)){
        const span = document.createElement("span");
        span.innerText=`You choose : ${chooseNumber.value}, the machine choose : ${number}`;
        const result=document.createElement("result");
        result.innerText=`You won!`;
        span.appendChild(result);
        document.body.appendChild(span);
    } else {
        const span = document.createElement("span");
        span.innerText = `You choose : ${chooseNumber.value}, the machine choose : ${number}`;
        const result = document.createElement("result");
        result.innerText = `You lost!`;
        span.appendChild(result);
        document.body.appendChild(span);
    }
}
game.addEventListener("submit", gameStart);



