

function palindrome(kata){
  var baru ='';
for(var i =kata.length;i>0;i--){
  baru+=kata[i-1]
}
  if(baru ===  kata){
    return true
  }else{
    return false
  }
return baru

}
console.log(palindrome('civic'))
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
