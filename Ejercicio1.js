const numerosPrimos = ( a, b ) => {
  for(let i = a; i <= b; i++) {
    let primo = true;
    for(let j = 2; j < i; j++) {
        if(i % j === 0) {
            primo = false;
            break;
        }
    }
    if ( primo ) {
      console.log(i);
    } 
  }}

numerosPrimos(2,10);
