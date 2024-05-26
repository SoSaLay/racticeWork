function isIsogram(str){
    //...

    str= str.toLowerCase()

    let letters= new Set();
    // Set Stores unique values. You can then use methods like add(value) to Adds a value. or has(value) to check if a value exists.



    let Isogram =true;


    
    str.split('').forEach(charZ=>{
        letters.has(charZ)?Isogram=false: letters.add(charZ)
    })  

    return Isogram

  }



  isIsogram("candy")
  isIsogram("rredd")
  isIsogram("moneym")