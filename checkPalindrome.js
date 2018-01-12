function checkPalindrome(inputString) {
    let reversedString = inputString.split('').reverse().join('');
    return (reversedString === inputString)
}
