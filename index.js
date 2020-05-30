
var userPoints = 0;
var comPoints = 0;
var count = 0;

function game(userinput){
    var com = Math.floor(Math.random()*6)+1;
    count+=1
   if(count<=12){
    if(userinput==com){
        document.getElementById("res").innerHTML="OUT"
    }
    else{
        document.getElementById("res").innerHTML=""
        userPoints+=parseInt(userinput);
        comPoints +=parseInt(com);
        document.getElementById("score").innerHTML=userPoints +" - "+ comPoints
    }
   }
  else if(userPoints>comPoints){
    document.getElementById("res").innerHTML="You won the game"
  }
  else if(userPoints<comPoints){
    document.getElementById("res").innerHTML="Computer won the game"
  }
}