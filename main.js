function increment(x){
    x++;
}
let y=5;
increment(y);
console.log(y);

function increment2(obj){
    obj.value++
}
let obj={value:100}
increment2(obj)
console.log(obj.value);

arr=[2,3,4,5]
const newArr=arr.map(n=>n*2)
console.log(newArr);

const newEvenArr=arr.filter(item=>item%2==0)
console.log(newEvenArr);


function setTimeoutPromise(delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) return reject("Delay must be greater than 0")
  
      setTimeout(() => {
        resolve(`You waited ${delay} milliseconds`)
      }, delay)
    })
  }
  doStuff()
  async function doStuff() {
    const msg1 = await setTimeoutPromise(1000)
    console.log(msg1)
    console.log("First Timeout")
  
    const msg2 = await setTimeoutPromise(2000)
    console.log(msg2)
    console.log("Second Timeout")
  }  