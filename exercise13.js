function targetTerdekat(arr) {
  var untukX=0
  var untukO=0
  var indeks=[]
  var indek=[]
  var result=0
   if(arr.indexOf('x') === -1){
    return 0}
    else if(arr.indexOf('o')===-1){
    return 0}
  else{
  for(var i=0;i<arr.length;i++){
    if(arr[i]==='x'){
      untukX=i
      indeks.push(untukX)
    }
    else if(arr[i]==='o'){
      untukO=i
      indek.push(untukO)
    }
    var hasil=[]
    for(var j=0;j<indeks.length;j++){
      if(untukX>untukO){
      result=Math.abs(untukO-indeks[j])
      hasil.push(result)
      hasil.sort()}
      else if(untukX<untukO){
        result=Math.abs(untukX-indek[j])
      hasil.push(result)
      hasil.sort()}
      }
    }
  }
   return hasil[0]
}
// TEST CASES
console.log(targetTerdekat(['', '', 'x', '', '', 'o', '', 'o'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2

//
