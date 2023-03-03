//<script type="text/javaScript">
function validate(){
  //regex: letters
  var firstName = document.getElementById("firstName").value;
  var firstNameRegex = new RegExp("^[a-zA-Z]+$");

  var lastName = document.getElementById("lastName").value;
  var lastNameRegex = new RegExp("^[a-zA-Z]+$");

	//regex: max 10 characters, at least 1 uppercase, 1 special character, 1 numeric
	var password = document.getElementById("passwd").value;
	//var passwordRegex = new RegExp("(?=.*[0-9])(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[*.!@$%^&\(\)\{\}\[\]:;<>,.?\/~_+-=|\\]).{0,10}$");
	var passwordRegex = new RegExp("(?=.*[A-Z])(?![a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{1,14}$)");
	//regex: 8 digit number
	var id = document.getElementById("idNumber").value;
	var idRegex = new RegExp("^[0-9]{6}$");

  //regex: 10 digits which can be delineated either by spaces or dashes
  var phone = document.getElementById("phoneNumber").value;
  var phoneRegex = new RegExp("^[0-9]{3}[- ]{1}[0-9]{3}[- ]{1}[0-9]{4}$");

  //must contain an @ followed by a period and an email domain that consists of 2 to 5 characters.
  //(?=.*[A-Za-z])[@][A-Za-z]{2,5}[.](?=.*[A-Za-z])
  var emailAddress = document.getElementById("emailAddress").value;
  var emailRegex = new RegExp("[@][A-Za-z]{2,5}[.]");

	if (firstName == ""){
	 alert("Invalid First Name: Is empty");
	 document.getElementById("firstName").focus();
 }
 else if (!firstNameRegex.test(firstName)){
	 alert("Invalid First Name: Invalid format, use characters only")
	 document.getElementById("firstName").focus();
 }
 else if (lastName == ""){
	 alert("Invalid Last Name: Is empty");
	 document.getElementById("lastName").focus();
 }
 else if (!lastNameRegex.test(lastName)){
	 alert("Invalid Last Name: Invalid format, use characters only")
	 document.getElementById("lastName").focus();
 }
 else if (password == ""){
	 alert("Invalid Password: Is empty");
	 document.getElementById("passwd").focus();
 }
 else if (!passwordRegex.test(password)){
	 alert("Invalid Password");
	 document.getElementById("passwd").focus();
 }
 else if (id == ""){
	 alert("Invalid id: Is empty");
	 document.getElementById("idNumber").focus();
 }
 else if (!idRegex.test(id)){
	 alert("Invalid id: ");
	 document.getElementById("idNumber").focus();
 }
 else if (phone == ""){
	 alert("Invalid Phone Number: Is empty");
	 document.getElementById("phoneNumber").focus();
 }
 else if (!phoneRegex.test(phone)){
   alert("Invalid Phone Number: 10 digits delineated with spaces or dashes only")
   document.getElementById("phoneNumber").focus();
 }
 else if (document.getElementById("emailConfirm").checked == true){
 	if (emailAddress == ""){
		alert("Invalid Email: Email field empty and is currently required, please populate.");
		document.getElementById("emailConfirm").focus();
 	}
 	else if (!emailRegex.test(emailAddress)){
   alert("Invalid Email: Email must contain an @ followed by a period and an email domain between 2 to 5 characters");
	 document.getElementById("emailConfirm").focus();
 }
}
	else{
		//verify
	}

}
//if checkbox unchecked, email not required and does not display REQUIRED
//else if checkbox checked, required required and displays REQUIRED
function reqCheck(){
  //used during debugging:
    //alert("testing checkbox works!!!!");
  if (document.getElementById("emailConfirm").checked == true){
    document.getElementById("required").style.display = 'inline-block';
    document.getElementById("emailAddress").setAttribute("required","required");

  }
  else if (document.getElementById("emailConfirm").checked == false){
    document.getElementById("required").style.display = 'none';
    document.getElementById("emailAddress").removeAttribute("required");
  }
}
//	</script>
