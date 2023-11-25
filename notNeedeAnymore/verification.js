

const verification = ( formInfo, setErrorMessage) => {

  //remove previous error message (.remove() || change class || change InnerText)
//clearError()

//errors code bank

let errorsMsg = []

//perform a test on some requirement (just the negative)
if (formInfo.password.length < 8)
//if not valid, perventDefault, provide feedback and return
//{window.alert("Your password does not have 10 characters")
{errorsMsg.push("Your password does not have 8 characters. Please provide a longer password.");

//passwordInput.focus();


//repeat for each validation teet 


if (formInfo.confirmPassword !== formInfo.password)
 { errorsMsg.push("Your password and confirmed password are not the same. Please review your password or your confirmed password");

// confirmPasswordInput.focus();
}

if (errorsMsg.length !== 0)
{
setErrorMessage(errorsMsg)}

//let the default behavior occur (or make a message by using an alert)
else
 handleSubmit()
}
}

export default verification