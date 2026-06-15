//1.Create a function to do addittion of two numbers 10, 20
function additionoftwonumbers ()
{
    var firstnumber = 10;
    var secondnumber = 20;
    var result = firstnumber + secondnumber;
    console.log("Addition of Two Numbers 10,20 is:" +result) ;
}

//2.Create a function to do multiflication of two numbers 10,20
function multiplicationoftwonumbers()
{
    var Firstnumber = 10;
    var Secondnumber =20;
    var Result = Firstnumber*Secondnumber;
    console.log("Multiplication of two numbers is:" +Result);
}


//3.Create a Parameterized function for addittion of two numbers
function AdditionofTwonumbers(Firstnumber,Secondnumber)
{
    var ResultoftheAddition =Firstnumber+Secondnumber;
    console.log("Addition of the given two numbers is :" +ResultoftheAddition);
}

//4.Consume the  implemented above and perform addition of 5 pairs
function AdditionofTwonumbers(Firstnumber,Secondnumber)
{
    var ResultoftheAddition =Firstnumber+Secondnumber;
    console.log("Addition of the given two numbers is :" +ResultoftheAddition);
}
AdditionofTwonumbers(10,20);
AdditionofTwonumbers(40,65);
AdditionofTwonumbers(45,89);
AdditionofTwonumbers(85,52);
AdditionofTwonumbers(12,123);

//5.Create a Parameterized function for multiplication of two numbers
function MultiplicationofTwonumbers(Firstnumber,Secondnumber)
{
    var ResultoftheMultiplication =Firstnumber*Secondnumber;
    console.log("Multiplication of the given two numbers is :" +ResultoftheMultiplication);
}
MultiplicationofTwonumbers(9,99);//Multiplication of the given two numbers is :891

//6.Consume the  implemented above and perform multiplication of 5 pairs
function MultiplicationofTwonumbers(Firstnumber,Secondnumber)
{
    var ResultoftheMultiplication =Firstnumber*Secondnumber;
    console.log("Multiplication of the given two numbers is :"+ResultoftheMultiplication);
}

MultiplicationofTwonumbers(78,87);//Multiplication of the given two numbers is :6786
MultiplicationofTwonumbers(74,47);//Multiplication of the given two numbers is :3478
MultiplicationofTwonumbers(14,41);//Multiplication of the given two numbers is :574
MultiplicationofTwonumbers(12,21);//Multiplication of the given two numbers is :252
MultiplicationofTwonumbers(32,23);//Multiplication of the given two numbers is :736

//7.Create a function to print the list of values in an Array
function PrintArray()
{
   var ListofNames =["nag","Arjun","Kumar","Prasad","Prakash","Jay"];
   for (var startIndex =0;startIndex < ListofNames.length;startIndex++)
    {
        console.log(ListofNames[startIndex])
    }
}

//8.Consume the above function to Print Cars Companies list
function printCarsList(){
    var ListofCars =["Tata","Mahindra","Maruthi","Hyundai","Kia","Honda"];
    for (var startIndex =0;startIndex < ListofCars.length;startIndex++)
    {
        console.log(ListofCars[startIndex])
    }
}

//9.Consume the above function to Print mobile Companies list
function printMobileList(){
    var ListofMobiles =["Apple","Samsung","OnePlus","Redmi","Vivo","Oppo"]; 
    for (var startIndex =0;startIndex < ListofMobiles.length;startIndex++)
    {
        console.log(ListofMobiles[startIndex])
    }
}

//10.Consume the above function to Print Laptop Companies list
function printLaptopList(){
    var ListofLaptops =["Dell","HP","Lenovo","Asus","MSI","Acer"];
    for (var startIndex =0;startIndex < ListofLaptops.length;startIndex++)
    {
        console.log(ListofLaptops[startIndex])
    }
}

//11.Write a Function to check the nokia is present in the mobile companies list or not
function checkNokiaInMobileList(){
    var ListofMobiles =["Apple","Samsung","OnePlus","Redmi","Vivo","Oppo"];
    var isNokiaPresent = false;
    for (var startIndex =0;startIndex < ListofMobiles.length;startIndex++)
    {
        var currentMobile = ListofMobiles[startIndex];
        if (currentMobile === "Nokia") 
        {
            console.log("Nokia is present in the mobile companies list.");
            isNokiaPresent = true;
        }

    }
    if (isNokiaPresent === false)
    {
        console.log("Nokia is not present in the mobile companies list.");
    }
}

//12.create a Parameterized Function to Print Grade based on Secured Percentage
function PrintGrade(Percentage){
    if(Percentage >= 70 && Percentage <=100)
    {
        console.log("Grade: A");
    }
    else if(Percentage >=50 && Percentage <70)
    {
        console.log("Grade: B");
    }
    else 
    {
        console.log("Grade: C");
    }
}
