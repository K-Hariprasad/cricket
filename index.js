
var userPoints = 0;
var userTotal = 0;
var comPoints = 0;
var comTotal = 0;
var count = 0;
var player = "";
var wickets = 0;
// -------------------------batting-------------------------------
function bat(userinput) {
  var com = Math.floor(Math.random() * 6) + 1;
  count += 1
  if (count < 12 && wickets < 3) {
    document.getElementById("balls").innerHTML = "BALLS LEFT : " + (12 - count);
    if (userinput == com) {
      wickets += 1
      document.getElementById("player-card").innerHTML = player + " - " + userPoints + "/" + wickets
      document.getElementById("res").innerHTML = "OUT..!"
      if (wickets == 3) {
        document.getElementById("next").innerHTML = "Innings Over";
        document.getElementById("cont").hidden = false;
        count = 12;
        userTotal = userPoints;
      }
    }
    else {
      document.getElementById("res").innerHTML = " "
      userPoints += parseInt(userinput);
      document.getElementById("player-card").innerHTML = player + " - " + userPoints + "/" + wickets
    }
  }
  else if (count == 12) {
    document.getElementById("balls").innerHTML = "BALLS LEFT : " + (12 - count);
    document.getElementById("res").innerHTML = " "
    userPoints += parseInt(userinput);
    document.getElementById("player-card").innerHTML = player + " - " + userPoints + "/" + wickets
    document.getElementById("next").innerHTML = "Innings Over";
    document.getElementById("cont").hidden = false;
    userTotal = userPoints;
  }
}
// ----------------------user validation-------------------------------?
function validate(value) {
  if (value.length < 4) {
    document.getElementById("err").innerHTML = "Please enter atleast 4 characters";
    document.getElementById("btn-st").disabled = true;
  }
  else {
    player = value.toUpperCase();
    document.getElementById("err").innerHTML = "";
    document.getElementById("btn-st").disabled = false;
  }
}
// --------------------------Game page transfer------------------------------------
function start() {
  document.getElementById("start").innerHTML = ""
  document.getElementById("bat").hidden = false;
  document.getElementById("com-card").innerHTML = "COM" + " - " + comPoints
  document.getElementById("player-card").innerHTML = player + " - " + userPoints
  document.getElementById("balls").innerHTML = "BALLS LEFT : " + (12);
}
// ------------------------------2nd innings--------------------------------
function nextInnings() {
  document.getElementById("bat").hidden = true;
  document.getElementById("bowl").hidden = false;
  document.getElementById("com-card2").innerHTML = "COM" + " - " + comPoints
  document.getElementById("player-card2").innerHTML = player + " - " + userTotal
  document.getElementById("balls2").innerHTML = "BALLS LEFT : " + (12);
  wickets = 0;
  count = 0;
}
// --------------------------bowling--------------------------------
function bowl(userinput) {
  var com = Math.floor(Math.random() * 6) + 1;
  count += 1
  if (count < 12 && wickets < 3) {
    document.getElementById("com-bat").innerHTML = com
    document.getElementById("balls2").innerHTML = "BALLS LEFT : " + (12 - count);
    if (userinput == com) {
      wickets += 1
      document.getElementById("com-card2").innerHTML = "COM" + " - " + comPoints + "/" + wickets
      document.getElementById("res2").innerHTML = "OUT..!"
      if (wickets == 3) {
        comTotal = comPoints;
        document.getElementById("bowl").hidden = true;
        document.getElementById("winnerUser").hidden = false;
      }
    }
    else {
      document.getElementById("com-bat").innerHTML = com
      comPoints += com;
      document.getElementById("res2").innerHTML = " "
      userPoints += parseInt(userinput);
      document.getElementById("com-card2").innerHTML = "COM" + " - " + (comPoints) + "/" + wickets;
      if (userTotal < comPoints) {
        document.getElementById("winnerComp").hidden = false;
        document.getElementById("bowl").hidden = true;
      }
    }
  }
  else if (count == 12) {
    document.getElementById("com-bat").innerHTML = com
    comPoints += com;
    document.getElementById("balls").innerHTML = "BALLS LEFT : " + (12 - count);
    document.getElementById("res2").innerHTML = " "
    userPoints += parseInt(userinput);
    document.getElementById("com-card2").innerHTML = "COM" + " - " + (comPoints) + "/" + wickets
    userTotal = userPoints;
    if (userTotal < comPoints) {
      document.getElementById("bowl").hidden = true;
      document.getElementById("winnerComp").hidden = false;
    }
    else {
      document.getElementById("bowl").hidden = true;
      document.getElementById("winnerUser").hidden = false;

    }
  }
}