function commonCharacterCount(s1, s2) {
    let string1Object = {};
    let string2Object = {};
    let commonCount = 0;
    let string1ToArray = s1.split('');
    let string2ToArray = s2.split('');
    for (let i = 0; i < string1ToArray.length; i++){
        if(string1Object[string1ToArray[i]]){
           string1Object[string1ToArray[i]]++ 
        }
        else {
            string1Object[string1ToArray[i]] = 1
        }
    }
    for (let j = 0; j < string2ToArray.length; j++){
        if(string2Object[string2ToArray[j]]){
           string2Object[string2ToArray[j]]++ 
        }
        else {
            string2Object[string2ToArray[j]] = 1
        }
    }
    for (let letter in string1Object){
        if(string1Object.hasOwnProperty(letter) && string2Object.hasOwnProperty(letter)){
            commonCount +=Math.min(string1Object[letter],string2Object[letter])
        }
    }
   return commonCount;
}