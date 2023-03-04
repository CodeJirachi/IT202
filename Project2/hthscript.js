//<script type="text/javaScript">
function validate(){

	//array of 10 receptionists
	//each receptionist has 6 fields
	let receptionistArray = [
		['Jira', 'Uttarapong', 'P@ssword1', 123456, '123 456 7890', 'ju35@njit.edu'],
		['Tom', 'Ridgewood', 'Elf23!', 222222, '973 333 4444', 'tr22@njit.edu'],
		['Mary', 'Sue', 'Thing12$', 333333, '201 022 2787', 'ms20@njit.edu'],
		['Capt', 'Crunch', 'Flakes@3', 444444, '321 406 8890', 'cc44@njit.edu'],
		['Tom', 'Jerry', 'mouseC@t1', 555555, '609 666 6666', 'tj60@gmail.com'],
		['Mister', 'Rogers', 'N3&', 666666, '245 678 9000', 'mr3@njit.edu'],
		['Cat', 'Woman', 'Me0w^%', 777777, '609 343 2345', 'cw60@njit.edu'],
		['Matt', 'Person', 'Password1!', 888888, '201-224-5656', 'mp20@njit.edu'],
		['Jiggly', 'Poof', 'P0k3m!n', 999999, '340-700-9000', 'jp34@njit.edu'],
		['Dude', 'Broseph', 'Cap78$', 000000, '124 245 3679', 'db12@gmail.com'],
	];

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
