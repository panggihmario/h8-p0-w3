function pasanganTerbesar(num){
  var number=String(num)
  var angka=0;
  var panjang=''
  for(var i=0;i<number.length-1;i++){
    panjang=Number(number[i]+number[i+1])

      if(panjang>angka){
        angka=panjang
      }

  }
  return angka

}
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
