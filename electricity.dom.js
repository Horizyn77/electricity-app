// DOM element(s) references

//getting references to various elements
const topUpBtn = document.querySelector(".topupNow");
const unitsAvailableDisplay = document.querySelector(".unitsAvailable")
const totalAmountSpentDisplay = document.querySelector(".totalAmount");
const totalUnits = document.querySelector(".totalUnits");
const useBtn = document.querySelector(".useNow");
// Factory Function instance 
const electricity =  Electricity();

// if localStorage doesn't exist create it and set it to the counts of the variables stored in the factory function

if(!localStorage["unitsAvail"] && !localStorage["unitsBought"] && !localStorage["amountSpent"]) {
    localStorage["unitsAvail"] = electricity.getUnitsAvailable();
    localStorage["unitsBought"] = electricity.totalUnitsBought();
    localStorage["amountSpent"] = electricity.totalAmountSpent();
}

// When localStorage has already been initialized run the factory function that resets the count
// variables stored in the factory function to that of localStorage

if (localStorage["unitsAvail"] && localStorage["unitsBought"] && localStorage["amountSpent"]) {
    electricity.setLocalStorage();
    unitsAvailableDisplay.innerText = localStorage["unitsAvail"];
    totalAmountSpentDisplay.innerText = localStorage["amountSpent"];
    totalUnits.innerText = localStorage["unitsBought"];

}

// DOM events here 

function elecCalculate() {
    
    //get the checked button
    const radioBtn = document.querySelector("input[name='buyElectricity']:checked");
    //if button is checked store the selected button's id in a variable
    if(radioBtn) {
        var topUpSelected = radioBtn.id;
    }
    // check whether the selected buttons id equals a specific value and then call the topUpElectricity
    //factory function with the right amount
    if (topUpSelected === "ten") {
        electricity.topUpElectricity(10);
    } else if (topUpSelected === "twenty") {
        electricity.topUpElectricity(20);
    } else if (topUpSelected === "fifty") {
        electricity.topUpElectricity(50)
    } else if (topUpSelected === "advance") {
        electricity.topUpElectricity("advance")
    }


    //update the DOM with the values that are returned from the factory function
    unitsAvailableDisplay.innerText = electricity.getUnitsAvailable();
    totalAmountSpentDisplay.innerText = electricity.totalAmountSpent();
    totalUnits.innerText = electricity.totalUnitsBought();
}

function useElecAppliances() {

    //get the checked radio button
    const radioBtnAppliances = document.querySelector("input[name='useElectricity']:checked");


    //if the button checked is true, get the value of the checked button
    if(radioBtnAppliances) {
        var applianceSelected = radioBtnAppliances.value;
    }
// run the factory function that uses applliances and pass in the value of the radio button selected
    electricity.useAppliance(applianceSelected)

    //update the dom for the units available that changed after using an appliance
    unitsAvailableDisplay.innerText = electricity.getUnitsAvailable();

}

//add event listeners for the buttons being clicked and run the correct function

topUpBtn.addEventListener("click", elecCalculate)
useBtn.addEventListener("click", useElecAppliances)