//<script type="text/javaScript">

function validateAndVerify(){
	//regex: letters
	var firstName = document.getElementById("firstName").value;
	var firstNameRegex = new RegExp("^[a-zA-Z]+$");
	var lastName = document.getElementById("lastName").value;
	var lastNameRegex = new RegExp("^[a-zA-Z]+$");

	//regex: max 14 characters, at least 1 uppercase, 1 special character, 1 numeric
	var password = document.getElementById("passwd").value;
	//var passwordRegex = new RegExp("(?=.*[0-9])(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[*.!@$%^&\(\)\{\}\[\]:;<>,.?\/~_+-=|\\]).{0,10}$");
	var passwordRegex = new RegExp("(?=.*[A-Z])(?![a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{1,14}$)");

	//regex: 6 digit number
	var id = document.getElementById("idNumber").value;
	var idRegex = new RegExp("^[0-9]{6}$");

	//regex: 10 digits which can be delineated either by spaces or dashes
	var phone = document.getElementById("phoneNumber").value;
	var phoneRegex = new RegExp("^[0-9]{3}[- ]{1}[0-9]{3}[- ]{1}[0-9]{4}$");

	//must contain an @ followed by a period and an email domain that consists of 3 to 6 characters.
	//(?=.*[A-Za-z])[@][A-Za-z]{2,5}[.](?=.*[A-Za-z])
	var emailAddress = document.getElementById("emailAddress").value;
	var emailRegex = new RegExp("[@][A-Za-z]{3,6}[.]");

	//array of 10 receptionists objects
	//each receptionist has 6 fields
	/** this was the wrong way to set this up, do the other way Jira
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
	**/
	let receptionistArray = [
	{ // 1
		"firstName": 'Jira',
		"lastName": 'Uttarapong',
		"password": 'P@ssword1',
		"id": 123456,
		"phone": '123 456 7890',
		"emailAddress":'ju35@njit.edu'
	},
	{ // 2
		"firstName": 'Tim',
		"lastName": 'Ridgewood',
		"password": 'Elf23!',
		"id": 222222,
		"phone": '973 333 4444',
		"emailAddress": 'tr22@njit.edu'
	},
	{ // 3
		"firstName": 'Mary',
		"lastName": 'Sue',
		"password": 'Thing12$',
		"id": 333333,
		"phone": '201 022 2787',
		"emailAddress": 'ms20@njit.edu'
	},
	{ // 4
		"firstName": 'Capt',
		"lastName": 'Crunch',
		"password": 'Flakes@3',
		"id":  444444,
		"phone": '321 406 8890',
		"emailAddress": 'cc44@njit.edu'
	},
	{ // 5
		"firstName": 'Tom',
		"lastName": 'Jerry',
		"password": 'mouseC@t1',
		"id": 555555,
		"phone": '609 666 6666',
		"emailAddress": 'tj60@gmail.com'
	},
	{ // 6
		"firstName": 'Mister',
		"lastName": 'Rogers',
		"password": 'N3&',
		"id": 666666,
		"phone": '245 678 9000',
		"emailAddress": 'mr3@njit.edu'
	},
	{ // 7
		"firstName": 'Cat',
		"lastName": 'Woman',
		"password": 'Me0w^%',
		"id": 777777,
		"phone": '609 343 2345',
		"emailAddress": 'cw60@njit.edu'
	},
	{ // 8
		"firstName": 'Matt',
		"lastName": 'Person',
		"password": 'Password1!',
		"id": 888888,
		"phone": '201-224-5656',
		"emailAddress": 'mp20@njit.edu'
	},
	{ // 9
		"firstName": 'Jiggly',
		"lastName": 'Poof',
		"password": 'P0k3m!n',
		"id": 999999,
		"phone": '340-700-9000',
		"emailAddress": 'jp34@njit.edu'
	},
	{ // 10
		"firstName": 'Dude',
		"lastName": 'Broseph',
		"password": 'Cap78$',
		"id": 000000,
		"phone": '124 245 3679',
		"emailAddress": 'db12@gmail.com'
	}
	];
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

//verify
	//is entry matching?
	//if (firstName.value === receptionistArray.firstName && lastName.value === receptionistArray.lastName && password.value === receptionistArray.password
	//&& id.value === receptionistArray.id && phone.value === receptionistArray.phone){
		//is email checked?
		//yes
			//-> is email match?
				//yes successful match
				//no not successful match

		//no-> sucessful match

	//} //yes -> nice
	//yes -> nice
	//no ->
		//if dropbox option => Create A New Client Account --> insert + into acc created
		//if NOT dropbox option, display message indicating that the specific receptionist cannot be found.

	//}


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
