function confirmation() {
	var answer = confirm("Proceed to checkout?")
	if (answer){
		window.location = "book3.html";
	}
	else{
		alert("Take your time.")
	}
}