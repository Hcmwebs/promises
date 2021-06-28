const value = 4;

const promise = new Promise((resolve, reject) => {
  const randomNum = Math.floor(Math.random() * 5);
  console.log(randomNum)

  if( randomNum === value) {
    resolve('Congrats! You guessed the correct number')

  } else{

    reject('Oops! Wrong number! Please, try again')
  }


})
console.log(promise);

promise.then((data) => {
  console.log(data)
}).catch((error )=> {
  console.log(error)});