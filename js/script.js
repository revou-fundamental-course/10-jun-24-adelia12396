// Ini Javascript

function buttonclick(e) {
    console.log(e)
// Function to convert Celsius to Fahrenheit
    let temperatureInCelsius = 25;  // Temperature in Celsius
    let temperatureInFahrenheit;  // Variable to store the converted temperature

// Function to convert Celsius to Fahrenheit
    function convertToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    temperatureInFahrenheit = convertToFahrenheit(temperatureInCelsius);

    console.log(temperatureInCelsius + "°C is equal to " + temperatureInFahrenheit.toFixed(2) + "°F.");
}


// Function to reset all fields
function resetFields() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('conversion').value = '';
}

// Function to convert Fahrenheit to Celsius
    let temperatureInFahrenheit = 77;  // Starting temperature in Fahrenheit
    let temperatureInCelsius;  // Variable to keep the resulting Celsius temperature

// Function to translate Fahrenheit to Celsius
    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    temperatureInCelsius = convertToCelsius(temperatureInFahrenheit);

    console.log(temperatureInFahrenheit + "°F translates to " + temperatureInCelsius.toFixed(2) + "°C.");

// Adding event listeners to the buttons
document.querySelector('.green-color').addEventListener('click', convertToFahrenheit);
document.querySelector('.red-color').addEventListener('click', resetFields);
document.querySelector('.blue-color').addEventListener('click', reverseConversion);
