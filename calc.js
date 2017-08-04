var digit = prompt("Enter Number");
function f(digit){
  var b = parseInt(digit/2);
  var c = digit%2;
  digit = b;
  var res = "" + c;
  if(b < 1){
    return  1;
  }
 
  return  Number(f(digit) + res);
}

console.log(f(digit));
