const currencyDenominations = ['twenty', 'ten', 'five', 'two', 'one', 'quarter', 'dime', 'nickel', 'penny'];
const currencyValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];


const calculateChange = function(total, cash) {
  let changeObj = {};
  let len = currencyValue.length;
  let change = cash - total;
  for (let i = 0; i < len; i++) {
    if (change > currencyValue[i]) {
      changeObj[currencyDenominations[i]] = Math.floor(change / currencyValue[i]);
      change = change % currencyValue[i];
    }
  }

  return changeObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));