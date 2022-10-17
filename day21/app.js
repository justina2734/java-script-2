const game=document.querySelector(".game");
const numberRange=document.querySelector("h3 .number-range");
const chooseNumber=document.querySelector("h4 .choose-number");
const compare = document.createElement("div");
const result = document.createElement("div");


function gameStart(event){
    event.preventDefault();
    const number = Math.round(Math.random()*numberRange.value);
    compare.innerText=`You choose : ${chooseNumber.value}, the machine choose : ${number}`;
    if(String(chooseNumber.value)=== String(number)){
        result.innerText=`You won!`;
        compare.appendChild(result);
        document.body.appendChild(compare);
    } else {
        result.innerText = `You lost!`;
        compare.appendChild(result);
        document.body.appendChild(compare);
    }
}
game.addEventListener("submit", gameStart);



