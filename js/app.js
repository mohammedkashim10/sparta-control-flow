var bool = true;
var name = 'Kashim';
var num = 1;

// IF STATEMENT
// Multiline statement
if (!num) {
  // do something
  console.log('The condition is true');
}
// Single line statement
if (!num) console.log('The condition is true');

// IF-ELSE STATEMENT
if (bool) {
  // Do something
  console.log('Condition is truthy');
} else {
  // Do something else
  console.log('Condition is falsey');
}

// IF-ELSE-IF STATEMENT
if (num === '1') {
  // Do something if first condition is met
  console.log('truthy');
} else if (num === 1) {
  // Do something else if second conditon is met
  console.log('num === 1');
} else {
  // Do something else if no condition is met
  console.log('Num is not equal to any of the conditions');
}

if (num == '1') {
  // Do something if first condition is met
  console.log('truthy');
} else if (num === 1) {
  // Do something else if second conditon is met
  console.log('num === 1');
} else {
  // Do something else if no condition is met
  console.log('Num is not equal to any of the conditions');
}

if (num === '1') {
  // Do something if first condition is met
  console.log('truthy');
} else if (num === 2) {
  // Do something else if second conditon is met
  console.log('num === 1');
} else {
  // Do something else if no condition is met
  console.log('Num is not equal to any of the conditions');
}

// YOU CAN ALSO HAVE MULTIPLE CONDITIONS USING 'AND' OR 'OR'
// OR IS DONE USING || IN BETWEEN THE CONDITIONS
// ONLY ONE CONDITION MUST BE MET FOR IT TO RUN
if (num === '1' || bool === false) {
  // Do something if first condition is met
  console.log('Condition 1');
} else if (num === 2) {
  // Do something else if second conditon is met
  console.log('Condition 2');
} else {
  // Do something else if no condition is met
  console.log('No condition met');
}

// AND IS DONE USING && IN BETWEEN THE CONDITIONS
// ALL CONDITIONS MUST BE MET FOR IT TO RUN
if (num === '1' || bool === false) {
  // Do something if first condition is met
  console.log('Condition 1');
} else if (num === 1 && bool === true) {
  // Do something else if second conditon is met
  console.log('Condition 2');
} else {
  // Do something else if no condition is met
  console.log('No condition met');
}

//SWITCH STATEMENT - ALTERNATE IF-ELSE
switch (name) {
  case 'Tim':
    console.log('Name is Tim');
    break;
  case 'Katie':
  case 'Neil':
    console.log('Name is Katie or Neil');
    break;
  case 'Jack':
    console.log('Name is Jack');
    break;
  // case 'Kashim':
  //   console.log('Name is Kashim');
    break;
  default:
    console.log('No match');
}
