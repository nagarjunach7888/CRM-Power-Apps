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

//Function to Show and hide the sections (source and Traget) based  on End User Selection
function showandhidesection(){
    try{
        var showhidebutton = Xrm.Page.getAttribute("nag_showhidesection").getValue();
        if(showhidebutton == 808800000)
        {
            Xrm.Page.ui.tabs.get("general").sections.get("null_section_3").setVisible(true);
            Xrm.Page.ui.tabs.get("general").sections.get("null_section_4").setVisible(true);

        }
        else 
         {
            Xrm.Page.ui.tabs.get("general").sections.get("null_section_3").setVisible(false);
            Xrm.Page.ui.tabs.get("general").sections.get("null_section_4").setVisible(false);

        }
        
    }
    catch(errormessage)
    {
        console.log(errormessage);
        showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
    }
    
}
//Function to set the fields lock 
function setFieldsLock(){
    try{
        Xrm.Page.getControl("nag_dateofbirthtarget").setDisabled(true);
        Xrm.Page.getControl("nag_agetarget").setDisabled(true);
        Xrm.Page.getControl("nag_gendertarget").setDisabled(true);
        Xrm.Page.getControl("nag_areyoumajortarget").setDisabled(true);
        Xrm.Page.getControl("nag_salarypermonthtarget").setDisabled(true);
        Xrm.Page.getControl("nag_yourexperiencedetailstarget").setDisabled(true);
    }
    catch(errormessage)
    {
        console.log(errormessage);
        showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
    }
}
