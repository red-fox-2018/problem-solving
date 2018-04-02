
/*

CONSTRAIN:

- tono setiap 2 hari sekali
- anton 4 hari sekali
- budi 5 hari sekali
- tempat fitnes libur setiap tanggal kelipatan 5

*/

function solve(start, end, close, member) {
  let ans = '';
  let tanggal = {};
  for (let i = start; i <= end; i++) {
    tanggal[i] = [];
    if (i % close == 0) {
      tanggal[i] = 'Tempat Fistess Tutup';
    } else {
      for (let value in member) {
        if ((i - start) % member[value] == 0) {
          tanggal[i].push(value);
        }
      }
    }
  }
  for (let key in tanggal) {
    // console.log(typeof tanggal[key]);
    if (typeof tanggal[key] == 'string') {
      console.log(`Tanggal ${key}: ${tanggal[key]}`);
    } else if (tanggal[key].length == 0) {
      console.log(`Tanggal ${key}:`);
    } else if (tanggal[key].length > 0) {
      let res = ``;
      for (let v of tanggal[key]) {
        res += `${v}, `
      }
      console.log(`Tanggal ${key}: ${res.slice(0, -2)}`);
    }
  }
}

let member = { Tono: 2, Anton: 4, Budi: 5 };

// driver code
console.log(solve(7, 31, 5, member));
