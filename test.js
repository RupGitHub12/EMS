const name = 'Rupesh Shrestha';
for(var i= 0; i<10; i++){
	console.log(name);
}



let count = 1;
if(name === 'Rupesh Shrestha'){
	count += 1;
}
console.log(count);



const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
}
console.log(newArr)