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
    });
}

//Function to set the GST percentage to 18 on load of the form
function setGST(executionContext){
    try{
        var formContext = executionContext.getFormContext();
         formContext.getAttribute("nag_gstpercentage").setValue(18);
    }
    catch(error){
        console.log(error);
        showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
    }
}

//Function to Auto Calculate
function autoCalculate(executionContext){
    try{
        var productlookup = formContext.getAttribute("nag_product").getvalue();
        var productID = productlookup[0].id;
        

    }
    catch(error){
        console.log(error);
        showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
    }
}