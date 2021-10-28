function transform (arg1, arg2) {

return arg1.filter(x => !arg2.includes(x)); 

};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

console.log(transform([2,3,4],[4,4,7]));
console.log(transform([5,2,7],[]));
console.log(transform([2,5,8],[2,5]));