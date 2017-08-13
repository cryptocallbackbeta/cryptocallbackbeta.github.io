// emails = {}
// numbers = {}
// settings = {theme,currency,id}
// portfolio = {asset, price average, {price: [{amount, price}]} }
// wallets = [{asset, address}]
// alertInfo = {type, email, metric, asset, direction, currency}

// email = ""





function saveItem(item, key, value) {
	var arrayKeys = ["emails","numbers","settings", "portfolio", "wallets", "alertInfo"]
	if (arrayKeys.includes(item)) {


	} else {
		localStorage.setItem(key, value)
	}
}

function getItem(item, key, value) {
	ar arrayKeys = ["email","phone number","settings"]
	if (arrayKeys.includes(item)) {

	} else {
		localStorage.getItem(key)
	}
}