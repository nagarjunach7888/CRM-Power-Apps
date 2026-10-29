//Function to Show Error Message to users 
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

//Function to Populate Full Name in the form based on First Name and Last Name
function populateFullName(){
    try{
    var firstName = Xrm.Page.getAttribute("nag_firstname").getValue();
    var lastName = Xrm.Page.getAttribute("nag_lastname").getValue();
    if(firstName == null){
        firstName =" ";
    }
    if(lastName == null){
        lastName = " ";
    }
    var fullName = firstName + " " + lastName;
    Xrm.Page.getAttribute("nag_fullname").setValue(fullName);
}
catch(ex){
    console.log(ex);
    showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
}
}

//Function to Copy Date of Birth from Source to Target
function copyDateOfBirth(){
    try{
    var dateOfBirth =Xrm.Page.getAttribute("nag_dateofbirthsource").getValue();
    Xrm.Page.getAttribute("nag_dateofbirthtarget").setValue(dateOfBirth);
}
catch(ex){
    console.log(ex);
    showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
}   
}

//Function to Copy Age from Source to Target
function copyAge(){
    try{
    var age = Xrm.Page.getAttribute("nag_agesource").getValue();
    Xrm.Page.getAttribute("nag_agetarget").setValue(age);
    }
    catch(ex){
    console.log(ex);
    showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
   }  
}

//Function to Copy Gender from Source to Target
function copyGender(){
    try{
    var gender =  Xrm.Page.getAttribute("nag_gendersource").getValue();
    Xrm.Page.getAttribute("nag_gendertarget").setValue(gender);
    }
    catch(ex){
    console.log(ex);
    showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
   }  
}

//Function to Copy Are you major from Source to Target
function copyAreYouMajor(){
    try{
    var areYouMajor = Xrm.Page.getAttribute("nag_areyoumajorsource").getValue();
    Xrm.Page.getAttribute("nag_areyoumajortarget").setValue(areYouMajor);
    }
    catch(ex){
    console.log(ex);
    showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
   }  
}

///Function to copy Salary Per Month from Source to Target
function copySalaryPerMonth(){
    try{
    var salaryPerMonth = Xrm.Page.getAttribute("nag_salarypermonthsource").getValue();
    Xrm.Page.getAttribute("nag_salarypermonthtarget").setValue(salaryPerMonth);
    }
    catch(ex){
    console.log(ex);
    showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
   }  
}

//Function to Copy Your Experience Details from Source to Target
function copyYourExperienceDetails(){
    try{
    var yourExperienceDetails = Xrm.Page.getAttribute("nag_yourexperiencedetailssource").getValue();
    Xrm.Page.getAttribute("nag_yourexperiencedetailstarget").setValue(yourExperienceDetails);
    }
    catch(ex){
    console.log(ex);
    showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
   }  
}