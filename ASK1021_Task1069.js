//Function to show erroe message to users
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

//Function to Auto Populate FullName From FirstName and lastName
function populateFullName(){
    try{
        var firstName = Xrm.Page.getAttribute("nag_firstname").getValue();
        console.log("firstName is fetched")
        var lastName = Xrm.Page.getAttribute("nag_lastname").getValue();
        console.log("lastName is fetched")
        if(firstName == null)
        {
            firstName = " ";
        }
        if(lastName == null)
        {
            lastName =" ";
        }
        console.log("null check is completed")
        var fullName = firstName+" "+lastName;
        console.log("concatination is completed")
        Xrm.Page.getAttribute("nag_name").setValue(fullName);
        console.log("lastName field is set after concatination")
    }
    catch(ex)
    {
        console.log(ex);
        showErrorMessageToUsers("We Encuntered an error while processing your request , please rech out to  Nagarjunatechnologies@Nagtechnologies7888.onmicrosoft.com" ,"Error");
    }
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

//Function to Auto Calculate 1.Total Secured Marks 2.Grade 3. Result and 4.Total Secured percentage 
function sscCalculation(){
    var TelMarks = Xrm.Page.getAttribute("nag_telugumarks").getValue();
    var secondlanMarks = Xrm.Page.getAttribute("nag_secondlanguagemarks").getValue();
    var EngMarks = Xrm.Page.getAttribute("nag_englishmarks").getValue();
    var MathsMarks = Xrm.Page.getAttribute("nag_mathsmarks").getValue();
    var scieneceMarks = Xrm.Page.getAttribute("nag_sciencemarks").getValue();
    var SocMarks = Xrm.Page.getAttribute("nag_socilamarks").getValue();
    console.log("Fetched all the Subject Marks ");

    var totalsecuredMarks = TelMarks+secondlanMarks+EngMarks+MathsMarks+scieneceMarks+SocMarks;
    Xrm.Page.getAttribute("nag_totalsecuredmarks").setValue(totalsecuredMarks);
    console.log("Total secured Marks is sucessfully set in the field");

    var securedPercentage = (totalsecuredMarks/600)*100;
    Xrm.Page.getAttribute("nag_totalsecuredpercentage").setValue(securedPercentage);
    console.log("Total secured percentage is set in the field succesfully");

    //var grade = Xrm.page.getattribute("nag_grade").getValue();
    if (securedPercentage >= 70 && securedPercentage <= 100) 
     {
    Xrm.Page.getAttribute("nag_grade").setValue(808800000);
    } 
else if (securedPercentage < 70 && securedPercentage >= 50)
     {
    Xrm.Page.getAttribute("nag_grade").setValue(808800001);
    } 
    else
     {
    Xrm.Page.getAttribute("nag_grade").setValue(808800002);
    }

console.log("grade is set in to the field according to the secured percentage");
 
if (TelMarks>=35 && secondlanMarks>=35 && EngMarks>=35 && MathsMarks>=35 && scieneceMarks>=35 && SocMarks>=35)
{
    Xrm.Page.getAttribute("nag_result").setValue(808800000);
}
else{
    Xrm.Page.getAttribute("nag_result").setValue(808800001);
}
}

