    function transform(arg1) {
    let stuff = false;
    arg1.forEach(el => {
        if(el > 0) {
        stuff = true;
        }
    });
    return stuff;
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
//
    
    console.log(transform([]));
    console.log(transform([-6, -8, 0]));
    console.log(transform([-3, 0, 102]));
    console.log(transform([56]));