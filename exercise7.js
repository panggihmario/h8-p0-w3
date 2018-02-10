function hitungJumlahKata(kalimat){

  if(kalimat.length<2){
    return kalimat.length
  }
  else{
    var kata =kalimat.match(/ /g).length
    var jumlah=kata +1
  }

  return jumlah
}
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
