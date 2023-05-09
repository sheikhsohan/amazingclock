function updateClock() {
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let amOrPm = hours >= 12 ? "PM" : "AM";
	
	hours = hours % 12;
	hours = hours ? hours : 12;
  
	if (hours < 10) {
	  hours = "0" + hours;
	}
  
	if (minutes < 10) {
	  minutes = "0" + minutes;
	}
  
	if (seconds < 10) {
	  seconds = "0" + seconds;
	}
  
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
	document.getElementById("am-pm").innerHTML = amOrPm;
  
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
	let borderColor = '#' + randomColor;
	document.querySelector('.clock').style.color = borderColor;
	document.querySelector('.clock').style.borderColor = borderColor;
	document.querySelector('.changecolor').style.color = borderColor;
  }
  
  setInterval(updateClock, 1000);
  