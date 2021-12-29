    function transform(arg1) {
    const newThing = [];
        arg1.forEach(e => {
        if (!newThing.includes(e)) {
        newThing.push(e);
        } 
    });
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


console.log(transform([1,2,3,3,4]));
console.log(transform(['h','y','p','e','r','r','r','e','e','e','e']));
console.log(transform([5,5,5,6]));
console.log(transform([]));