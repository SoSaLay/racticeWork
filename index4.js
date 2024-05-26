function digPow(n, p){
    // ...
    
    
    // Convert the number to a string to get its digits
    let digits = String(n).split('').map(Number);
    
    // Sum of digits raised to consecutive powers starting from p
    let sum = digits.reduce((acc, digit, index) => acc + Math.pow(digit, p + index), 0);
    
    // Is the sum is a multiple of n
    if (sum % n === 0) {
        return sum / n; 
    } else {
        return -1; 
    }
    
    
  }