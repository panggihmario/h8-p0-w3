var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]
function dataHandling(n){
  for(var i=0;i<n.length;i++){
    console.log('No Id : ' + n[i][0]);
    console.log('Nama lengkap : ' +n[i][1]);
    console.log('TTL : ' + n[i][2]);
    console.log('Hobi : ' + n[i][3]);

  }
}dataHandling(input);
