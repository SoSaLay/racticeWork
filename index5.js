function getMiddle(s) {
    let len = s.length;
    let middle = Math.floor(len / 2);

    //Divides the length of the string by 2. Math.floor brings it down to the nearest whole number

    if (len % 2 === 0) {
        // Even length: return the middle 2 characters
        return s[middle - 1] + s[middle];
    } else {
        // Odd length: return the middle character
        return s[middle];
    }
}
