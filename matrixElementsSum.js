function matrixElementsSum(matrix) {
    let sum = 0;
    let cursedIndices = []
    for (let row = 0; row < matrix.length; row++){
       matrix[row].forEach((el, i) => {
           if(el === 0){
               cursedIndices.push(i)
           }
           else if(el !== 0 && !cursedIndices.includes(i)){
               sum+=el;
           }
       })
    }
    return sum;
}
