// calculating milk production daily

var productionShedA = 510 ;
var productionShedB = 308;
var productionShedC = 486;
var productionShedD = 572;
var shedProduction  = [productionShedA ,productionShedB , productionShedC, productionShedD];
var shedName  = ["shedA" , "shedB", "shedC" ,"shedD"];
  
//calculate total shed production 

function calculateTotalProduction(shedProduction ,shedName) {
    var totalProduction = 0;
    for (var i =0; i<shedProduction.length; i++){
        console.log("Your production in " + shedName[i] + " is " + shedProduction[i] + " litres per day");
    }

}

calculateTotalProduction(shedProduction,shedName);

//calculating total amount a week and in a year

var weeklyIncome = 590940;
var yearlyIncome  = 30181330;
var  totalIncome  =["weeklyIncome" ,"yearlyIncome"];

function calculateTotalIncome(weeklyIncome ,yearlyIncome);{
       var calculateTotalIncome = 0;
       for ( var i=0; <totalProduction.length; i++)
       console.log("Your  income  will  be"  +  weeklyIncome[i]   "and"    yearlyIncome[i]);
}
    


calculateTotalIncome(weeklyIncome,yearlyIncome);

//calculate total income in a leap year

var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var daymonth= [ 31,29,31,30,31,30,31,31,30,31,30,31];
  var totalKshs =["2617020","2448180","2617020","2532600", "2617020","2532600","2617020","2617020", "2532600","2617020","2532600","2617020"];
  for (i = 0; i<months.length; i++){
  console.log('Your income for ' + months[i] +  "  is "  +  totalKshs[i]  +  "Kshs" );
  }



