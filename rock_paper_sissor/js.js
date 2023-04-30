const botview= document.getElementById("bot_choice");
const playerview=document.getElementById("player_choice");
const resultview = document.getElementById("result");
const msg =document.getElementById("msg");

const possibleway =document.querySelectorAll("button");

possibleway.forEach(possibleway => possibleway.addEventListener('click',(e) =>{
    userchoice= e.target.id;
    playerview.innerHTML = userchoice;
    botviewgenerator();
} ))

function botviewgenerator() {
    const randomnumber= Math.floor(Math.random()*3)+1;
    // console.log(randomnumber);
    if (randomnumber === 1)
    {
        botchosen = "Rock";
    }
    if (randomnumber === 2)
    {
        botchosen = "Papper";
    }
    if (randomnumber === 3)
    {
        botchosen = "Sissor";
    }
    // console.log(botchosen);
    botview.innerHTML= botchosen;
    resultmsg();
    

}

function resultmsg() {
    if (botchosen === userchoice)
    {
        result = "Hey it's draw. Please try again";
    }
    if (botchosen === "Rock" && userchoice === "Papper")
    {
        result = "Userwin";
    }
    if (botchosen === "Rock" && userchoice === "Sissor")
    {
        result = "Bot Win";
    }
    if (botchosen === "Papper" && userchoice === "Rock")
    {
        result = "Bot Win";
    }
    if (botchosen === "Papper" && userchoice === "Sissor")
    {
        result = "User win";
    }
    if (botchosen === "Sissor" && userchoice === "Rock")
    {
        result = "User win";
    }
    if (botchosen === "Sissor" && userchoice === "Papper")
    {
        result = "Bot win";
    }
    msg.innerHTML= result;
}