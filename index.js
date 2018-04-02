
/*
constrain:
- tono setiap 2 hari sekali
- anton 4 hari sekali
- budi 5 hari sekali

- tempat fitnes libur setiap tanggal kelipatan 5

*/


function solve(start, end) {
  // store all data
  let tabel = {};

  for (let i = start; i <= end; i++) {
    if (i % 5 == 0) {
      tabel[`Tanggal ${i}:`] = 'Tempat Fitness Tutup';
    } else {
      tabel[`Tanggal ${i}:`] = [];
    }
  }
  
  for (let i = start; i <= end; i += 2) {
    if (typeof tabel[`Tanggal ${i}:`] == 'object') {
      tabel[`Tanggal ${i}:`].push('Tono');
    }
  }

  for (let i = start; i <= end; i += 4) {
    if (typeof tabel[`Tanggal ${i}:`] == 'object') {
      tabel[`Tanggal ${i}:`].push('Anton');
    }
  }

  for (let i = start; i <= end; i += 5) {
    if (typeof tabel[`Tanggal ${i}:`] == 'object') {
      tabel[`Tanggal ${i}:`].push('Budi');
    }
  }

  return tabel;
}

console.log(solve(7, 31));

