
function getRand(max) { return Math.floor(Math.random() * max);}
function anyOf(array){return array[getRand(array.length)];}

function getFace() {
  let b = 'ð'.codePointAt();
  let s =[];
  for(let i=0;i<71;++i){
    s.push(b+i);
  }
  return String.fromCodePoint(anyOf(s));
}

// ã ãããn/mãããã§trueããã
function randif(n,m) { return  getRand(m) < n ; }

function isValidContext(context) {
  return context!=null && typeof context.channel !== 'undefined';
}

exports.getRand = getRand;
exports.randif = randif;
exports.isValidContext = isValidContext;
exports.anyOf = anyOf;
exports.getFace = getFace;
