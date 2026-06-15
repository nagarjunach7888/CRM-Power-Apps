//Function to Populate Full Name in the form based on First Name and Last Name
function populateFullName(){
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

//Function to Copy Date of Birth from Source to Target
function copyDateOfBirth(){
    var dateOfBirth =Xrm.Page.getAttribute("nag_dateofbirthsource").getValue();
    Xrm.Page.getAttribute("nag_dateofbirthtarget").setValue(dateOfBirth);
}

//Function to Copy Age from Source to Target
function copyAge(){
    var age = Xrm.Page.getAttribute("nag_agesource").getValue();
    Xrm.Page.getAttribute("nag_agetarget").setValue(age);
}

//Function to Copy Gender from Source to Target
function copyGender(){
    var gender =  Xrm.Page.getAttribute("nag_gendersource").getValue();
    Xrm.Page.getAttribute("nag_gendertarget").setValue(gender);
}

//Function to Copy Are you major from Source to Target
function copyAreYouMajor(){
    var areYouMajor = Xrm.Page.getAttribute("nag_areyoumajorsource").getValue();
    Xrm.Page.getAttribute("nag_areyoumajortarget").setValue(areYouMajor);
}

///Function to copy Salary Per Month from Source to Target
function copySalaryPerMonth(){
    var salaryPerMonth = Xrm.Page.getAttribute("nag_salarypermonthsource").getValue();
    Xrm.Page.getAttribute("nag_salarypermonthtarget").setValue(salaryPerMonth);
}

//Function to Copy Your Experience Details from Source to Target
function copyYourExperienceDetails(){
    var yourExperienceDetails = Xrm.Page.getAttribute("nag_yourexperiencedetailssource").getValue();
    Xrm.Page.getAttribute("nag_yourexperiencedetailstarget").setValue(yourExperienceDetails);
}