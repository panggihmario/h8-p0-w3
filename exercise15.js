function groupAnimals(animals){
  var animalUrut=animals.sort()
  var result=[]
 for(var i=0;i<animalUrut.length;i++){
  var hewan1=[]
   for(var j=0;j<animalUrut.length;j++){
    if(animalUrut[i].charAt(0)=== animalUrut[j].charAt(0)){
      hewan1.push(animalUrut[j]);
    }
   }

result.push(hewan1)

 }

 return result
}
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
