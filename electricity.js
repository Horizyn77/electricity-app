function Electricity() {

    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10,
        'Kettle': 5,
        'TV': 3,
        'Fridge': 13
    };
// variables to store various counts
    let elecTopUpAvailable = 0;

    let unitsBought = 0;

    let unitsAvailable = 0;

    let advTaken;

    let advancedOwed = 0;

    // function topUpElectricity(amount) {
    //     //if passed with advance run advance code
    //     if (amount === "advance") {
    //     // if there is no existing advance meaning false top up
    //     // electricity with 30 and set advTaken variable to true
    //         if (advTaken !== true) {
    //             elecTopUpAvailable += 30;
    //             advTaken = true;
    //             advancedOwed = 30;
    //         }

    //         // else if not passed with advance, add the amount passed
    //         // in to the elecTopUpAvailable variable
    //     } else {
    //         elecTopUpAvailable += amount;
    //         //then if there is an existing advance to still be paid
    //         // and the amount is more than 30, decrement the top up available by 30
    //         if (advTaken === true && amount >= 30) {
    //             elecTopUpAvailable -= 30;
    //             advTaken = false;
    //             advancedOwed -= 30;
    //         } else if (advTaken === true && amount < 30) {
    //             advancedOwed -= amount;
    //         }
    //     }

    //     // convert the top up amount to units
    //     unitsAvailable = elecTopUpAvailable * 0.7;
    // }

    function topUpElectricity(amount) {
 //checking if amount equals advance and advance hasn't been taken
 
        if (amount === "advance" && !advTaken) {
            //topup by 30 and set advTaken to true and advancedOwed to 30
            elecTopUpAvailable += 30;
            advTaken = true;
            advancedOwed = 30;
        } else if (advTaken && advancedOwed > 0) {
            //else if advTaken is true and advanced owed is more than 0 subtract amount from advanced owed
            advancedOwed -= amount;
        } else if (!advTaken && advancedOwed <= 0) {
            elecTopUpAvailable += amount;
            advTaken = false;
        }
        //conversion of rand amounts into units
        unitsBought = elecTopUpAvailable * 0.7;
        unitsAvailable = unitsBought;
        //setting localStorage to store values of count variables
        localStorage["unitsAvail"] = unitsAvailable;
        localStorage["unitsBought"] = unitsBought;
        localStorage["amountSpent"] = elecTopUpAvailable;
    }

    function getUnitsAvailable() {
        return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
//looping through appliances object and checking
        for (let app in appliances) {
            // value passed in equals the same as appliance in object
            if (appliance == app) {

                //then subtract the value of the appliance number from unitsAvailable
                unitsAvailable -= appliances[app];
            }
        }  
// localStorage updated with value from unitsAvailable
        localStorage["unitsAvail"] = unitsAvailable;
    }
    

    function advanceTaken() {
        return advTaken;
    }
//returning amount spent
    function totalAmountSpent() {
        return elecTopUpAvailable;
    }
// returning amount of units bought
    function totalUnitsBought() {
        return unitsBought;    
    }


    // resetting the count variables to that of localStorage so that
    //they are reflected upon page reload
    function setLocalStorage() {
        elecTopUpAvailable = Number(localStorage["amountSpent"])
        unitsBought = Number(localStorage["unitsBought"])
        unitsAvailable = Number(localStorage["unitsAvail"])
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought,
        setLocalStorage

    }
}