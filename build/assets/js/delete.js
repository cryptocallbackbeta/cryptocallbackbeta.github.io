var urlParams = new URLSearchParams(window.location.search);

function deleteAlert() {
	var url = "http://45.79.96.75:3000/delete/" + urlParams.get('id');
	method = "delete"; 
	var xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xhr.onload = function() {
		if (xhr.status >= 200 && xhr.status < 400) {
			var response = JSON.parse(xhr.responseText);
			if (response['message']) {
				// console.log(response);
				newToast("<em><strong>Success!</strong> Alert Deleted</em>", "success");
			}
			if (response['error']) { 
				// if invalid Alert: {"error":"An error has occurred"}
				if (response['error'] == "An error has occurred") {
					// console.log("An error has occurred");
					newToast("<em><strong>Error!</strong> Alert Invalid</em>", "fail");
				};
				// if already deleted: {"error":"account does not exist or has been already deleted"}
				if (response['error'] == "Account does not exist or has been already deleted") {
					newToast("<em><strong>Error!</strong> Alert Already Deleted</em>", "fail");
					// console.log("Account does not exist or has been already deleted");
				};
			};
		} else if (xhr.status == 404) {
			newToast("<em><strong>Error!</strong> Server Unavailable</em>", "fail");
		} else {
			newToast("<em><strong>Error!</strong> Something Went Wrong</em>", "fail");
		};
	};
	xhr.onerror = function() {
		newToast("<em><strong>Error!</strong> Delete Failed</em>", "fail");
	};
	xhr.send();
};
