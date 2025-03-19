function celsiusToFahrenheit(celsius) {
  return parseFloat(celsius * 9) / 5 + 32;
}

function celsiusToKelvin(celsius) {
  return parseFloat(celsius) + 273.15;
}

const celsius = prompt('Enter a Celsius: ');
const fahrenheit = celsiusToFahrenheit(celsius);
const kelvin = celsiusToKelvin(celsius);

document.getElementById(
  'result'
).innerHTML = `Fahrenheit: ${fahrenheit}, Kelvin: ${kelvin}`;
