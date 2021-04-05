console.log('utils.js is running');
// export -> default exports - named exports
// zero or one can be default export


const square = x => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export {square, add, subtract as default};  // 1. option for named exports - default export

// export const square = x => x * x; // 2.option for named

// 2. option

/* 
export const square = x => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export default subtract;

veya

export default (a, b) => a - b;

çünkü export default statement değil expression alabilir isimsiz olabilir 
nasıl olsa onu istediğim isimle çağırabilirim
*/
