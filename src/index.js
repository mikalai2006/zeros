function rFact(number,sokr) {

 let obj = {
   '2': 0,
   '5': 0
  };

  for (let j = number; j > 0; j -= sokr){
    let t = j;
    while (t % 5 == 0) {
      obj['5']++; 
      t = t / 5
    }

    if (t % 2 == 0) {
      while (t % 2 == 0) {
        obj['2']++; 
        t = t / 2
      }
    } 
    
  }

  return obj;

}

module.exports = function zeros(expression) {
  // your solution
 
  let arFact = expression.split('*');
  // console.log('expression',expression);
    let newExp = arFact.map( x => {

    let sokr = x.slice(-2)=='!!' ? 2 : 1;
    return rFact(parseInt(x.replace(/!/g,'')),sokr);

  });

  let newObj = {
    '2': 0,
    '5': 0
  };

  for (let k = 0; k < newExp.length; k++){
    newObj['2'] +=newExp[k]['2'];
    newObj['5'] +=newExp[k]['5'];
  }

  return newObj['2'] === 0 ? 0 : newObj['5']
  
}
