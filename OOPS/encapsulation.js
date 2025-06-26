//is the process of wrapping the data (variables) and the code (methods) together into a single unit,
// such as restricting access to any member of an object.

class BankAccount {
  #balance = 0; // private

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
// acc.#balance => ❌ SyntaxError (it's private)
