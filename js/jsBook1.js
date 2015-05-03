function validateSignup(){

	var ln = form.lastname.value;  
	var fn = form.firstname.value;
	var e = form.email.value;
	var p1 = form.passw.value; 
	var p2 = form.confirmpassw.value;
	var atEmail = e.indexOf("@");  
	var dotEmail = e.lastIndexOf("."); 
	//document.signup
	
	//VALIDATE NAME AND PASSWORD
	if ((ln == null && fn == null) || (ln == "" && fn == " ")){  
		alert("Name can't be blank.");  
		return false;  
	} else if ((p1.length < 5) && (p2.length < 5)){  
		alert("Password must be at least 5 characters long.");  
		return false;  
	} else {
		alert("Welcome, " + fn + " !\n" + "Thank you for choosing Rent a Ride.");
		open("../html/book2.html");
		return true;
	}
	
	//EMAIL
	if (e == null || e == " "){  
		alert("Email can't be blank.");  
		return false;  
	} else if (atEmail < 1 || dotEmail < atEmail+2 || dotEmail+2 >= e.length){  
		alert("Please enter a valid e-mail address.");  
		return false;  
	} else {
		alert("Welcome, " + fn + " !\n" + "Thank you for choosing Rent a Ride.");
		open("../html/book2.html");
		return true;
	}
	
	//PASSWORD CONFIRMATION
	if (p1 != p2 ) {  
		alert("Password must be the same!");  
		return false;  
	} else {
		alert("Welcome, " + fn + " !\n" + "Thank you for choosing Rent a Ride.");
		open("../html/book2.html");
		return true;
	}
}

function validateLogin(){ 
	var e = document.login.email.value;
	var p = document.login.passw.value;
	var atEmail = e.indexOf("@");  
	var dotEmail = e.lastIndexOf("."); 
	
	//EMAIL
	if (e == null || e == " "){  
		alert("Email can't be blank.");  
		return false;  
	} else if (atEmail < 1 || dotEmail < atEmail+2 || dotEmail+2 >= e.length){  
		alert("Please enter a valid e-mail address.");  
		return false;  
	} else {
		alert("Welcome back! You can now start a new transaction.");
		open("../html/book2.html");
		return true;
	}
	
	//PASSWORD
	if (p == null || p == " ") {  
		alert("Password can't be blank.");  
		return false;  
	} else if (p1.length < 5){  
		alert("Password must be at least 5 characters long.");  
		return false;
	else {
		alert("Welcome back! You can now start a new transaction.");
		open("../html/book2.html");
		return true;
	}
}