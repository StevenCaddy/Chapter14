function validateForm() {
	if (document.forms[0].myName.value == ""){
		alert("Name field cannot be empty.");
		return false;
	} //end if
	if (document.forms[0].myEmail.value == ""){
		alert("Email field cannot be empty.");
		return false;
	} //end if
	return true;
}

validateForm();