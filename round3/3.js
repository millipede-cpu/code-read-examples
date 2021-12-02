    function transform (arg1) {

    let stuff = Object.entries(arg1);
    
    let look = stuff.map((el) => 
    
    [el[0][0].toUpperCase() + 
    
    el[0].slice(1), 
    
    el[1]] );
    
    return Object.fromEntries(look);
    
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
    
    console.log(transform({'fee' : 4, 'fi': 3, 'fo': 2, 'fum' : 1}))