
/*

CONSTRAIN:

- tono setiap 2 hari sekali
- anton 4 hari sekali
- budi 5 hari sekali
- tempat fitnes libur setiap tanggal kelipatan 5

====  PSEODOCODE ====

FUNCTION solve(start, end, close, member)
  INIT ans = ''
  INIT tanggal = {}
  FOR from i = start to <= end with counter i
    tanggal[i] = []
    IF (i % close == 0)
      tanggal[i] = 'Tempat Fistess Tutup'
    ELSE
      FOR value in member)
        IF ((i - start) % member[value] == 0)
          tanggal[i].push(value)
        END IF
      END FOR
    END IF
  END FOR
  FOR key in tanggal
    IF typeof tanggal[key] equal 'string'
      PRINT `Tanggal key: tanggal[key]`
    ELSE IF tanggal[key].length equal 0
      PRINT `Tanggal key`
    ELSE IF tanggal[key].length > 0
      INIT res = ``
      FOR v of tanggal[key])
        res += `v, `
      END FOR
      PRINT `Tanggal key: res.slice(0, -2)`)
    END IF
  END FOR
END FUNCTION


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
solve(7, 31, 5, member);
