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

  // Error Messages for Invalid Unit entry or input of 0
  let invalidUnitMsg = "Invalid Units";
  let zeroInputMsg = "Zero is not a valid number! (results to nothing)"

  // Process (calculates Volume and Surface Area)
  let volume = ((3 * Math.sqrt(3)) / 2) * (baseEdge ** 2) * height;
  let surfaceArea = 6 * baseEdge * height + 3 * Math.sqrt(3) * (baseEdge ** 2);

  // Checks to make sure that user made input in all fields
  if (baseEdge >= 0 && height >= 0 && units != "") {
    // If user entered 0 for height or base edge length
    if (height === 0 || baseEdge === 0) {
      document.getElementById('zero-input').innerHTML = zeroInputMsg;
      document.getElementById('volume').innerHTML = "";
      document.getElementById('surface-area').innerHTML = "";
      document.getElementById('invalid-unit').innerHTML = "";
      document.getElementById('empty-field').innerHTML = "";
      // If they entered a proper metric unit
    } else if (units === "mm" || units === "cm" || units === "dm" || units === "m" || 
        units === "dam" || units === "hm" || units === "km") {
      document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + 
        units + "³";
      document.getElementById('surface-area').innerHTML = 'Surface Area is: ' + 
        surfaceArea.toFixed(2) + units + "²";
      document.getElementById('invalid-unit').innerHTML = "";
      document.getElementById('zero-input').innerHTML = "";
      document.getElementById('empty-field').innerHTML = "";
      // If the user did not enter valid units
    } else {
      document.getElementById('invalid-unit').innerHTML = invalidUnitMsg;
      document.getElementById('volume').innerHTML = "";
      document.getElementById('surface-area').innerHTML = "";
      document.getElementById('zero-input').innerHTML = "";
      document.getElementById('empty-field').innerHTML = "";
    }
    // If user did not a value in all the input fields
  } else {
    document.getElementById('empty-field').innerHTML = "Please enter ALL fields!";
    document.getElementById('volume').innerHTML = "";
    document.getElementById('surface-area').innerHTML = "";
    document.getElementById('invalid-unit').innerHTML = "";
    document.getElementById('zero-input').innerHTML = "";
  }
}