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
}



function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
  if (theme) {
  	if (theme == "light") {
  		enableLightTheme()
  	} else if (theme == "dark") {
  		enableDarkTheme()
  	}
  } else {
  	theme = "light"
  	localStorage.setItem("theme", theme)
  }
});

var theme = localStorage.getItem("theme") || "light"
var fileref = document.createElement("link");
fileref.id = "dark"
fileref.rel = "stylesheet";
fileref.type = "text/css";
fileref.href = "assets/css/dark.css";

document.querySelector("#settings").addEventListener('click', function () {
		log("Changing theme, currently " + theme, "wait")
	if (theme == "light") {
		enableDarkTheme()
	} else if (theme == "dark") {
		enableLightTheme()
	}
	localStorage.setItem("theme", theme)
});
function enableDarkTheme() {
		log("Enabling dark theme", "wait")
	theme = "dark"
	document.getElementsByTagName("head")[0].appendChild(fileref)
}
function enableLightTheme() {
		log("Enabling light theme", "wait")
	theme = "light"
	var elem = document.getElementById("dark");
  return elem.parentNode.removeChild(elem);
}



document.querySelector(".nav-toggle").addEventListener('click', function () {
		// log("Menu Toggling Initiated", "start");
	this.classList.toggle('is-active');
	document.querySelector(".nav-menu").classList.toggle("is-active");
		log("Menu Toggle Complete", "success");
});



var form = document.getElementById("alertForm");
var submitButton = document.getElementById("alert-submit");
submitButton.addEventListener("click", function(e) {
	e.preventDefault();
	if (errCheck()) {
		createAlert();
	}
});
function createAlert() {
		log("Form Submission Initiated", "start");
		log("\t- Form Data: \n" + form, "wait");
	var data = toJSON(form);
	var url = "http://45.79.96.75:3000/alerts";
	send(url, data, "post");
		log("Form Successfully Sent", "success");
}
function toJSON( data ) {
		log("\t- Converting Form Data To Object", "wait");
	var obj = {};
	var elements = data.querySelectorAll( "input, select, textarea" );
		log("\t- Object:\n", "wait")
	var type
	for ( var i = 0; i < elements.length; ++i ) {
		var element = elements[i];
		var valid = false;
		var key = element.name.toLowerCase();
		var value = element.value.toLowerCase();
		if( key ) {
				log("\t\t- " + key + ": " + value, "wait");
			if (key === "notification_type") {
				type = value; 
				if ( isNotificationType(value) ) { valid = true }
			} else if (key === "contact") {
				if (type === "push notification" || type === "text message") {
					value = value.replace(/[^\w]/gi, '')
					if ( isPhone(value) ) {
						key = "phone"
						valid = true }
				} else if (type === "email") {
					if ( isEmail(value) ) { 
						key = "email"
						valid = true 
					} 
				}
			} else if (key === "asset") {
				if ( isAsset(value) ) { 
					value = value.toUpperCase();
					valid = true 
				}
			} else if (key === "metric") {
				if ( isMetric(value) ) { valid = true }
			} else if (key === "direction") {
				if ( isDirection(value) ) { valid = true }
			} else if (key === "currency") {
				value = value.toLowerCase().replace(/[^A-Z]/gi, '');
				if ( isCurrency(value) ) {
					valid = true }
			} else if (key === "amount") {
				value = Number( value.replace(/[^0-9\.]+/g,""));
				if ( isNumber(value) ) {
					value = value.toString()
					valid = true }
			} else {
					log("\t\t\t- Form Validation Failed On - " + key + ": " + value, "error");
				return
			}
			obj[ key ] = value;
			if ( valid ) { 
				log("\t\t\t- Validated - " + key + ": " + value, "wait");
			} else if ( !valid ) {
				log("\t\t\t- Form Validation Failed On - " + key + ": " + value, "error");
				return
			}
		}
	}
		log("\t- Form Data Converted To Object", "wait");
		log("\t- Form Data Object: \n" + JSON.stringify(obj), "wait");
	return param( obj );
}

function param(object) {
    var encodedString = '';
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (encodedString.length > 0) {
                encodedString += '&';
            }
            encodedString += encodeURI(prop + '=' + object[prop]);
        }
    }
    return encodedString;
}



// Sends json through post
function send(path, data, method) {
		log("- Preparing POST Data To Send", "wait");
	method = method || "post"; // Set method to post by default, if not specified.
	var xhr = new XMLHttpRequest();
	xhr.open(method, path, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		log("- Sending POST Data", "wait");
	xhr.onload = function() {
		if (xhr.status === 200) {
			// alert("Sent")
		}
	};
	xhr.onerror = function() {
		// showMessage("")
	};
	xhr.send(data);
		log("- POST Data Complete", "wait");
}

// <div class="notification is-danger">
//   <button class="delete"></button>
//   Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
// </div>




function isNotificationType(type) {
	var re = /^(text message|email|push notification)$/;
	return re.test(type);
}
function isEmail(email) {
	var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return re.test(email);
}
function isPhone(num) {
	var re = /^[0-9]{10,12}$/;
	return re.test(num);
}
function isAsset(asset) {
	return assets.includes(asset)
}
function isMetric(metric) {
	var re = /^(price|volume|market cap)$/;
	return re.test(metric);
}
function isDirection(direction) {
	var re = /^(above|below)$/;
	return re.test(direction);
}
function isCurrency(currency) {
	var currencies = ["aud","brl","cad","chf","cny","eur","gbp","hkd","idr","inr","jpy","krw","mxn","rub","usd"]
	return currencies.includes(currency)
}
function isNumber(num) {
		// console.log("isnumber: " + errMessage)
	return !isNaN(parseFloat(num)) && isFinite(num) && !0;
	// return true
}




var errMessage = {
	"contact": "Please enter an email address\n",
	"amount": "Please enter a valid amount(only numbers and 1 decimal)\n"
}
function typeCheck() {
	var value = document.getElementById("type").value.toLowerCase();
	var typeProper1 = document.getElementById("typeProper1");
	var typeProper2 = document.getElementById("typeProper2");
	var typeVal = document.getElementById("typeVal");
	var contactPlaceholder = document.getElementById("contact");
	var contactTip = document.getElementById("contactTip");
	contactCheck();
	typeVal.innerHTML = value;
	if (value == "email") { 
		typeProper1.innerHTML =  "n";
		typeProper2.innerHTML =  "n";
		contactPlaceholder.placeholder = "Email Address";
		contactTip.setAttribute("data-tip", "Enter your email address");
		contactTip.setAttribute("type", "email");
	} else { 
		typeProper1.innerHTML =  ""
		typeProper2.innerHTML =  ""
		contactPlaceholder.placeholder = "Phone Number";
		contactTip.setAttribute("data-tip", "Only enter numbers: XXXXXXXXXX");
		contactTip.setAttribute("type", "tel");
	}
}
function contactCheck() {
	var contact = document.getElementById("contact");
	var value = contact.value.toLowerCase();
	var contactVal = document.getElementById("contactVal");
	var type = document.getElementById("type").value.toLowerCase();
	if (type == "email") {
		if (value == "") {
			contactVal.innerHTML = "(enter email address)";
			errMessage["contact"] = "Please enter an email address\n";
		} else {
			contactVal.innerHTML = value;
			if ( isEmail(value) ) { 
				contact.style.borderColor = "#dbdbdb";
				errMessage["contact"] = "";
			} else {
				contact.style.borderColor = "red";
				errMessage["contact"] = "Please enter a valid email address\n";
			}
		}
	} else {
		if (value == "") {
			contactVal.innerHTML = "(enter phone number)";
			errMessage["contact"] = "Please enter a phone number\n";
		} else {
			value = value.replace(/[^\w\s]/gi, '');
			contactVal.innerHTML = value;
			if ( isPhone(value) ) { 
				contact.style.borderColor = "#dbdbdb";
				errMessage["contact"] = "";
			} else {
				contact.style.borderColor = "red";
				errMessage["contact"] = "Please enter a valid phone number(only numbers)\n";
			}
		}
	}
}
function metricCheck() {
	var value = document.getElementById("metric").value.toLowerCase();
	var metricVal = document.getElementById("metricVal");
	metricVal.innerHTML = value;
}
function assetCheck() {
	var value = document.getElementById("asset").value;
	var assetVal = document.getElementById("assetVal");
	assetVal.innerHTML = value;
}
function directionCheck() {
	var value = document.getElementById("direction").value.toLowerCase();
	var directionVal = document.getElementById("directionVal");
	directionVal.innerHTML = value;
}
function amountCheck() {
	var amount = document.getElementById("amount");
	var value = document.getElementById("amount").value.toLowerCase();
	var amountVal = document.getElementById("amountVal");
	value = Number( value.replace(/[^0-9\.]+/g,""));
	amountVal.innerHTML = value;
	if ( isNumber(value) ) {
		amount.style.borderColor = "#dbdbdb";
		errMessage["amount"] = "";
	} else {
		amount.style.borderColor = "red";
		errMessage["contact"] = "Please enter a valid amount(only numbers and 1 decimal)\n";
	}
}
function currencyCheck() {
	var value = document.getElementById("currency").value;
	var currencyVal = document.getElementById("currencyVal");
	value = value.toLowerCase().charAt(0);
	currencyVal.innerHTML = value;
}
function errCheck() {
	message = document.getElementById("message")
	message = document.getElementById("message")
	if (errMessage["contact"] == "" && errMessage["amount"] == "") {
		message.innerHTML = "";
		return true
	} else {
		message.innerHTML = errMessage["contact"] + "<br>" + errMessage["amount"];
		return false
	}
}










