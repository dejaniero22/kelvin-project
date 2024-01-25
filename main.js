// Kelvin is a constant representing today's forecasted temperature.
const kelvin = 283;

// Celsius is calculated as 273 less than Kelvin.
const celsius = kelvin - 273;

// Fahrenheit is derived from Celsius using a formula.
const fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Newton scale, for the curious minds.

const newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton.`);
