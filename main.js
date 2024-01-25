// Kelvin is a constant representing today's forecasted temperature.
const kelvin = 0;

// Celsius is calculated as 273 less than Kelvin.
const celsius = kelvin - 273;

// Fahrenheit is derived from Celsius using a formula.
let fahrenheit = celsius * (9/5) + 32;

//This takes the var fahrenheit and applys the floor method to it and then stores the value in the var fahrenheit.
fahrenheit = (Math.floor(fahrenheit));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Newton scale, for the curious minds.

let newton = celsius * (33/100);

newton = (Math.floor(newton));

console.log(`The temperature is ${newton} degrees Newton.`);
