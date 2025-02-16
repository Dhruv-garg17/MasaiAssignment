const createBankAccount = (initialBalance) => {
  let balance = initialBalance; 

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return balance;
      }
      return "Invalid deposit amount.";
    },

    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return balance;
      }
      return "Insufficient funds or invalid amount.";
    },

    getBalance() {
      return balance;
    }
  };
};

const account = createBankAccount(100);

console.log(account.deposit(50));   
console.log(account.withdraw(30));  
console.log(account.getBalance());  
console.log(account.withdraw(200)); 
