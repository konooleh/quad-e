<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <p>Coefficient A should not be equal to 0.</p>
  <p>Discriminant should be greater than 0.</p>
  <input type="number" name="coefficientA" id="coefficientA" placeholder="Coefficient A">
  <span>x<sup>2</sup> + </span>
  <input type="number" name="coefficientB" id="coefficientB" placeholder="Coefficient B">
  <span>x + </span>
  <input type="number" name="coefficientC" id="coefficientC" placeholder="Coefficient C">
  <span> = </span>
  <button type="submit" id="button" onclick="writeResult()">Get result</button>
  <p id="discriminant">Discriminant = </p>
  <p id="result">Result: </p>
  
  <script src="index.js"></script>
</body>
</html>