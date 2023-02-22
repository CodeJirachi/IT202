window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {

   fInput.addEventListener("input", () => {
       cInput.value = "";
   })
   cInput.addEventListener("input", () => {
       fInput.value = "";
   })

   //Register Convert button's click event handler (2 points)
   convertButton.addEventListener("click", (e) => {
       e.preventDefault();

    //Handle bad input (2 points)
    //Ensure only one text field contains a value (2 points)
     if (fInput.value !== '') {
           const tempInF = parseFloat(fInput.value);
           if (isNaN(tempInF) == true) {
               errorMessage.innerText = `${fInput.value} is not a number`;
               errorMessage.style.color = "red";
               return;
             }
            else if (isNaN(tempInF) == false){
                errorMessage.innerText = "";
                const tempInC = convertFtoC(tempInF);
                cInput.value = tempInC;
                showImage(tempInF);
              }
      }
      else if (cInput.value !== '') {
           const tempInC = parseFloat(cInput.value);
           if (isNaN(tempInC) == true) {
               errorMessage.innerText = `${cInput.value} is not a number`;
               errorMessage.style.color = "red";
               return;
             }
            else if (isNaN(tempInC) == false){
              errorMessage.innerText = "";
              const tempInF = convertCtoF(tempInC);
              fInput.value = tempInF;
              showImage(tempInF);
            }
       }
   })
}

//Implement conversion functions (2 points)
function convertCtoF(degreesCelsius) {
   return (degreesCelsius * 9 / 5 + 32);
}
function convertFtoC(degreesFahrenheit) {
   return ((degreesFahrenheit - 32) * 5 / 9);
}
//-----------------------------------------

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
