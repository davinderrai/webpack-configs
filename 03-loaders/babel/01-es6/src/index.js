import { numbers } from './constants';

const evens = numbers.filter(n => n%2 === 0);
console.log(`The even numbers are: ${evens}`);
