// Salary/Income
const incomeInput = document.querySelector(".income");

// Tax Percentage
const taxInput = document.querySelector(".tax");

// Expenses
const housingInput = document.querySelector(".housing");
const utilitiesInput = document.querySelector(".utilities");
const insuranceInput = document.querySelector(".insurance");
const debtInput = document.querySelector(".debt");

// Calculate button
const calculateBtn = document.querySelector(".calculate-btn");

// Values
const taxAmountValue = document.querySelector(".tax-amount .value");
const totalExpensesValue = document.querySelector(".total-expenses .value");
const totalPercentageValue = document.querySelector(".total-percentage .value");
const amountLeftValue = document.querySelector(".amount-left .value");

// Inputs for the user
let income = parseFloat(incomeInput.value);
let tax = parseFloat(taxInput.value);
let housing = parseFloat(housingInput.value);
let utilities = parseFloat(utilitiesInput.value);
let insurance = parseFloat(insuranceInput.value);
let debt = parseFloat(debtInput.value);

let taxPercentage = tax/100;
let myChart;
let myChart1;

const displayChart = (income, taxAmount, totalExpenses) => {
  const ctx = document.getElementById('myChart').getContext('2d');
  myChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: ["Income", "Tax Amount", "Total Expenses"],
        datasets: [{
            data: [income, taxAmount, totalExpenses],
            backgroundColor: ["green", "blue", "red"],
            borderWidth: 0
        }],
      },
  });
};

const displayChart1 = (housing, utilities, insurance, debt) => {
  const ctx1 = document.getElementById('myChart2').getContext('2d');
  myChart1 = new Chart(ctx1, {
    type: "pie",
    data: {
        labels: ["Housing", "Utilities", "Insurance", "Debt"],
        datasets: [{
            data: [housing, utilities, insurance, debt],
            backgroundColor: ["black", "orange", "yellow", "purple"],
            borderWidth: 0
        }],
      },
  });
};

const updateChart = (income, taxAmount, totalExpenses) => {
  myChart.data.datasets[0].data[0] = income;
  myChart.data.datasets[0].data[1] = taxAmount;
  myChart.data.datasets[0].data[2] = totalExpenses;
  myChart.update();
};

const updateChart1 = (housing, utilities, insurance, debt) => {
  myChart1.data.datasets[0].data[0] = housing;
  myChart1.data.datasets[0].data[1] = utilities;
  myChart1.data.datasets[0].data[2] = insurance;
  myChart1.data.datasets[0].data[3] = debt;
  myChart1.update();
};

// Calculating the tax amount
const calculateTaxAmount = () => {
  refreshInputValues();

  let taxAmount = income * (taxPercentage);
  return taxAmount;
}

// Calculating the total expenses
const calculateTotalExpenses = () => {
  refreshInputValues();

  let totalExpenses = housing + utilities + insurance + debt;
  return totalExpenses;
}

// Updating the output values
const updateData = (taxAmount, totalExpenses) => {
  taxAmountValue.innerHTML = Math.round(taxAmount);

  totalExpensesValue.innerHTML = Math.round(totalExpenses);

  totalPercentageValue.innerHTML = Math.round(((totalExpenses+taxAmount)/income)*100);

  let amountLeft = Math.round(income - taxAmount - totalExpenses);
  amountLeftValue.innerHTML = amountLeft;

  if (myChart) {
    updateChart(income, taxAmount, totalExpenses);
  } else {
    displayChart(income, taxAmount, totalExpenses);
  }

  if(myChart1){
    updateChart1(housing, utilities, insurance, debt);
  } else {
    displayChart1(housing, utilities, insurance, debt);
  }
}

// Refreshing the input values
const refreshInputValues = () => {
   income = parseFloat(incomeInput.value);
   tax = parseFloat(taxInput.value);
   housing = parseFloat(housingInput.value);
   utilities = parseFloat(utilitiesInput.value);
   insurance = parseFloat(insuranceInput.value);
   debt = parseFloat(debtInput.value);
   taxPercentage = tax/100;
}

const init = () => {
  let taxAmount = calculateTaxAmount();
  let totalExpenses = calculateTotalExpenses();
  updateData(taxAmount, totalExpenses);
}

init();

calculateBtn.addEventListener("click", () => {
  refreshInputValues();
  let taxAmount = calculateTaxAmount();
  let totalExpenses = calculateTotalExpenses();
  updateData(taxAmount, totalExpenses);
});
