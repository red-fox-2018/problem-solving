# problem-solving

RELEASE 0

let arrKalender = []
LOOPING tanggal i = 7 sampai i<= 31, lakukan perulangan i+1
  IF tanggal === 7
    Maka cetak tanggal 7: Tono, Anton, Budi
  ELSE IF tanggal modulus 5 === 0
    Maka cetak tanggal i: Tempat Fitness Tutup
  ELSE
    IF tanggal i modulus 2 === 1
      Maka arrKalender.push('Tono')
    IF tanggal i modulus 4 === 3
      Maka arrKalender.push('Anton')
    IF tanggal i modulus 5 === 2
      Maka arrKalender.push('Budi')
    cetak tanggal i: arrKalender.join(',')
    arrKalender = []
