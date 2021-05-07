// BANK ACCOUNT

// Start by creating the object and the properties. You can leave the functions empty for now if you want.
// You'll find all the information about what properties the object should have in the readme file.

// In the deposit and withdrawal function use this code to show the prompt
//parseFloat(prompt("Select a choice 1.) See Balance 2.) Make a deposit 3.) Make a withdrawl 4.) Get account name 5.) Exit"));

// Youtube tutorial

//var withdrawal = window.prompt("How much would you like to withdrawl?");

//document.write("You had" + " " + balance + " " + "now you have" + " " + withdrawal);

// HÄR ÄR ETT SÄTT SOM FUNGERAR FÖR FÅ FRAM KALK - KÖR PÅ DETTA FÖR GÖRA DET LÄTT! 
// Svar på fråga: 
//var menu = parseFloat(prompt("Select a choice 1.) See Balance 2.) Make a deposit 3.) Make a withdrawl 4.) Get account name 5.) Exit"));

/*
const account = {
  accountName: "Erica Zandelin",
  deposit: function () {

    this.deposit();
  },
};
*/



/*
var person = {
  firstName: "Erica",
  lastName: "Zandelin",
  id: 1993,
  fullName: function() {
    return this.firstName + " " + this.lastName + " " + this.id;
  } 
};*/





// You need to change the message of course. You should also do some research why parseFloat() is used here
// answer by making a comment in the code.

// --> ANSWER by using parseInt or parseFloat you convert strings to numbers, which we want here. You use parseFloat when
// an answer could include a decimal --> not a whole numer --> 1,52:- and not only 1.00! 


// In the deposit and withdrawal function you also need to handle som potential errors.
// To handle one of the potential error you can use this piece of code
//isNaN(accountName||); // <-- TA BORT // DENNA SKALL ANVÄNDAS
// Is nan fast number
// && = och || = eller dvs använd eller i detta
// you need to change the variableName to your actual variable.
// you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// Do you know what operator you should use? 

// In the accountError and accountExit function you can use this to show a message to the user:
//alert("your code here and maybe properties");
// of course you need to put a proper message and you might need to display some of the properties.¨



/*
const account = {
  accountName: "Erica Zandelin",
  getName: function () {
    return this.accountName;
  },
  balance: 100,
  getBalance: function () {
    return this.balance;
  },
  deposit: function (insert) {
    if (insert > 0) {
      this.balance = this.balance + insert;
      return insert;
    }
  },
  withdrawal: function (cashOut) {
    {
      this.balance = this.balance - cashOut;
      return cashOut;
    }
  },
  getAccountName: function () {
    return this.getName();
  },
  accountError: function () {},
  exitAccount: function () {},
};
*/

var balance = 100;
let accountName = "Erica Zandelin";

// Meny funktion/bankomat

function atm() {
  let menu = prompt("1.) See balance 2.) Make a deposit 3.) Make a withdrawl 4.) Get account name 5.) Exit");
  if(menu === "1") {
   alert("Your current balance is" + " " + balance);
    location.reload();

  } else if (menu === "2") {
    var thirdNumber = parseFloat(prompt("Make a deposit"))
    var newBalance = thirdNumber + balance;
    alert("Your balance is now" + " " + newBalance);
    location.reload();

  }  else if (menu == "3") {
    var thirdNumber = parseFloat(prompt("Make a deposit"))
    var withdrawBalance = thirdNumber - balance;
    alert("Your balance is" + " " + withdrawBalance);
    location.reload();
  
  } else if (menu == "4") {
    alert("This is your name" + " " + accountName);
    location.reload();
  
  } else if (menu == "5") {
    alert(window.confirm("Sure you want to leave?"));
    window.close();
    
  } else {
    alert("Only valid numbers are 1-5");
    location.reload();
  }

} 

atm();



/*
function withdrawlMoney(amount){
	var balance = 2000;
	if (amount % 5 != 0){
		alert('Incorrect Withdrawal Amount (enter only multiple of 5)');
		return false;
	}else	if(amount >= balance){
		alert('Insufficient Funds');
		return false;
	}
	balance = balance - amount - 0.50;
	alert('Successful Transaction! \n Available Balance is: Rs '+balance);
}
*/
// if (isNaN(deposit) || deposit === '')
//if (isNaN(withdrawal) || withdrawal === '') 

/*

var balance = 100.0; //set initial balance.

function get_balance() {
  alert('Your current balance is: '+balance);
  atm();
}

function make_deposit() {
  var deposit = parseFloat(prompt('How much would you like to deposit?'));
  if (isNaN(deposit) || deposit === '') {
    alert('Error: please enter a number!');
    make_deposit();
  } else {
    balance += deposit;
    get_balance();
  }
}

function make_withdrawal() {
  var withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
  if (isNaN(withdrawal) || withdrawal === '') {
    alert('Error: please enter a number!');
    make_withdrawal();
  } else {
    balance -= withdrawal;
    get_balance();
  }
}

function error() {
  alert('Error: accepted numbers are 1 through 4.');
  atm();
}

function exit() {
  var confirm_leave = confirm('You have selected exit.');
  if (confirm_leave) {
    window.close();
  } else {
    atm();
  }
}

function atm() {

  var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.

  if (choice === 1) {
    get_balance();
  } else if (choice === 2) {
    make_deposit();
  } else if (choice === 3) {
    make_withdrawal();
  } else if (choice === 4) {
    exit();
  } else {
    error();
  }
}

atm();

*/