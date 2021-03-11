function drinkOrder(size, drink) {
    let drinkOption;
    let sizeOption;
    let isValidSize = true;
    let isValidDrink = true;
    switch (size) {
        case "small":
            sizeOption = "small";
            break;
        case "medium":
            sizeOption = "medium";
            break;
        case "large":
            sizeOption = "large";
            break;
        default:
            isValidSize = false;
    }

    switch (drink) {
        case "cola":
            drinkOption = "Cola";
            break;
        case "lemonade":
            drinkOption = "Lemonade";
            break;
        case "orangeade":
            drinkOption = "Orangeade";
            break;
        default:
            isValidDrink = false;
    }

    if(isValidSize && isValidDrink) {
        return("You have ordered a " + sizeOption + " " + drinkOption); 
    } else if(!isValidDrink && !isValidSize) {
        return "Invalid size and drink";
    } else if(!isValidDrink) {
        return "Invalid drink";
    } else if(!isValidSize) {
        return "Invalid size";
    }
}

console.log(drinkOrder("medium", "cola"));