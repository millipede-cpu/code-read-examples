    function transform (arg1) {
        if(arg1 < 10) {
            return `${arg1}.0`;
                    }
                let thing = arg1.toString().split("."); 
            thing[0] = thing[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return thing.join(".");
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
//
//
//
console.log(transform(5));
console.log(transform(4000.58));
console.log(transform(1000000.25));
