function allLongestStrings(inputArray) {
    let longWords = [];
    let longestLength = inputArray[0].length;
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i].length === longestLength){
            longWords.push(inputArray[i])
        }
        else if (inputArray[i].length > longestLength){
            longestLength = inputArray[i].length;
            longWords = [];
            longWords.push(inputArray[i]);
        }
    }
    return longWords;
}
