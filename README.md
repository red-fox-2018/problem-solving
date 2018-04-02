# problem-solving

PSEUDOCODE


STORE 'member' with ['Tono', 'Anton', 'Budi']
STORE 'tanggal' with 7
STORE 'day' with 0
WHILE 'tanggal' less than equal to 31
  IF 'tanggal' MOD 5 equel to 0
    DISPLAY 'tanggal' + value of 'tanggal' + ': Tempat Fitness Tutup'
  ELSE
    IF 'day' MOD 2 equal to 0 AND 'day' MOD 4 not equal to 0 AND 'day' MOD 5 not equal to 0
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':' + value of 'member' index 0
    ELSE IF 'day' MOD 2 equal to 0 AND 'day' MOD 4 equal to 0 AND 'day' MOD 5 not equal to 0
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':' + value of 'member' index 0 + value of 'member' index 1
    ELSE IF 'day' MOD 2 equal to 0 AND 'day' MOD 4 equal to 0 AND 'day' MOD 5 equal to 0
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':' + value of 'member' index 0 + value of 'member' index 1 + value of 'member' index 2
    ELSE IF 'day' MOD 2 equal to 0 AND 'day' MOD 4 not equal to 0 AND 'day' MOD 5 equal to 0
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':' + value of 'member' index 0 + value of 'member' index 2
    ELSE IF 'day' MOD 2 not equal to 0 AND 'day' MOD 4 not equal to 0 AND 'day' MOD 5 equal to 0
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':' + value of 'member' index 2
    ELSE
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':'
  ADD 'tanggal' by 1
  ADD 'day' by 1
