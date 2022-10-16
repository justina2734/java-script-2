const game=document.querySelector(".game");
const numberRange=document.querySelector("h3 .number-range");
const chooseNumber=document.querySelector("h4 .choose-number");

function gameStart(event){
    event.preventDefault();
    const number = Math.round(Math.random()*numberRange.value);
    if(String(chooseNumber.value)=== String(number)){
        const compare = document.createElement("div");
        compare.innerText=`You choose : ${chooseNumber.value}, the machine choose : ${number}`;
        const result=document.createElement("div");
        result.innerText=`You won!`;
        compare.appendChild(result);
        document.body.appendChild(compare);
    } else {
        const compare = document.createElement("div");
        compare.innerText = `You choose : ${chooseNumber.value}, the machine choose : ${number}`;
        const result = document.createElement("div");
        result.innerText = `You lost!`;
        compare.appendChild(result);
        document.body.appendChild(compare);
    }
}
game.addEventListener("submit", gameStart);



