function setVolume() {
	document.getElementById("song").volume = 0.7;
}

function setBackground() {
	var gifCount = 27;
	var random = Math.round((gifCount - 1) * Math.random()) + 1;
	document.body.style.background = "url(\images\bg\" + random + ".gif) no-repeat center center fixed";
	document.body.style.backgroundSize = "cover";
}
