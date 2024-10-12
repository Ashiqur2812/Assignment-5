let sum = 0;
let add = 0;
let join = 0;

function getInputValueById(id) {
  return parseFloat(document.querySelector(id).value);
}

function removeElementValueById(id) {
  return document.querySelector(id).classList.remove("hidden");
}

function addElementValueById(id) {
  return document.querySelector(id).classList.add("hidden");
}

// first functionality

document.querySelector("#button-one").addEventListener("click", function () {
  const inputValue = getInputValueById("#input-one");
  const addMoney = document.querySelector("#money-one");
  const remainingBalance = document.querySelector("#remaining-balance");
  const currentBalance = parseFloat(remainingBalance.textContent);

  if (inputValue <= 0 || isNaN(inputValue)) {
    document.querySelector("#input-one").value = "";
    return alert("Invalid Operator");
  }

  if (inputValue > currentBalance) {
    document.querySelector("#input-one").value = "";
    return alert("You have not enough money to donate");
  }

  sum += inputValue;
  addMoney.textContent = sum;
  document.querySelector("#input-one").value = "";

  if (currentBalance > 0) {
    remainingBalance.textContent = currentBalance - inputValue;

    const descriptionOne = document.querySelector("#description-one");
    const listOne = document.createElement("div");
    listOne.className = "border-2 border-gray-200 px-8 py-8 mt-8 rounded-2xl";
    listOne.innerHTML = `
    <p class='text-lg font-bold'>${inputValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
    <p class='text-md text-gray-500'>Date: ${new Date().toString()}</p>
    `;
    descriptionOne.appendChild(listOne);
    return alert(`You have donated ${inputValue} Tk.`);
  }
});

// Second functionality

document.querySelector("#button-two").addEventListener("click", function () {
  const inputValue = getInputValueById("#input-two");
  const addMoney = document.querySelector("#money-two");
  const remainingBalance = document.querySelector("#remaining-balance");
  const currentBalance = parseFloat(remainingBalance.textContent);

  if (inputValue <= 0 || isNaN(inputValue)) {
    document.querySelector("#input-two").value = "";
    return alert("Invalid Operator");
  }

  if (inputValue > currentBalance) {
    document.querySelector("#input-two").value = "";
    return alert("You have not enough money to donate");
  }

  add += inputValue;
  addMoney.textContent = add;
  document.querySelector("#input-two").value = "";

  if (currentBalance > 0) {
    remainingBalance.textContent = currentBalance - inputValue;

    const descriptionTwo = document.querySelector("#description-two");
    const listTwo = document.createElement("div");
    listTwo.className = "border-2 border-gray-200 px-8 py-8 mt-8 rounded-2xl";
    listTwo.innerHTML = `
    <p class='text-lg font-bold'>${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p class='text-md text-gray-500'>Date: ${new Date().toString()}</p>
    `;
    descriptionTwo.appendChild(listTwo);

    return alert(`You have donated ${inputValue} Tk.`);
  }
});

// Third Functionality

document.querySelector("#button-three").addEventListener("click", function () {
  const inputValue = getInputValueById("#input-three");
  const addMoney = document.querySelector("#money-three");
  const remainingBalance = document.querySelector("#remaining-balance");
  const currentBalance = parseFloat(remainingBalance.textContent);

  if (inputValue <= 0 || isNaN(inputValue)) {
    document.querySelector("#input-three").value = "";
    return alert("Invalid Operator");
  }

  if (inputValue > currentBalance) {
    document.querySelector("#input-three").value = "";
    return alert("You have not enough money to donate");
  }

  join += inputValue;
  addMoney.textContent = join;
  document.querySelector("#input-three").value = "";

  if (currentBalance > 0) {
    remainingBalance.textContent = currentBalance - inputValue;

    const descriptionThree = document.querySelector("#description-three");
    const listThree = document.createElement("div");
    listThree.className = "border-2 border-gray-200 px-8 py-8 mt-8 rounded-2xl";
    listThree.innerHTML = `
    <p class='text-lg font-bold'>${inputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
    <p class='text-md text-gray-500'>Date: ${new Date().toString()}</p>
    `;
    descriptionThree.appendChild(listThree);

    return alert(`You have donated ${inputValue} Tk.`);
  }
});

// Donation to History functionality

const btnHistory = document.querySelector("#btn-history");
btnHistory.addEventListener("click", function () {
  btnHistory.classList.add("bg-primary");
  btnHistory.classList.remove("bg-white", "border-gray-200", "text-gray-600");

  const btnDonation = document.querySelector("#btn-donation");
  btnDonation.classList.remove("bg-primary");
  btnDonation.classList.add("bg-white", "border-gray-200", "text-gray-600");

  addElementValueById("#open");

  removeElementValueById("#description-one");

  removeElementValueById("#description-two");

  removeElementValueById("#description-three");
});

// History to Donation functionality

const btnDonation = document.querySelector("#btn-donation");
btnDonation.addEventListener("click", function () {
  btnDonation.classList.add("bg-primary");
  btnDonation.classList.remove("bg-white", "border-gray-200", "text-gray-600");

  const btnHistory = document.querySelector("#btn-history");
  btnHistory.classList.remove("bg-primary");
  btnHistory.classList.add("bg-white", "border-gray-200", "text-gray-600");

  removeElementValueById("#open");

  addElementValueById("#description-one");

  addElementValueById("#description-two");

  addElementValueById("#description-three");
});
