// define table function
const multiplicationTable = function(maxValue) {
  let table = [];
  let newRow = [];
  
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      newRow.push(i * j);
    }
    table += newRow.join(" ") + "\n";
    newRow = [];
  }
  return table;
};


// test code
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));