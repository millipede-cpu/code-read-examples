    
    function transform(arg1) {
    
    if(arg1.some(x => x === null)) {
    return true;
    } else {
    return false
        } 
    }
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
    console.log(transform([1, null, 3]));
    console.log(transform([undefined]));
    console.log(transform([1, 2, 3]));
    console.log(transform([null, null]));
