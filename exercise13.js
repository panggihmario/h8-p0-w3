function targetTerdekat(arr) {
  // you can only write your code here!
   
  var kurang=0
  if(arr.indexOf('x') ===-1){
    return 0
  }
  else if(arr.indexOf('o') ===-1){
    return 0
  }
  var tampungX=[]
  var tampungO=[]
  for(var i=0;i<arr.length;i++){
      if(arr[i]==='x'){
        tampungX.push(i)
      }
      else if(arr[i]==='o'){
        tampungO.push(i)
      }
  }
  var tampung=0
  var hasil=[]
  for(var j=0;j<tampungX.length;j++){
    for(var k=0;k<=tampungO.length;k++){
    if(tampungX[j]>tampungO[k]){
    tampung=tampungX[j]-tampungO[k]
    hasil.push(tampung)
    }
    else if(tampungX[j]<tampungO[k]){
      tampung=tampungO[k]-tampungX[j]
      hasil.push(tampung)
    }
  }
  }
var final=hasil.sort()
return final[0]




}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2