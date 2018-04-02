# problem-solving

Tono 2 hari sekali
Anton 4 hari sekali
Budi 5 hari sekali

buka setiap tanggal 7 dan tutup tanggal 31



pseudocode

SET counter = 0;

LOOP dari index i = 7, index i kurang dari sama dengan 31 dengan increment satu
  SET arr  sama dengan []
  IF index i % 5 = 0
    PUSH `Tempat Fitness Tutup` ke arr
  ELSE
    IF counter % 2 = 0
      PUSH `Tono` ke arr
    IF counter % 4 = 0
      PUSH `Anton` ke arr
    IF counter % 5 = 0
      PUSH `Budi` ke arr
  SHOW `Tanggal index i: ` +  nilai dari arr gabungkan dengan ', '
  counter + 1
