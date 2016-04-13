
function home(savings, costOfHome, downPayment = 20){

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // Output savings
  // console.log("Savings: " + "$" + savings);
  $("#savings").html("Total Savings: " + "$" + numberWithCommas(savings))
  // Output Cost of Home
  // console.log("Cost of Home: " + "$" + costOfHome);
  $("#costOfHome").html("Cost of Home: " + "$" + numberWithCommas(costOfHome))

  var downPaymentPercentage = downPayment / 100;

  var house = costOfHome * downPaymentPercentage;
  // Output total down payment
  // console.log("Down Payment: " + "$" + house);
  $("#downPayment").html("Down Payment: " + "$" + numberWithCommas(house) + " (" + downPayment + "%" + ")");
  // Money left over after down payment
  var leftOver = savings - house;
  var leftOverConstant = 6500;
  var monthlySavings = 2000;

  if(leftOver >= leftOverConstant){
    // console.log("Can afford: Yes")
    $("#canAfford").html("Can afford: Yes")
    // console.log("Left over in savings: " + leftOver);
    $("#leftOver").html("Left over in savings: " + "$" + numberWithCommas(leftOver))
  }else{
    // console.log("Can afford: No");
    $("#canAfford").html("Can afford: No")
    // console.log("Left over in savings: " + "$" + leftOver);
    $("#leftOver").html("Left over in savings: " + "$" + numberWithCommas(leftOver) + "<br> Must have at least " + "$" + numberWithCommas(leftOverConstant) + " left over.")
    // console.log("Must have at least $6500 left over.");

    // When will I be able to afford this price?
    // Left over in savings - 6500
    var savingsDifference = leftOverConstant - leftOver;
    var timeToSave = savingsDifference / monthlySavings;
    //console.log(savingsDifference);
    // Assume $2400 saved/month
    // Months till able to afford property
    // console.log("Able to afford in " + savingsDifference / monthlySavings + " months" + "(based on $" + numberWithCommas(monthlySavings) + " per month)");

    $("#when").html("Able to afford in " + timeToSave.toFixed(2) + " months " + "(based on saving $" + numberWithCommas(monthlySavings) + " per month)")

  }

}

function futureSavings(currentSavings, amtToSave, timeInMonths){

  var total = currentSavings + amtToSave * timeInMonths;
  console.log("Total amount in savings in " + timeInMonths + " months: " + "$" + total);

}
