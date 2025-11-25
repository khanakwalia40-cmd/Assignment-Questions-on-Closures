function createBankAccount() {
  let balance = 0;
  let transactionHistory = [];

  function deposit(amount) {
    balance += amount;
    transactionHistory.push({ type: "deposit", amount, balance });
    console.log(`Deposited: ${amount}`);
  }

  function withdraw(amount) {
    if (amount <= balance) {
      balance -= amount;
      transactionHistory.push({ type: "withdraw", amount, balance });
      console.log(`Withdrawn: ${amount}`);
    } else {
      transactionHistory.push({ type: "withdraw", amount, balance, status: "failed" });
      console.log("Insufficient balance");
    }
  }

  function getBalance() {
    console.log(`Current balance: ${balance}`);
    return balance;
  }

  function getTransactionHistory() {
    return transactionHistory.slice();
  }

  return {
    deposit,
    withdraw,
    getBalance,
    getTransactionHistory
  };
}

// Example Usage:
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log(account.getTransactionHistory());
