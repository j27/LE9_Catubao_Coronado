function correct() {
	var answer = confirm("Is this correct?")
	if (answer) {
		alert("You will be automatically signed out.")
		window.location = "book4.html";
	}
	else {
		return false;
	}
}