//In this exercise, I will review how to construct whileLoops
//in JavaScript versus Python 

//In Python:
// i = 0
// while i < 5: 
    // i = i + 1
    //print i

//In JavaScript:
var i = 0;
while (i < 5) {
    i += 1 ;
    console.log(i);
}

//An alternative way to write this in JavaScript is: 
var i = 0;
while (i < 5) {
    i++;
    console.log(i);
}