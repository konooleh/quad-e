
var cA, cB, cC;
var unknownOne, unknownTwo;
var result;
var discriminant;

function quadraticEquation(a, b, c) {
  discriminant = b * b - 4 * a * c;
  
  if (discriminant < 0 || a == 0) {
    result = 'Invalid coefficients';
    
  }  else if (discriminant > 0) {
    unknownOne = (-b + Math.sqrt(discriminant)) / (2 * a);
    unknownTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
    result = 'x<sub>1</sub> = ' + unknownOne + 
           '; x<sub>2</sub> = ' + unknownTwo;
    
  } else if (discriminant == 0) {
    result = 'Unknown' + ' ' -b / (2 * a);
  }
  
  return result;
};

function writeResult() {
  cA = Number(document.getElementById('cA').value);
  cB = Number(document.getElementById('cB').value);
  cC = Number(document.getElementById('cC').value);
  
  quadraticEquation(cA, cB, cC);
  document.getElementById('discriminant').innerHTML =
      'Discriminant (Δ) = ' + discriminant;
  document.getElementById('result').innerHTML = 'Roots (<i>p</i>): ' + result;
};
