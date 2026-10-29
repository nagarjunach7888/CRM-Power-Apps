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

//Function to set the Total marks to 600
function setTotalMarks(){
    try{
        var totalMarks = Xrm.Page.getAttribute("nag_totalmarks").setValue(600);
        console.log("fetched total marks and value auto set to 600");
        Xrm.Page.getControl("nag_totalmarks").setDisabled(true);
        console.log("got control on the field and set the field disabled");
    }
    catch(ex){
        console.log(ex);
        showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
    }
}

//Function to Set the Fields as Disabled 
function setFieldStatus(executionContext){
    try{
        var formContext = executionContext.getFormContext();
        var totalSecuredMarks = formContext.getControl("nag_totalsecuredmarks").setDisabled(true);
        var securedPercentage = formContext.getControl("nag_totalsecuredpercentage").setDisabled(true);
        var grade = formContext.getControl("nag_grade").setDisabled(true);
        var result = formContext.getControl("nag_result").setDisabled(true);

    }
    catch(ex){
        console.log(ex);
        showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
    }
}