
const account = {
  accountName: "Erica Zandelin",
  getName: function () {
    alert(this.accountName);
    atm();
  },
  balance: 100,
  getBalance: function () {
    alert(this.balance);
    atm();
  },
  deposit: function () {
    let insert = parseFloat(prompt("How much would you like to deposit?"));
    if (insert > 0 ) {
      this.balance += insert;
      this.getBalance();

    } else if (isNaN) {
      this.accountError();
    }
  },
  withdrawal: function () {
    let withdraw = parseFloat(prompt("How much would you like to withdrawl?"));
    if (withdraw > 0) {
      this.balance -= withdraw;
      this.getBalance();

    } else if (isNaN) {
      this.accountError();
    } //Förstår att det inte var riktigt såhär man skulle göra, men hoppas det är ok ändå. Det är vad jag löst och måste gå vidare med våra uppgifter nu hehe!
  },

   errorMessage: "Invalid number, please try again.",
  accountError: function () {
    alert(this.errorMessage);
    atm();
  },
  exitAccount: function () {
    window.close();
  },
};


function atm() {
  let menu = parseInt(
    prompt(
      "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
    )
  );

  if (menu === 1) {
    console.log(account.getBalance());
    
  } else if (menu === 2) {
      console.log(account.deposit());
    
  } else if (menu === 3) {
    console.log(account.withdrawal());

  } else if (menu === 4) {
      console.log(account.getName());
    
  } else if (menu === 5) {
    //console.log(account.exitAccount());

  } else {
    alert("Only valid numbers are 1-5");
    atm();
  }
}

atm();


// You should also do some research why parseFloat() is used here
// answer by making a comment in the code.

// --> ANSWER by using parseInt or parseFloat you convert strings to numbers, which we want here. You use parseFloat when
// an answer could include a decimal --> not a whole number --> 1,52:- and not only 1.00! 
