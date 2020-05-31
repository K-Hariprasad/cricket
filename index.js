
var userPoints = 0;
var comPoints = 0;
var count = 0;
var player = "";

function bat(userinput){
    var com = Math.floor(Math.random()*6)+1;
    count+=1
   if(count<=12){
    if(userinput==com){
        document.getElementById("res").innerHTML="OUT"
    }
    else{
        document.getElementById("res").innerHTML=" "
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

function validate(value){
  console.log(value)
    if (value.length<4){
      document.getElementById("err").innerHTML="Please enter atleast 4 characters";
      document.getElementById("btn-st").disabled=true;
    }
    else{
      player = value;
      document.getElementById("err").innerHTML="";
      document.getElementById("btn-st").disabled=false;
    }
}

function start(){
  document.getElementById("start").innerHTML=""
  document.getElementById("bat").hidden=false;
}