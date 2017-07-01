document.querySelector(".nav-toggle").addEventListener('click', function () {
		console.log("Menu Toggling Initiated");
  this.classList.toggle('is-active');
  document.querySelector(".nav-menu").classList.toggle("is-active");
	  console.log("Menu Toggle Complete");
});


var form = document.getElementById("alertForm");
var submitButton = document.getElementById("alert-submit");
submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  createAlert();
});


function createAlert() {
		log("Form Submission Initiated", "start");
		log("\t- Form Data: \n" + form, "wait");
  var data = toJSONString(form);
	// validateForm(data)
  var url = "45.79.96.75:3000";
  // var url = "#";
  // send(url, data, "post");
	  log("Form Successfully Sent", "finished");
}


// Puts data into JSON object
function toJSONString( data ) {
		log("\t- Converting Form Data To Object", "wait");
	var obj = {};
	var elements = data.querySelectorAll( "input, select, textarea" );
		log("\t- Object:\n", "wait")
	var notification_type
	for( var i = 0; i < elements.length; ++i ) {
		var element = elements[i];
		var key = element.name.toLowerCase();
		var value = element.value.toLowerCase();
		if( key ) {
			if (key === "notification_type") { notification_type = value; }
			if (key === "text message" || key === "push message") {
				key = key.replace(" ", "").replace("-", "").replace("(", "").replace(")", "")
			}
			obj[ key ] = value;
				log("\t\t- " + key + ": " + value, "wait");
			if ( validate(key, value, notification_type) ) { 
				log("\t\t\t- Validated - " + key + ": " + value, "wait");
			} else if ( !validate(key, value) ) {
				log("\t\t\t- Form Validation Failed On - " + key + ": " + value, "error");
				return
			}
		}
	}
		log("\t- Form Data Converted To Object", "wait");
		log("\t- Form Data Object: \n" + obj, "wait");
	return JSON.stringify( obj );
}



function isNotificationType(type) {
  var re = /^(phone number|email|push notification)$/;
  return re.test(type);
}
function isEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function isPhone(num) {
	var re = /^[0-9]{1,45}$/;
  return re.test.(num);
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
function isNumber(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function validate(key, value, type) {
	var valid
	var notification_type = type
	switch ( key )
	{
		case "notification_type":
			if ( isNotificationType(value) ) { valid = true }
			break;
		case "contact":
			if (type === "push notification" || type === "text message") {
				if ( isPhone(value) ) { valid = true }
			} else if (type === "email") {
				if ( isEmail(value) ) { valid = true }
			}
			break;
		case "metric":
			if ( isMetric(value) ) { valid = true }
			break;
		case "asset":
			if ( isAsset(value) ) { valid = true }
			break;
		case "direction":
			if ( isDirection(value) ) {  valid = true }
			break;
		case "amount":
			if ( isNumber(value) ) { valid = true }
			break;

		default: 
			valid = false
	}
	return valid
}



// Sends json through post
function send(path, data, method) {
		log("- Preparing POST Data To Send", "wait");
  method = method || "post"; // Set method to post by default, if not specified.
  var xhr = new XMLHttpRequest();
	xhr.open(method, path, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
		log("- Sending POST Data", "wait");
	// xhr.onload = function() {
	//   if (xhr.status === 200) {
	// 		var data = JSON.parse(xhr.responseText);
	//   }
	// };
	xhr.send(data);
		log("- POST Data Complete", "wait");
}












