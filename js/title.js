var i = 0;
var titleText = [
	"lo$e", "lo$", "lo", "l", "lo", "lo",
	"lo$", "lo$", "lo$e", "lo$er"
];

if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		loaded();
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		loaded();
	});
}

function loaded() {
	setInterval(loop, 300);
}

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[i++ % titleText.length];
}
