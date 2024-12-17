function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a+b;
}else{
console.error("Invalid input: Operands must be numbers.");
return null;
}
}
console.log(foo(1,2));//Expected output:3
console.log(foo(1,"2"));//Expected output:Invalid input: Operands must be numbers.  null
console.log(foo("1",2));//Expected output:Invalid input: Operands must be numbers.  null
console.log(foo("1","2"));//Expected output:Invalid input: Operands must be numbers.  null