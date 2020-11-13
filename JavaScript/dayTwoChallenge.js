
let myName = Heather.length;
let myFriendsName = Beth.length;


let myName = heather.length;
let myFriendsName = beth.length;

if (heather.length > beth.length) {
    if (heather.length > beth.length);
        console.log(`${ heather } is longer than ${ beth} by ${ myNameLength - myFriendsName} characters`);
     } else if  (heather.length === beth.length) {
            console.log(`${heather} is equal in length to ${beth}`);
     }     
     else {
         console.log(`${ beth} is longer than ${ heather} by ${ myFriendsName - myName} characters`);
     } 







if (myName.length > myFriendsName.length){
    

}

let heather = 'heather';
let beth = 'beth';

console.log(heather.length);
console.log(beth.length);

if (heather.length > beth.length) {
    console.log(`${ heather } is longer than ${ beth}`) by ${};
 } else {
     console.log(`${ beth} is longer than ${ heather}`);
 }
    


if (true) {
    console.log(heather.length > beth.length)
}

//challenge two
//Types challenge

/*BRONZE
create an object that contains a string, number, boolean and object.
console.log the type of one of the values in the object.
*/

/* SILVER
write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean or object
console log "What are you?"
*/

let myVariable = {
    
    firstValue: "I am a string", 
    secondValue: 9001,
    thirdValue: false,
    fourthValue: {}
}
let valueToChek = myVariable.potato;


console.log(myVariable.secondValue);
console.log(myVariable.fourthValue);

//typeof --> tells you the TYPE of something

//if it (is a) === string --> console.log('It is a STRING') is a is a quality comparision ===

if ( typeof valueToChek === "string") {
    console.log("It is a STRING");
}else if (typeof valueToChek === "number") {
    console.log("It is a NUMBER");
} else if (typeof valueToChek === "boolean"){
    console.log("It is a BOOL")
} else if (typeof valueToChek === "OBJECT"){
    console.log("It is an OBJECT");
} else {
    console.log("Who ARE you??");
}