var search = (array, number) => {
  for (var i = 0; i < array.length; i++) {
      if (array[i] === number) return true;
    }
    return false;
}

var randomPick = (n, min, max) => {
  let arrayNumbers = [];
  let number;
  const range = max - min + 1;
  for(let i = 0; i < n; i++){
    do{
      number = Math.floor(Math.random() * range) + min;
    }while(search(arrayNumbers, number))
    arrayNumbers.push(number);
  }
  console.log(arrayNumbers);
}

randomPick(10, 1, 11);