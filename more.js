let myvar = [];
if (myvar) {
    //console.log('truthy');
} else {
    // console.log('false');
}
//falsey:0,null,false,undifined,nan,"".

let age = 11;
let type;
if (age >= 18) {
    type = "adult"
} else {
    type = "child"
}
let type1 = (age >= 11) ? 'child' : 'adult';
//console.log(type1);
const Number = [33, 56, 2, 67, 10, 34, 99];
const res = Number.find((currentvalue) => {
    return currentvalue > 10
})
const res1 = Number.findIndex((currentvalue, index, arr) => {
    return currentvalue > 33
})
const res2 = Number.filter((currentvalue) => {
    return currentvalue > 10

})


console.log(res2);

