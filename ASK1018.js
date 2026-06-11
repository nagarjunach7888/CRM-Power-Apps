function storingStudentDetails(){
    var studentInfo1 = {
        studentname : "Kalyani",
        studentrollnumber : 101,
        studentTelugumarks :89,
        studentEnglishmarks :92
    };
    var studentInfo2 = { 
        studentname : "Arjun",
        studentrollnumber : 102,
        studentTelugumarks :95,
        studentEnglishmarks :88
    };
    var studentInfo3 = {
        studentname : "Prasad",
        studentrollnumber : 103,
        studentTelugumarks :78,
        studentEnglishmarks :82
    };  
    var studentInfo4 = {
        studentname : "Prakash",
        studentrollnumber : 104, 
        studentTelugumarks :82,
        studentEnglishmarks :90
    };
    var studentInfo5 = {
        studentname : "Jay",
        studentrollnumber : 105,
        studentTelugumarks :88,
        studentEnglishmarks :94
    };  
    var studentInfo6 = {
        studentname : "Vamsi",
        studentrollnumber : 106,
        studentTelugumarks :90,
        studentEnglishmarks :91
    };  
    var studentInfo7 = {
        studentname : "Suresh",
        studentrollnumber : 107,
        studentTelugumarks :85,
        studentEnglishmarks :89
    };
    var studentInfo8 = {
        studentname : "Ramesh",
        studentrollnumber : 108,
        studentTelugumarks :80,
        studentEnglishmarks :84
    };
    var studentInfo9 = {
        studentname : "Srinivas",
        studentrollnumber : 109,
        studentTelugumarks :92,
        studentEnglishmarks :95
    };
    var studentInfo10 = {
        studentname : "Vijay",
        studentrollnumber : 110,
        studentTelugumarks :87,
        studentEnglishmarks :90
    };
    var studentList = [studentInfo1,studentInfo2,studentInfo3,studentInfo4,studentInfo5,studentInfo6,studentInfo7,studentInfo8,studentInfo9,studentInfo10];

    for (var startIndex =0;startIndex < studentList.length;startIndex++){
        console.log("Student Name is :" +studentList[startIndex]["studentname"]);
        console.log("Student Roll Number is :" +studentList[startIndex]["studentrollnumber"]);

    }
}