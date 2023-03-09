'use strict';

function BinarioADecimal(num) {
   let contador = 0
    let binary = num.split("").reverse()
   for(let i = 0 ; i<binary.length;i++){
 let result = binary[i]*2 **i
 contador += result 
}
return contador}



console.log(BinarioADecimal("111"))
function DecimalABinario(num) {
   console.log(num);
while(num > 0 ) {
var mod =num % 2;
num = num
}

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
