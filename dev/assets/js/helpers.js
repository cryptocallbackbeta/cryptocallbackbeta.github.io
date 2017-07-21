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

function getJSON(url){
  var Httpreq = new XMLHttpRequest();
  Httpreq.open("GET", url, false);
  Httpreq.send(null);
  return JSON.parse(Httpreq.responseText);          
}

// function isNotificationType(type) {
//   var re = /^(phone number|email|push notification)$/;
//   return re.test(type);
// }
// function isEmail(email) {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
// function isPhone(num) {
// 	var re = /^[0-9]{1,45}$/;
//   return re.test(num);
// }
// function isAsset(asset) {
// 	return assets.includes(asset)
// }
// function isMetric(metric) {
//   var re = /^(price|volume|market cap)$/;
//   return re.test(metric);
// }
// function isDirection(direction) {
//   var re = /^(above|below)$/;
//   return re.test(direction);
// }
// function isNumber(num) {
//   return !isNaN(parseFloat(num)) && isFinite(num);
// }