export const pi = 3.14;
//const a = 2.9;
//export default a;

//function export

// export function myFunc() {
//     console.log("I am myFunc()")
// }

//but what if we want to export this function by default. We can default only one thing at a time. 
//so we have to export a using named export in this case.

export default function myFunc() {
    console.log("I am myFunc()")
}
