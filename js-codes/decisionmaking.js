// Decision making statements
const age= 60;
if(age>=59) console.log("he is ready to retire");

//exmple 2
const age3= 13;
if(age3>=18) console.log("she has  right to vote");
else{
    const yearsleft=18-age3;
    console.log(`she has to wait for ${yearsleft}years `);
}

//example 3
const marks= 67;
if(marks>=85) {
    console.log("he got A grade");
} 
else if(marks<85 && marks>=70) {
    console.log("he got B grade");
}
else if(marks<70 && marks>=55) {
    console.log("he got c grade");
}
else if(marks<55 && marks>=35) {
    console.log("he got d grade");
}
else if(marks<35) {
    console.log("better luck next time");
}