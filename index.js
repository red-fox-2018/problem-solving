
/*

CONSTRAIN:

- tono setiap 2 hari sekali
- anton 4 hari sekali
- budi 5 hari sekali
- tempat fitnes libur setiap tanggal kelipatan 5

FUNCTION solve(start, end, poeple1, poeple2, poeple3)
  INIT tabel = {}

  FOR from i = start to i <= end increment
    IF (i % 5 == 0)
      tabel[`Tanggal ${i}:`] = 'Tempat Fitness Tutup'
    ELSE IF
      tabel[`Tanggal ${i}:`] = []
    ELSE
  END FOR
  
  FOR from i = start until i <= end with i counter poeple1.interval
    IF typeof tabel[`Tanggal ${i}:`] equal 'object'
      tabel[`Tanggal ${i}:`].push(poeple1.name)
    END IF
  END FOR

  FOR from i = start until i <= end counter i += poeple2.interval
    IF typeof tabel[`Tanggal ${i}:`] equal with 'object')
      tabel[`Tanggal ${i}:`].push(poeple2.name)
    END IF
  END FOR

  FOR start i = start until i <= end counter i += poeple3.interval
    IF (typeof tabel[`Tanggal ${i}:`] == 'object')
      tabel[`Tanggal ${i}:`].push(poeple3.name)
    END IF
  END FOR
  
  INIT result = ``

  FOR i in tabel
    IF (typeof tabel[i] equal 'object' AND tabel[i].length > 0)
      result += `${i}`
      FOR value of tabel[i])
        result += ` ${value}, `
      END FOR
      RESULT = result.slice(0, -2)
      RESULT += `\n`
    ELSE IF (tabel[i].length == 0)
      result += `${i}\n`
    ELSE IF (typeof tabel[i] == 'string')
      result += `${i} ${tabel[i]}\n`
    END IF
  END FOR

  RETURN result
END FUCTION


*/


function solve(start, end, poeple1, poeple2, poeple3) {
  // store all data
  let tabel = {};

  // formatting data structure
  for (let i = start; i <= end; i++) {
    if (i % 5 == 0) {
      tabel[`Tanggal ${i}:`] = 'Tempat Fitness Tutup';
    } else {
      tabel[`Tanggal ${i}:`] = [];
    }
  }
  
  // handle poeple 1
  for (let i = start; i <= end; i += poeple1.interval) {
    if (typeof tabel[`Tanggal ${i}:`] == 'object') {
      tabel[`Tanggal ${i}:`].push(poeple1.name);
    }
  }
  // handle poeple 1
  for (let i = start; i <= end; i += poeple2.interval) {
    if (typeof tabel[`Tanggal ${i}:`] == 'object') {
      tabel[`Tanggal ${i}:`].push(poeple2.name);
    }
  }
  // handle poeple 1
  for (let i = start; i <= end; i += poeple3.interval) {
    if (typeof tabel[`Tanggal ${i}:`] == 'object') {
      tabel[`Tanggal ${i}:`].push(poeple3.name);
    }
  }
  
  // generate output
  let result = ``;
  for (let i in tabel) {
    if (typeof tabel[i] == 'object' && tabel[i].length > 0) {
      result += `${i}`;
      for (let value of tabel[i]) {
        result += ` ${value},`;
      }
      result = result.slice(0, -1);
      result += `\n`;
    } else if (tabel[i].length == 0) {
      result += `${i}\n`;
    } else if (typeof tabel[i] == 'string') {
      result += `${i} ${tabel[i]}\n`;
    }
  }
  // return value
  return result;
}


let poeple1 = {
  name: 'Tono',
  interval: 2
};

let poeple2 = {
  name: 'Anton',
  interval: 4
};

let poeple3 = {
  name: 'Budi',
  interval: 5
};

let start = 7;
let end = 31;

// driver code
console.log(solve(start, end, poeple1, poeple2, poeple3));
