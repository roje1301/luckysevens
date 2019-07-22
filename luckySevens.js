
/*Name: Jeremiah Rockenbach
Date Created: Sat 7/7/19
Most recet revision: Sat 7/19/19*/


function playGame() {
	var initialBet = Number(document.forms["luckySevens"]["initialBet"].value);
	if (initialBet <= 0) {
		alert("Starting bet must be greater than zero.");
		document.forms["luckySevens"]["initialBet"].value = "";
		document.forms["luckySevens"]["initialBet"].focus();
		return false;
	}
	var winningCont = [initialBet];
	var totalRolls = 0;
	for (var totalMoney = initialBet; totalMoney >= 1; totalRolls++) {
		dieOne = Math.ceil(Math.random() * (1 + 6 - 1));		
		dieTwo = Math.ceil(Math.random() * (1 + 6 - 1));
		if (Number(dieOne + dieTwo) == 7) {
			totalMoney += 4;
			winningCont[winningCont.length] = totalMoney;
		} else {
			totalMoney -= 1;
			winningCont[winningCont.length] = totalMoney;
		}
	}

	var maxWin = 0;
	for (var totalCount = 0; totalCount < winningCont.length; totalCount++) {
		if (winningCont[totalCount] > maxWin) {
			maxWin = winningCont[totalCount];
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("startBet").innerText = ("$" + initialBet);
	document.getElementById("totalRolls").innerText = totalRolls;
	document.getElementById("highestAmount").innerText = ("$" + maxWin);
	document.getElementById("highRoll").innerText = winningCont.indexOf(maxWin);
	document.getElementById("submitButton").innerText = "Play Again";
	document.forms["luckySevens"]["initialBet"].focus();
	return false;
}