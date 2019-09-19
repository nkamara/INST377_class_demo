const number = 24;
const string = '24';

if (number === string) {
  console.log('Number is 24');
} else {
  // a single quote used as an apostrophe is a special character, it needs to be "escaped"
  console.log('Those types don\'t match');
}
const switchDate = new Date().getDay();

if (switchDate === 0) {
  console.log('Sunday');
} else if (switchDate === 1) {
  console.log('Monday');
} else if (switchDate === 2) {
  console.log('Tuesday');
} else if (switchDate === 3) {
  console.log('Wednesday');
} else if (switchDate === 4) {
  console.log('Thursday');
} else if (switchDate === 5) {
  console.log('Friday');
} else {
  console.log('We are outside the normal stream of time');
}

switch (switchDate) {
  case 0:
    console.log('Sunday');
    break;
  case 1:
    console.log('Monday');
    break;
  default:
    console.log('We are outside the normal stream of time');
}


// The One I Actually Use In Work
// All of this is pseudocode, I've never had to use a switch statement outside of very detailed interface work

const options = {
  'option1': 'do this thing',
  'option2': 'do that thing',
  'option3': 'do the other thing'
};

function selectFromObject(defaultValue, compare) {
  return options[compare] || defaultValue;
}

const iWantSomething = selectFromObject(null, 'option1');

console.log(iWantSomething);
