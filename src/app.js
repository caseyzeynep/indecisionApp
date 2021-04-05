// import './utils.js'
// default exportlar {} dışında yer alıyor ilgili dosyada maximum bir tane default olduğunu bildiğim için 
// onu istediğim isimle import edebilirim

/*import anything, {square, add} from './utils.js'; // anything = subtract

console.log('app.js is running!!!2');
console.log(square(4));
console.log(add(4, 9));
console.log(anything(4, 1)); */

// import validator from "validator";

// console.log(validator.isEmail('test'));


import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss';



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));


