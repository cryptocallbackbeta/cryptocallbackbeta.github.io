var form = document.getElementById("alertForm");
var submitButton = document.getElementById("alertSubmit");
submitButton.addEventListener("click", function(e) {
	e.preventDefault();
	if (errCheck()) {
		createAlert();
		saveAlertInfo();
	};
});
function createAlert() {
		// log("Form Submission Initiated", "start");
		// log("\t- Form Data: \n" + form, "wait");
	var data = toJSON(form);
	var alertValid = data[0];
	var alertData = data[1];
	var url = "http://45.79.96.75:3000/alerts";
	// var url = "http://api.cryptocallback.com:3000/alerts";
	if (alertValid) {
		send(url, alertData, "post");
			// log("Form Successfully Sent", "success");
		document.getElementById('amount').value = "";
	}
};
function toJSON( data ) {
		// log("\t- Converting Form Data To Object", "wait");
	var obj = {};
	var elements = data.querySelectorAll( "input, select, textarea" );
		// log("\t- Object:\n", "wait");
	var type;
	var valid = true;
	for ( var i = 0; i < elements.length-1; ++i ) {
		if (valid) {
			valid = false;
			var element = elements[i];
			var key = element.name.toLowerCase();
			var value = element.value;
			if( key ) {
				// log("\t\t- " + key + ": " + value, "wait");
				// Check Notification Type
				if (key === "notification_type") {
					value = value.toLowerCase();
					type = value; 
					if ( isNotificationType(value) ) { valid = true }
				// Check Contact Email/Number
				} else if (key === "contact") {
					value = value.toLowerCase();
					if (type === "push notification" || type === "text message") {
						value = value.replace(/[^\w]/gi, '');
						if ( isPhone(value) ) {
							key = "phone";
							valid = true; };
					} else if (type === "email") {
						if ( isEmail(value) ) { 
							key = "email";
							valid = true;
						};
					};
				// Check Asset Entry
				} else if (key === "asset") {
					if ( isAsset(value) ) {
						valid = true;
					};
				// Check Metric Type
				} else if (key === "metric") {
					value = value.toLowerCase();
					if ( isMetric(value) ) { valid = true; };
				// Check Direction Value
				} else if (key === "direction") {
					value = value.toLowerCase();
					if ( isDirection(value) ) { valid = true; };
				// Check Curreny Type
				} else if (key === "currency") {
					value = value.toLowerCase().replace(/[^A-Z]/gi, '');
					if ( isCurrency(value) ) { valid = true; };
				// Check Amount Entered
				} else if (key === "amount") {
					value = value.toLowerCase();
					value = Number( value.replace(/[^0-9\.]+/g,""));
					if ( isNumber(value) ) {
						value = value.toString();
						valid = true; };
				// Form Key Doesn't Match
				} else {
						// log("\t\t\t- Form Validation Failed On - " + key + ": " + value, "error");
					valid = false;
					return;
				};
				obj[ key ] = value;
				if ( valid ) { 
					// log("\t\t\t- Validated - " + key + ": " + value, "wait");
				} else if ( !valid ) {
					// log("\t\t\t- Form Validation Failed On - " + key + ": " + value, "error");
					newToast("<em><strong>Error!</strong> Submission Failed</em>", "fail");
					return;
				};
			};
		};
	};
		// log("\t- Form Data Converted To Object", "wait");
		// log("\t- Form Data Object: \n" + JSON.stringify(obj), "wait");
	return [valid, param( obj )];
}

function param(object) {
    var encodedString = '';
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (encodedString.length > 0) {
                encodedString += '&';
            };
            encodedString += encodeURI(prop + '=' + object[prop]);
        };
    };
    return encodedString;
}



// Sends json through post
function send(path, data, method) {
		// log("- Preparing POST Data To Send", "wait");
	// Set method to post by default, if not specified.
	method = method || "post"; 
	var xhr = new XMLHttpRequest();
	xhr.open(method, path, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		// log("- Sending POST Data", "wait");
	xhr.onload = function() {
		if (xhr.status === 200) {
			newToast("<em><strong>Success!</strong> Alert Submitted</em>", "success");
		}
	};
	xhr.onerror = function() {
		newToast("<em><strong>Error!</strong> Submission Failed</em>", "fail");
	};
	xhr.send(data);
		// log("- POST Data Complete", "wait");
};





function isNotificationType(type) {
	var re = /^(text message|email|push notification)$/;
	return re.test(type);
};
function isEmail(email) {
	var re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return re.test(email);
};
function isPhone(num) {
	var re = /^[0-9]{10,12}$/;
	return re.test(num);
};
function isAsset(asset) {
	return assets.includes(asset)
};
function isMetric(metric) {
	var re = /^(price|volume|market cap)$/;
	return re.test(metric);
};
function isDirection(direction) {
	var re = /^(above|below)$/;
	return re.test(direction);
};
function isCurrency(currency) {
	var currencies = ["aud","brl","cad","chf","cny","eur","gbp","hkd","idr","inr","jpy","krw","mxn","rub","usd"];
	return currencies.includes(currency);
};
function isNumber(num) {
		// console.log("isnumber: " + errMessage);
	return !isNaN(parseFloat(num)) && isFinite(num) && !0;
	// return true;
};




var errMessage = {
	"contact": "Please enter an email address\n",
	"amount": "Please enter a valid amount(only numbers and 1 decimal)\n"
};
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
		typeProper1.innerHTML =  "";
		typeProper2.innerHTML =  "";
		contactPlaceholder.placeholder = "Phone Number";
		contactTip.setAttribute("data-tip", "Only enter numbers: XXXXXXXXXX");
		contactTip.setAttribute("type", "tel");
	};
};
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
			};
		};
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
			};
		};
	};
};
function metricCheck() {
	cmc();
	// var value2 = document.getElementById("metric").value;
	var value = document.getElementById("metric").value.toLowerCase();
	var metricVal = document.getElementById("metricVal");
	// var metricVal2 = document.getElementById("metricVal2");
	metricVal.innerHTML = value;
	// metricVal2.innerHTML = value;
};
function assetCheck() {
	cmc();
	var value = document.getElementById("asset").value;
	var assetVal = document.getElementById("assetVal");
	// var assetVal2 = document.getElementById("assetVal2");
	assetVal.innerHTML = value;
	// assetVal2.innerHTML = value;
};
function directionCheck() {
	var value = document.getElementById("direction").value.toLowerCase();
	var directionVal = document.getElementById("directionVal");
	directionVal.innerHTML = value;
};
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
	};
};
function currencyCheck() {
	cmc();
	var value = document.getElementById("currency").value;
	var currencyVal = document.getElementById("currencyVal");
	// var currencyVal2 = document.getElementById("currencyVal2");
	value = value.toLowerCase().charAt(0);
	currencyVal.innerHTML = value;
	// currencyVal2.innerHTML = value;
};
function errCheck() {
	message = document.getElementById("formErrorMessage");
	message = document.getElementById("formErrorMessage");
	if (errMessage["contact"] == "" && errMessage["amount"] == "") {
		message.innerHTML = "";
		return true;
	} else {
		message.innerHTML = errMessage["contact"] + "<br>" + errMessage["amount"];
		return false;
	};
};


function saveAlertInfo() {
	var type = document.getElementById("type").value;
	var contact = document.getElementById("contact").value;
	var metric = document.getElementById("metric").value;
	var asset = document.getElementById("asset").value;
	var direction = document.getElementById("direction").value;
	var currency = document.getElementById("currency").value;
	var alertInfo = [type, contact, metric, asset, direction, currency];
	localStorage.setItem("alertInfo", JSON.stringify(alertInfo));
}

function getAlertInfo() {
	var alertInfo = JSON.parse(localStorage.getItem("alertInfo"));
	document.getElementById("type").value = alertInfo[0];
	document.getElementById("contact").value = alertInfo[1];
	document.getElementById("metric").value = alertInfo[2];
	document.getElementById("asset").value = alertInfo[3];
	document.getElementById("direction").value = alertInfo[4];
	document.getElementById("currency").value = alertInfo[5];
}
// onchange
// onkeyup
// oninput


function cmc() {
	var assetName = document.getElementById('asset').value;
	var assetMetric = document.getElementById('metric').value;
	var currency = document.getElementById("currency").value;
	var assetID = assetTuples[assetName];
	// console.log("assetName: " + assetName + "\nassetID: " + assetID + "\nassetMetric: " + assetMetric);
	var request = new XMLHttpRequest();
	var url = 'https://api.coinmarketcap.com/v1/ticker/' + assetID + '/';
	request.open('GET', url , true);
	request.onload = function() {
		var status = request.status;
		var response = JSON.parse(request.responseText);
		updateValue(status, response, assetName, assetMetric, currency);
	};
	request.send();
}
cmc();


function updateValue(status, response, assetName, assetMetric, currency) {
	var assetData;
	currency = currency.toLowerCase().charAt(0);
  if (status >= 200 && status < 400) {
		if (assetMetric == "Price") {
			assetData = formatThousands(response[0]['price_usd']);
		} else if (assetMetric == "Volume") {
			assetData = formatThousands(response[0]['24h_volume_usd']);
		} else if (assetMetric == "Market Cap"){
			assetData = formatThousands(response[0]['market_cap_usd']);
		} else {
			assetData = "%Error%";
		};
  } else {
    newToast("<em><strong>Error!</strong> Database Unavailable</em>", "fail");
	  assetData = "Error";
  };
  var message = assetName + " " + assetMetric + ": " + currency + assetData;
  document.getElementById('currentValues').innerHTML = message;
}

function formatThousands(n, dp) {
  var s = ''+(Math.floor(n)), d = n % 1, i = s.length, r = '';
  while ( (i -= 3) > 0 ) { r = ',' + s.substr(i, 3) + r; }
  if (s.length > 3){d = 0}
	else if (s.length > 1) {dp = 2}
  else if (s.length < 2) {dp=4}
  else {dp=2}
  return s.substr(0, i + 3) + r + (d ? '.' + Math.round(d * Math.pow(10,dp)) : '');
}