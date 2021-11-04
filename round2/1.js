    function transform (arg1, arg2) {
    const newThing = {};
    for(const item of arg2) {
        newThing[item] = arg1[item];
    };
    return newThing;
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
console.log(transform({'apples': 5, 'bananas' : 7, 'chillies' : 10, 'duck' : 4}, ['chillies', 'duck', 'chillies']));

console.log(transform({'coffee' : 3, 'milk': 2, 'cinnamon': 1, 'vanilla': 1}, ['coffee', 'cinnamon', 'vanilla']));