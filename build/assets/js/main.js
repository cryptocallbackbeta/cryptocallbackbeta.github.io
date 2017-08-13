function log(message, status) {
	// status options: start(green), wait(orange), success(green)
	if (status == "start") {
		console.log("%c " + message, 'background: #fff; color: #269920');
	} else if (status == "wait") {
		console.log("%c " + message, 'background: #fff; color: #FF9900');
	} else if (status == "success") {
		console.log("%c " + message, 'background: #fff; color: #269920');
	} else if (status == "error") {
		console.log("%c " + message, 'background: #fff; color: #db0202');
	} else if ( !status ) {
		console.log("%c " + message, 'background: #fff; color: #000');
	}
};

document.querySelector(".nav-toggle").addEventListener('click', function () {
		// log("Menu Toggling Initiated", "start");
	this.classList.toggle('is-active');
	document.querySelector(".nav-menu").classList.toggle("is-active");
		// log("Menu Toggle Complete", "success");
});

// newToast("<em><strong>Good to Go!</strong> Javascript Working</em>", "success");

// var theme = localStorage.getItem("theme") || "light";
// document.querySelector("#settings").addEventListener('click', function () {
// 	log("Changing theme, currently " + theme, "wait");
// 	document.querySelector("body").classList.toggle("light");
// });

// function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
// r(function(){

// });
