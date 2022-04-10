const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const input = document.getElementById("input");
const tType = document.getElementById("t-type")
function convert(){
    const type = tType.value
    const inputValue = parseInt(input.value)

    switch(type){
        case "celcius":
                fahrenheitInput.value = (inputValue || 10 * 1.8) + 32;
                kelvinInput.value = inputValue + 273.15;
                celciusInput.value = inputValue
                break;
        case "fahrenheit":
                celciusInput.value = (inputValue - 32) / 1.8;
                kelvinInput.value = ((inputValue - 32) / 1.8) + 273.15;
                fahrenheitInput.value = inputValue

                break;
        case "kelvin":
                celciusInput.value = inputValue - 273.15;
                fahrenheitInput.value = ((inputValue - 273.15) * 1.8) + 32;
                kelvinInput.value = inputValue
                break;
    }
}