/*
PSEUDOCODE

1. buat var array yang berisi array kosong dan buat variabel tanggal berisi angka mulai dari 7
2. looping dari 0 sampai 25
  2.a. jika i % 5 sama dengan 0
    2.a.i. push 'tempat fitness tutup'
  2.b. jika i sama dengan 0
    2.b.i. push 'Tono', 'Anton', dan 'Budi'
    2.b.ii. kosongkan array dan tambahkan tanggal 1
  2.c. jika i = 0, push  tono, anton, budi, jika i % 2 = 0 push tono, jika i % 4 = 0 push anton, jika i % 5 = 0 push budi
  2.d. jika i % 5 sama dengan 0, maka kosongkan array lalu push 'Tempat Fitness Tutup' ke dalam array
3. log hasil
4. kosongkan array
5. tambahkan tanggal dengan 1
*/

function fitness() {
  var arr = [];
  var tanggal = 7;

  for (var i = 0 ; i < 25; i++) {
    if (i == 0) {
      arr.push('Tono', 'Anton', 'Budi')
      console.log(`Tanggal ${tanggal}: ${arr.join(', ')}`)
      arr = [];
      tanggal += 1;
    } else {
      if (i % 2 == 0) {
        arr.push('Tono');
      }

      if (i % 4 == 0) {
        arr.push('Anton');
      }

      if (i % 5 == 0) {
        arr.push('Budi');
      }
      if (tanggal % 5 == 0) {
        arr = [];
        arr.push('Tempat Fitness Tutup');
      }
      console.log(`Tanggal ${tanggal}: ${arr.join(', ')}`)
      arr = []
      tanggal += 1;
    }
  }
}

fitness()
