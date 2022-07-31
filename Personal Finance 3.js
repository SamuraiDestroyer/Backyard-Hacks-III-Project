const currentAmountInput = document.querySelector(".current");
const startingAmountInput = document.querySelector(".starting-amount");
const yearsInput = document.querySelector(".years");
const returnRateInput = document.querySelector(".return-rate");
const compoundInput = document.querySelector(".compound");
const savingsInput = document.querySelector(".savings");

const calculatePress = document.querySelector(".calculate-btn");

const currentBalanceValue = document.querySelector(".current-amount .value");
const totalAmountValue = document.querySelector(".total-amount .value");
const percentageSpendValue = document.querySelector(".percentage-spend .value");
const newBalanceValue = document.querySelector(".amount-left .value");
const investBalanceValue = document.querySelector(".end-balance .value");


let currentAmount = parseFloat(currentAmountInput.value);
let startingAmount = parseFloat(startingAmountInput.value);
let years = parseFloat(yearsInput.value);
let returnRate = parseFloat(returnRateInput.value);
let compound = parseFloat(compoundInput.value);
let savings = parseFloat(savingsInput.value);

let interest = returnRate/100;

let myChart4;

const displayChart4 = (currentAmount, savings, startingAmount) => {
  const ctx4 = document.getElementById('myChart5').getContext('2d');
  myChart4 = new Chart(ctx4, {
    type: "pie",
    data: {
        labels: ["Current Amount", "Savings", "Starting Amount"],
        datasets: [{
            data: [currentAmount, savings, startingAmount],
            backgroundColor: ["green", "blue", "red"],
            borderWidth: 0
        }],
      },
  });
};

const updateChart4 = (currentAmount, savings, startingAmount) => {
  myChart4.data.datasets[0].data[0] = currentAmount;
  myChart4.data.datasets[0].data[1] = savings;
  myChart4.data.datasets[0].data[2] = startingAmount;
  myChart4.update();
};

const calculateInvestment = () => {
  let investment = (startingAmount) * Math.pow((1 + (interest/compound)), compound*(years));
  return investment;
};

const updateOutputs = (investment) => {
  currentBalanceValue.innerHTML = Math.round(currentAmount);
  totalAmountValue.innerHTML = Math.round(savings + startingAmount);
  percentageSpendValue.innerHTML = Math.round(((savings + startingAmount) / currentAmount )*100);
  newBalanceValue.innerHTML = Math.round(currentAmount - savings - startingAmount);
  investBalanceValue.innerHTML = Math.round(investment);

  if(myChart4){
    updateChart4(currentAmount, savings, startingAmount);
  } else {
    displayChart4(currentAmount, savings, startingAmount);
  }
};

const refreshOutputs = () => {
  currentAmount = parseFloat(currentAmountInput.value);
  startingAmount = parseFloat(startingAmountInput.value);
  years = parseFloat(yearsInput.value);
  returnRate = parseFloat(returnRateInput.value);
  compound = parseFloat(compoundInput.value);
  savings = parseFloat(savingsInput.value);

  interest = returnRate/100;
};

const outputInit = () => {
  let investment = calculateInvestment();
  updateOutputs(investment);
};

outputInit();

calculatePress.addEventListener("click", () => {
  refreshOutputs();
  let investment = calculateInvestment();
  updateOutputs(investment);
});
