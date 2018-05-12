let min = 0;
document.getElementById('stop').setAttribute("style", "display: none;");
//alert(sec);
document.getElementById('start').addEventListener('click', () => {
	let sec = parseFloat(document.getElementById('sec').textContent);
	document.getElementById('start').setAttribute("style", "display: none;");
	document.getElementById('stop').setAttribute("style", "display: default;");
	let startTime = Date.now();
	let stopwatch = setInterval( () => {
		let elapsedTime = Date.now() - startTime;
		let seconds = (sec + (elapsedTime / 1000)).toFixed(3);
		if (Math.floor(seconds) > 59) {
			startTime = Date.now();
			sec = 0;
			min++;
		}
		if (seconds < 10) {
			document.getElementById('sec').innerHTML = "0" + seconds;
		} else {
			document.getElementById('sec').innerHTML = seconds;
		}
		if (min < 10) {
			document.getElementById('min').innerHTML = "0" + min + ":";
		} else {
			document.getElementById('min').innerHTML = min + ":";
		}
	}, 1);
	document.getElementById('mil').setAttribute("style", "display: none;");

	document.getElementById('stop').addEventListener('click', () => {
		//clearInterval(minutes);
		//clearInterval(seconds);
		//clearInterval(milSec);
		clearInterval(stopwatch);
		document.getElementById('stop').setAttribute("style", "display: none;");
		document.getElementById('start').setAttribute("style", "display: default;");
	});

	document.getElementById('reset').addEventListener('click', () => {
		//clearInterval(minutes);
		//clearInterval(seconds);
		//clearInterval(milSec);
		clearInterval(stopwatch);
		min = 0;
		sec = 0;
		document.getElementById('mil').setAttribute("style", "display: default;");
		document.getElementById('sec').innerHTML = "00."; document.getElementById('min').innerHTML = "00:";
		document.getElementById('mil').innerHTML = "000";
	});
});
