    function transform (x) {
    let s = String(x).split("");
    for(let i = 0; i < s.length; i++){
        if(s[i] !== s[s.length - i - 1]) {
            return false;
    } else { 
    return true;
            };
        };
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


console.log(transform(101));  
console.log(transform(-101));
console.log(transform(2002));
console.log(transform(300));