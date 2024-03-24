const prompt="Enter the grade:";
userGrade(grade);
//prompt for the user to input grades
function userGrade(userinput) {
    if(userinput >=79 && userinput <=100) {
        return finalgrade ="A";
    }else if(userGrade >=79 && userinput <=60) {
        return finalgrade ="B";
    }else if(userGrade >=49 && userinput <=59) {
        return finalgrade ="C";
    }else if(userGrade >=40 && userinput <=49) {
        return finalgrade ="D";
    }else if (userInput >= 0 && userInput < 40){ 
        finalGrade = "E";}
        document.getElementById("response").innerHTML = finalGrade;
    }