// This file contains the JS functions for index.html

// Strict Mode
'use strict';

// This Function calculates the Volume and Surface Area of a Hexagonal Prism
function calculate () {
  
  // Variables
  // Value is made into Float
  let baseEdge = parseFloat(document.getElementById('base-edge').value); // Stores value from user
  let height = parseFloat(document.getElementById('height').value); // Stores value from user
  let units = document.getElementById('units').value;

  // Error Message for Invalid Unit entry
  let invalidUnitMsg = "Invalid Units";
  let zeroInputMsg = "Zero is not a valid number! (results to nothing)"

  // Process (calculates Volume and Surface Area)
  let volume = ((3 * Math.sqrt(3)) / 2) * (baseEdge ** 2) * height;
  let surfaceArea = 6 * baseEdge * height + 3 * Math.sqrt(3) * (baseEdge ** 2);

  if (baseEdge != "" && height != "" && units != "") {
    // Outputs Volume and Surface Area with IF statement to ensure that user entered a metric unit
    if (height === 0 || baseEdge === 0) {
      document.getElementById('zero-input').innerHTML = zeroInputMsg;
      document.getElementById('volume').innerHTML = "";
      document.getElementById('surface-area').innerHTML = "";
      document.getElementById('invalid-unit').innerHTML = "";
      document.getElementById('empty-field').innerHTML = "";
    } else if (units === "mm" || units === "cm" || units === "dm" || units === "m" || 
        units === "dam" || units === "hm" || units === "km") {
      document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + 
        units + "³";
      document.getElementById('surface-area').innerHTML = 'Surface Area is: ' + 
        surfaceArea.toFixed(2) + units + "²";
      document.getElementById('invalid-unit').innerHTML = "";
      document.getElementById('zero-input').innerHTML = "";
      document.getElementById('empty-field').innerHTML = "";
    } else {
      document.getElementById('invalid-unit').innerHTML = invalidUnitMsg;
      document.getElementById('volume').innerHTML = "";
      document.getElementById('surface-area').innerHTML = "";
      document.getElementById('zero-input').innerHTML = "";
      document.getElementById('empty-field').innerHTML = "";
    }
  } else {
    document.getElementById('empty-field').innerHTML = "Please enter ALL fields!";
    document.getElementById('volume').innerHTML = "";
    document.getElementById('surface-area').innerHTML = "";
    document.getElementById('invalid-unit').innerHTML = "";
    document.getElementById('zero-input').innerHTML = "";
  }
}