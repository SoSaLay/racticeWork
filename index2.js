function maskify(cc) {

 cc= String(cc)

let unmasked= cc.slice(-4)




let masked= cc.slice(0,cc.length -4).replace( /./g,'#') 
//Regular expressions are patterns used to match and manipulate strings.



  

return  masked + unmasked 
  
  

}


maskify(12345678912340000)