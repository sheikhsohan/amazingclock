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
	document.querySelector('.floating-btn').style.color = borderColor;
  }
  
  setInterval(updateClock, 1000);


  const floatingText = document.querySelector(".floating-text");
  floatingText.addEventListener("click", showLoveEmoji);
  
  function showLoveEmoji() {
	const loveEmoji = document.createElement("img");
	loveEmoji.classList.add("love-emoji");
	loveEmoji.src = "img/animate.gif";
	document.body.appendChild(loveEmoji);
  
	floatingText.style.display = "none";
	loveEmoji.style.display = "block";
	setTimeout(() => {
	  loveEmoji.style.display = "none";
	  floatingText.style.display = "block";
	  showModal();
	}, 3000);
  }
  
  
  
  function showModal() {

	const modal = document.getElementById("modal");
	const modalContent = document.querySelector(".modal-content");
	const modalImg = document.querySelector(".modal-content img");
	const modalText = document.querySelector(".modal-content p");
	const modalClose = document.querySelector(".close");
  

	modalImg.src = "img/developer.jpg";
	modalText.textContent = "This is Sohan. He created this dynamic clock color page.";
  

	modal.style.display = "block";
  

	modal.addEventListener("click", function(event) {
	  if (event.target === modalClose || event.target === modal) {
		modal.style.display = "none";
	  }
	});
  }

  //

  const sohanSpan = document.getElementById("sohan");
const floatingBtn = document.querySelector(".floating-btn");

sohanSpan.addEventListener("click", function() {
  floatingBtn.click();
});

const modal = document.getElementById("myModal");
const cancelBtn = document.getElementById("cancelBtn");
const proceedBtn = document.getElementById("proceedBtn");

function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

function openMySite() {
  if (isMobile()) {
    modal.style.display = "block";

    cancelBtn.onclick = function() {
      modal.style.display = "none";
    }

    proceedBtn.onclick = function() {
      window.open("https://sheikhsohan.vercel.app/","_blank");
      modal.style.display = "none";
    }
  } else {
    window.open("https://sheikhsohan.vercel.app/","_blank");
  }
}


  
  
  function openMyFbSite() {
	window.open("https://www.facebook.com/s.s0han","_blank");
  }
