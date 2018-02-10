var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(){
  input.splice(1,4,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung','21/05/1989'
                  ,'Pria','SMA International Metro');
  console.log(input);
  var date = '21/05/1989'
  var baru = date.split('/')
  var newDate = baru.join('-')
  var bulan = 5;
  switch (bulan) {
    case 1 : { console.log('januari');break;}
    case 2 : { console.log('ferbruari');break;}
    case 3 : { console.log('maret');break;}
    case 4 : { console.log('april');break;}
    case 5 : { console.log('mei');break;}
    case 6 : { console.log('juni');break;}
    case 7 : { console.log('juli');break;}
    case 8 : { console.log('agustus');break;}
    case 9 : { console.log('september');break;}
    case 10 : { console.log('oktober');break;}
    case 11 : { console.log('november');break;}
    case 12: { console.log('desember');break;}
  }
  baru.sort(function(value1,value2){return value2 - value1});
  console.log(baru);
  console.log(newDate);
   var name = input[1]
   var newName = name.slice(0,14);
   console.log(newName);





}dataHandling2()
