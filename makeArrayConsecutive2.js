function makeArrayConsecutive2(statues) {
 let statuesNeeded = 0;
 let sortedArray = statues.sort(compareNumbers);
 console.log(sortedArray);
 for (var i = 0; i < statues.length; i++){
  if (sortedArray[i+1] && sortedArray[i+1] !== sortedArray[i]+1){
   statuesNeeded+= (sortedArray[i+1] - sortedArray[i]) - 1
  }
 }
 return statuesNeeded;
}

function compareNumbers(a, b) {
  return a - b;
}