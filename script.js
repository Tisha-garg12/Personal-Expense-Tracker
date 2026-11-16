const balance = document.getElementById("bal");
const moneyPlus = document.getElementById("money-plus");
const moneyMinus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const textInput = document.getElementById("text");
const amountInput = document.getElementById("amount");

const STORAGE_KEY = "Transactions";

function getTransactionsFromStorage() {
    try {
        const savedTransactions = localStorage.getItem(STORAGE_KEY);

        if (!savedTransactions) return [];

        const parsedTransactions = JSON.parse(savedTransactions);

        if (!Array.isArray(parsedTransactions)) return [];

        // Ignore malformed entries
        return parsedTransactions.filter((transaction) =>
            transaction &&
            Number.isFinite(Number(transaction.amount)) &&
            typeof transaction.text === "string" &&
            transaction.id !== undefined
        );

    } catch (error) {
        console.error("Could not load saved transactions:", error);
        return [];
    }
}

let transactions = getTransactionsFromStorage();

function generateID() {
    return `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
}

function formatCurrency(value) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2
    }).format(value);
}

function addTransaction(event) {
    event.preventDefault();

    const description = textInput.value.trim();
    const transactionAmount = Number(amountInput.value);

    if (!description) {
        alert("Please enter a transaction description.");
        textInput.focus();
        return;
    }

    if (amountInput.value.trim() === "" || !Number.isFinite(transactionAmount) || transactionAmount === 0) {
        alert("Please enter a valid non-zero amount.");
        amountInput.focus();
        return;
    }

    const transaction = {
        id: generateID(),
        text: description,
        amount: transactionAmount
    };

    transactions.push(transaction);
    updateLocalStorage();
    init();
    form.reset();
    textInput.focus();
}

function addTransactionDOM(transaction) {
    const item = document.createElement("li");
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");

    const description = document.createElement("span");
    description.className = "transaction-description";
    description.textContent = transaction.text;

    const amount = document.createElement("span");
    amount.className = "transaction-amount";

    const sign = transaction.amount < 0 ? "-" : "+";

    amount.textContent =
        `${sign}${formatCurrency(Math.abs(Number(transaction.amount)))}`;

    // Create accessible delete button
    const deleteButton = document.createElement("button");

    deleteButton.type = "button";
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";

    deleteButton.setAttribute(
        "aria-label",
        "Delete " + transaction.text
    );

    deleteButton.addEventListener(
        "click",
        () => removeTransaction(transaction.id)
    );

    item.append(description, amount, deleteButton);
    list.prepend(item);
}

function removeTransaction(id) {
    transactions = transactions.filter((transaction) => transaction.id !== id);
    updateLocalStorage();
    init();
}

function updateValues() {
    const income = transactions
        .map((transaction) => Number(transaction.amount))
        .filter((amount) => amount > 0)
        .reduce((total, amount) => total + amount, 0);

    const expense = transactions
        .map((transaction) => Number(transaction.amount))
        .filter((amount) => amount < 0)
        .reduce((total, amount) => total + Math.abs(amount), 0);

    const total = income - expense;

    balance.textContent = formatCurrency(total);
    moneyPlus.textContent = formatCurrency(income);
    moneyMinus.textContent = formatCurrency(expense);
}

function updateLocalStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
    } catch (error) {
        console.error("Could not save transactions:", error);
        alert("Your browser could not save the transactions. Check available storage.");
    }
}

function init() {
    list.innerHTML = "";

    if (transactions.length === 0) {
        const emptyMessage = document.createElement("li");
        emptyMessage.className = "empty-state";
        emptyMessage.textContent = "No transactions yet. Add your first transaction!";
        list.appendChild(emptyMessage);
    } else {
        transactions.forEach(addTransactionDOM);
    }

    updateValues();
}

form.addEventListener("submit", addTransaction);
init();
