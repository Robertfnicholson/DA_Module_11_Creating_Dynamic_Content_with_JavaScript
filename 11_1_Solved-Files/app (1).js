// JavaScript is case sensitve and the following will create two separate variables
var STATE = "CA"
var state = "ca"
console.log(STATE)
console.log(state)

// String Variable 
var city = "San Francisco";
console.log(city);

// Integer Variable
var zip = 94123;
console.log(zip);

// Float Variable
var latitude = 37.77;
console.log(latitude);

// Float Variable
var longitude = -122.43;
console.log(longitude);
  
// Boolean Variable
var inCalifornia = true;
console.log(inCalifornia);

// Example Array
var cityArray = [ "San Francisco", 94123, [37.77, -122.43], inCalifornia ];
console.log(cityArray);

// Example Object
var cityObject = {city: "San Francisco",
              zip: 94123,
              location: [37.77, -122.43],
              inCalifornia: true};
console.log(cityObject);

// Example Oject from Variables
var cityObject2 = {city: city,
    zip: zip,
    location: location,
    inCalifornia: inCalifornia};
console.log(cityObject2);