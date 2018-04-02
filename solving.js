//ALGORITMA
// langkah 1 : buat variabel openDate yang berisi tanggal buka tempat Fitness
//langkah 2 : lakukan looping dari openDate sampai dengan 31
//langkah 3: buat var hasil yang berisi array kosong dalam looping
//langkah 4 : buat kondisi jika i samadengan openDate
          //4.1 : push pada var hasil ('Tono','Anton','Budi')
// langkah 5 : buat kondisi else if i modulus 5 sama dengan 0
          //5.1 : push pada var hasil ('Tempat Fitness Tutup')
//langkah 6 : buat kondisi jika i-7 modulus 2 samadengan 0
          //6.1 : push pada var hasil ('Tono')
//langkah 7 : buat kondisi jika i-7 modulus 4 samadengan 0
          //7.1 : push pada var hasil ('Anton')
//langkah 8 : buat kondisi jika i-7 samadengan 0
          //8.1: push pada var hasil ('Budi')
// langkah 9: tampilkan ' Tanggal '+i+' : '+hasil
//langkah 10
var openDate=7
for (var i = openDate; i <=31; i++) {
  var hasil=[]
  if (i===openDate) {
    hasil.push('Tono','Anton','Budi')
  }
  else if (i % 5===0) {
    hasil.push('Tempat Fitness Tutup')
  }
  else {
    if ((i-7) % 2===0) {
      hasil.push('Tono')
    }
    if ((i-7) % 4===0) {
      hasil.push('Anton')
    }
    if ((i-7) % 5===0) {
      hasil.push('Budi')
    }
  }
  console.log(' Tanggal '+i+' : '+hasil)
}
