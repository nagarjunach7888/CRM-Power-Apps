function AdditionofTwoNumbers(){
    var a= 20;
    var b = 55;
    result = a+b;
    console.log(result);
}
// populate full name 
function populateFullname (){
    var firstName = "Nagarjuna";
    var lastName = "Consructions";
    var fullName = firstName+" "+lastName;
    console.log(fullName);
}
//subtraction 
function subtraction(){
    var a = 7;
    var b = 9;
    var result = a-b;
    console.log(result);

}
//increment 
function incrementExample (){
    var a = 120;
    console.log(a);
    a++;
    console.log(a);
}
//decrement 
function decrementExample(){
    var x= 567;
    console.oog(x);
    x--;
    console.log(x);
}
//show D/o and S/O
function showandHide(){
    var fieldValue = "D/O";
    if (fieldValue == "S/O"){
        console.log("Son of");
    }
    else{
        console.log("Daughter of")
    }
}
//secured percentage calculator
function securedPercentageCalculator(){
    var percentage = 67;
    if (percentage <100 && percentage >=55){
        console.log("A");
    }
    else if (percentage >55 && percentage <=35){
        console.log("B");

    }
    else {
        console.log("C");
    }
}
//array baciscs
function printListofCars(){
    var listofcars = ["toyota","Kia","Maruti","Skoda","RangRover"];
    for ( var i = 0 ; i < listofcars.length ; i++)
    {
        console.log(listofcars[i]);
    }
    if (listofcars[i] == "maruti")
    {
        console.log("Maruti is available");
    }
    else {
        console.log("Maruti is not available")
    }
}
printListofCars();

