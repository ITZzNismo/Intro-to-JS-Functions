function outputSentence(){
    console.log("Coders Guild");
}

outputSentence();


// Using parameters
function fullName(firstName, lastName) {
    return firstName + lastName;
}

let callFullName = fullName("Joe ", "Bloggs");
console.log(callFullName);

//Temperature/Coat checker
let temperature = 55;

if(temperature < 0) {
    console.log("Stay inside!");
}
else if(temperature < 30 && temperature > 0) {
    console.log("Wear a coat and a hat!");
}
else if(temperature < 50) {
    console.log("Put on a coat!");
}
else {
    console.log("Don't put on a coat! Vest and pants are fine!");
}