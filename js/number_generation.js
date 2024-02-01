screen.orientation.lock("landscape");
// Init
	// Amount of numbers
	var num_max = 90;
	
	// Get num_max value to calculate
	var num = num_max;
	
	// Array numbers
	var arr_num = new Array();
	for (i = 0; i < num; i++) {
		arr_num.push(i + 1);
	}	
	
	// Array numbers spinned
	var arr_num_spinned = new Array();
	for (i = 0; i < num; i++) {
		arr_num_spinned.push(0);
	}
	document.getElementById("number-spinned-list").innerHTML = Numbers_Spinned_List_Html_Generation(arr_num_spinned);
	
function Reset() {
	// Get num_max value to calculate
	num = num_max;
	
	// Re-Init array 
	arr_num = new Array();
	for (i = 0; i < num; i++) {
		arr_num[i] = i + 1;
	}
	
	arr_num_spinned = new Array();
	for (i = 0; i < num; i++) {
		arr_num_spinned.push(0);
	}
	
	// Puah blank text
	document.getElementById("number-frame").innerHTML = "";
	document.getElementById("number-spinned-list").innerHTML = Numbers_Spinned_List_Html_Generation(arr_num_spinned);
}

function Randomize() {
	// Check if amount of numbers is still available
	if(num > 0) {
		// Get a random number
		var rand = Math.floor(Math.random() * num);
		
		// Push random number to html 
		var text = "<div class=\"number\" "
		if(arr_num[rand] < 46) {
			text += "id=\"red\">";
		} else {
			text += "id=\"green\">";
		}
		text += arr_num[rand] + "</div>";
		
		document.getElementById("number-frame").innerHTML = text;	
		
		// Add rendom number to arr_num_spinned
		arr_num_spinned[arr_num[rand]-1] = arr_num[rand];
		
		// Push arr_num_spinned to html
		document.getElementById("number-spinned-list").innerHTML = Numbers_Spinned_List_Html_Generation(arr_num_spinned);
		
		// Remove random number from arr_num
		arr_num.splice(rand, 1);
		num--;
	}
	else {
		// Push a empty array message 
		document.getElementById("number-frame").innerHTML = "";
	}
}

function Numbers_Spinned_List_Html_Generation(arr) {
	var html_text = "";
	for (i = 0; i < arr.length; i++) {
		if(arr[i] == 0) {
			html_text += "<div class=\"number-empty\"><div></div></div>";
		} else {
			html_text += "<div class=\"number-spinned\" ";
			if(arr[i] < 46) {
				html_text += "id=\"red\">";
			} else {
				html_text += "id=\"green\">";
			}
			html_text += arr[i] + "</div>";
		}
	}
	return html_text;
}
