const reverseString = function(str) {
    const newWord = str.split('').reverse().join('');

    return newWord;
}

module.exports = reverseString
