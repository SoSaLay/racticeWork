function createPhoneNumber(numbers){
  
    let fullNumber= numbers.slice(0,10)

    let firstThree= fullNumber.slice(0,3)
    let format= `(${firstThree.join('')})`

    let nextThree= fullNumber.slice(3,6)
    let format2= `${nextThree.join('')}-`

    let lastFour= fullNumber.slice(6,10)
    let format3= `${lastFour.join('')}`

  
    return format + " "+ format2 + format3

  }


  createPhoneNumber([7,0,4,5,6,9,4,4,2,5])