//Implement conversion functions (2 points)
function convertCtoF(celsius){
  return (celsius * 9 / 5 + 32);
}
convertFtoC(faren){
  return ()(faren - 32) * 5 / 9);
}
//-----------------------------------------

//Register Convert button's click event handler (2 points)
window.addEventListener("DOMContentLoaded", domLoaded);
//Ensure only one text field contains a value (2 points)

//Change image to reflect temperature (2 points)
function showImage(tempInF) {
    if (tempInF < 32) {
        weatherImage.src = "cold.png";
    }
    else if (tempInF >= 32 && tempInF <= 50) {
        weatherImage.src = "cool.png";
    }
    else {
        weatherImage.src = "warm.png";
    }
}
//-----------------------------------------

//Handle bad input (2 points)

function domLoaded() {
    // eventListener in fInput
    fInput.addEventListener("input", () => {
        cInput.value = ""; // when we input in fInput fiels cInput field will be cleared
    })

    // eventListener in fInput
    cInput.addEventListener("input", () => {
        fInput.value = ""; // when we input in cInput fiels fInput field will be cleared
    })

    // event handler on button click
    convertButton.addEventListener("click", (e) => {
        e.preventDefault(); // to stop page from reloading when we click on submit

        // if fInput is not empty
        if (fInput.value !== '') {
            // convert string to float using parseFloat
            const tempInF = parseFloat(fInput.value);
            if (isNaN(tempInF)) { // if float number is NaN
                errorMessage.innerText = `${fInput.value} is not a number`;
                // set innerText of div as the message
                errorMessage.style.color = "red";
                // set color of text as red
                return; // return the function
            }
            // call convertFToC() function to get temperature in celsius
            const tempInC = convertFtoC(tempInF);
            cInput.value = tempInC; // set cInput input value as converted temperature

            showImage(tempInF); // call showImage() Function, this will show image
            // according to fahrenheit temperature

        } else if (cInput.value !== '') {
            // convert string to float using parseFloat
            const tempInC = parseFloat(cInput.value);
            if (isNaN(tempInC)) { // if float number is NaN
                errorMessage.innerText = `${cInput.value} is not a number`;
                // set innerText of div as this message
                errorMessage.style.color = "red";
                return; // return the function
            }
            // call convertCToF() function to get temperature in fahrenheit
            const tempInF = convertCtoF(tempInC);

            fInput.value = tempInF; // set fInput input text value as converted temperature

            showImage(tempInF); // call showImage() Function, this will show image
            // according to fahrenheit temperature
        }
    })
}
