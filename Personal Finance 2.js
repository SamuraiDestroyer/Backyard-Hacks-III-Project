// Current Amount
const currentInput = document.querySelector(".current");

// Food Budget
const foodInput = document.querySelector(".food");

// Transportation Budget
const transportationInput = document.querySelector(".transportation");

// Clothing Budget
const clothingInput = document.querySelector(".clothing");

// Healthcare Budget
const healthcareInput = document.querySelector(".healthcare");

// Household Items/Supplies Budget
const suppliesInput = document.querySelector(".supplies");

// Personal Budget
const personalInput = document.querySelector(".personal");

// Education Budget
const educationInput = document.querySelector(".education");

// Gifts/Donations Budget
const giftsInput = document.querySelector(".gifts");

// Entertainment Budget
const entertainmentInput = document.querySelector(".entertainment");

// Calculate button
const calculateButton = document.querySelector(".calculate-btn");

// Values
const currentAmountValue = document.querySelector(".current-amount .value");
const totalBudgetValue = document.querySelector(".total-budget .value");
const percentageBudgetValue = document.querySelector(".percentage-budget .value")
const amountLeftBudgetValue = document.querySelector(".amount-left .value");

// Inputs for the user
let current = parseFloat(currentInput.value);
let food = parseFloat(foodInput.value);
let transportation = parseFloat(transportationInput.value);
let clothing = parseFloat(clothingInput.value);
let healthcare = parseFloat(healthcareInput.value);
let supplies = parseFloat(suppliesInput.value);
let personal = parseFloat(personalInput.value);
let education = parseFloat(educationInput.value);
let gifts = parseFloat(giftsInput.value);
let entertainment = parseFloat(entertainmentInput.value);

let myChart2;
let myChart3;

const displayChart3 = (food, transportation, clothing, healthcare, supplies, personal, education, gifts, entertainment) => {
  const ctx3 = document.getElementById('myChart4').getContext('2d');
  myChart3 = new Chart(ctx3, {
    type: "pie",
    data: {
        labels: ["Food Budget", "Transportation Budget", "Clothing Budget", "Medical/Healthcare Budget", "Household Item/Supplies Budget", "Personal Budget", "Education Budget", "Gifts/Donations Budget", "Entertainment Budget"],
        datasets: [{
            data: [food, transportation, clothing, healthcare, supplies, personal, education, gifts, entertainment],
            backgroundColor: ["red", "orange", "yellow", "purple", "pink", "black", "brown", "gold", "silver"],
            borderWidth: 0
        }],
      },
  });
};

const updateChart3 = (food, transportation, clothing, healthcare, supplies, personal, education, gifts, entertainment) => {
  myChart3.data.datasets[0].data[0] = food;
  myChart3.data.datasets[0].data[1] = transportation;
  myChart3.data.datasets[0].data[1] = clothing;
  myChart3.data.datasets[0].data[1] = healthcare;
  myChart3.data.datasets[0].data[1] = supplies;
  myChart3.data.datasets[0].data[1] = personal;
  myChart3.data.datasets[0].data[1] = education;
  myChart3.data.datasets[0].data[1] = gifts;
  myChart3.data.datasets[0].data[1] = entertainment;
  myChart3.update();
};

const displayChart2 = (current, totalBudget) => {
  const ctx2 = document.getElementById('myChart3').getContext('2d');
  myChart2 = new Chart(ctx2, {
    type: "pie",
    data: {
        labels: ["Current Amount", "Total Budget"],
        datasets: [{
            data: [current, totalBudget],
            backgroundColor: ["green", "blue"],
            borderWidth: 0
        }],
      },
  });
};

const updateChart2 = (current, totalBudget) => {
  myChart2.data.datasets[0].data[0] = current;
  myChart2.data.datasets[0].data[1] = totalBudget;
  myChart2.update();
};


const calculateTotalBudget = () => {
  refreshInputOutputs();

  let totalBudget = food + transportation + clothing + healthcare + supplies + personal + education + gifts + entertainment;
  return totalBudget;
};

// Updating the output values
const updateDataValues = (totalBudget) => {
  currentAmountValue.innerHTML = Math.round(current);

  totalBudgetValue.innerHTML = Math.round(totalBudget);

  percentageBudgetValue.innerHTML = Math.round((totalBudget/current)*100);

  amountLeftBudgetValue.innerHTML = Math.round(current - totalBudget);

  if(myChart2){
    updateChart2(current, totalBudget);
  } else {
    displayChart2(current, totalBudget);
  }

  if(myChart3){
    updateChart3(food, transportation, clothing, healthcare, supplies, personal, education, gifts, entertainment);
  } else {
    displayChart3(food, transportation, clothing, healthcare, supplies, personal, education, gifts, entertainment);
  }
};

// Refreshing the input values
const refreshInputOutputs = () => {
   current = parseFloat(currentInput.value);
   food = parseFloat(foodInput.value);
   transportation = parseFloat(transportationInput.value);
   clothing = parseFloat(clothingInput.value);
   healthcare = parseFloat(healthcareInput.value);
   supplies = parseFloat(suppliesInput.value);
   personal = parseFloat(personalInput.value);
   education = parseFloat(educationInput.value);
   gifts = parseFloat(giftsInput.value);
   entertainment = parseFloat(entertainmentInput.value);
};

const resultinit = () => {
  let totalBudget = calculateTotalBudget();
  updateDataValues(totalBudget);
}

resultinit();

calculateButton.addEventListener("click", () => {
  refreshInputOutputs();
  let totalBudget = calculateTotalBudget();
  updateDataValues(totalBudget);
});
