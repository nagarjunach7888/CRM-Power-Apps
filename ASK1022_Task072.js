//Function to show error message to users
function showErrorMessageToUsers(userMessage,dialogTitle){
var alertStrings = { 
    confirmButtonLabel: "OK",
     text: userMessage,
      title: dialogTitle 
    
    };
var alertOptions = { height: 250,
     width: 260 
    };
Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
    function (success) {
        console.log("Alert dialog closed");
    },
    function (error) {
        console.log("error.message");
    }
);
}

//Function to set the firsname and LastName Mandatory based on the selection by End User
function setMandatory(){
    try{
    var mandatoryButton = Xrm.Page.getAttribute("nag_setmandatory").getValue();
    if(mandatoryButton == 808800000)
    {
        Xrm.Page.getAttribute("nag_firstname").setRequiredLevel("required");
         Xrm.Page.getAttribute("nag_lastname").setRequiredLevel("none");
    }
    else if (mandatoryButton == 808800001)
    {
        Xrm.Page.getAttribute("nag_firstname").setRequiredLevel("none");
         Xrm.Page.getAttribute("nag_lastname").setRequiredLevel("required");

    }
    else 
    {
        Xrm.Page.getAttribute("nag_firstname").setRequiredLevel("none");
         Xrm.Page.getAttribute("nag_lastname").setRequiredLevel("none");
    }
}
catch(errormessage)
    {
        console.log(errormessage);
        showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
    }
}