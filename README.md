# problem-solving

PSEUDOCODE


STORE 'member' with ['Tono', 'Anton', 'Budi']
STORE 'jadwal' with [2,4,5]
STORE 'tanggal' with 7
STORE 'day' with 0
WHILE 'tanggal' less than equal to 31
  IF 'tanggal' MOD 5 equel to 0
    DISPLAY 'tanggal' + value of 'tanggal' + ': Tempat Fitness Tutup'
  ELSE
    IF 'day' MOD 'jadwal' index 0 equal to 0 AND 'day' MOD 'jadwal' index 1 not equal to 0 AND 'day' MOD 'jadwal' index 2 not equal to 0
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':' + value of 'member' index 0
    ELSE IF 'day' MOD 'jadwal' index 0 equal to 0 AND 'day' MOD 'jadwal' index 1 equal to 0 AND 'day' MOD 'jadwal' index 2 not equal to 0
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':' + value of 'member' index 0 + value of 'member' index 1
    ELSE IF 'day' MOD 'jadwal' index 0 equal to 0 AND 'day' MOD 'jadwal' index 1 equal to 0 AND 'day' MOD 'jadwal' index 2 equal to 0
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':' + value of 'member' index 0 + value of 'member' index 1 + value of 'member' index 2
    ELSE IF 'day' MOD 'jadwal' index 0 equal to 0 AND 'day' MOD 'jadwal' index 1 not equal to 0 AND 'day' MOD 'jadwal' index 2 equal to 0
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':' + value of 'member' index 0 + value of 'member' index 2
    ELSE IF 'day' MOD 'jadwal' index 0 not equal to 0 AND 'day' MOD 'jadwal' index 1 not equal to 0 AND 'day' MOD 'jadwal' index 2 equal to 0
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':' + value of 'member' index 2
    ELSE
      DISPLAY DISPLAY 'tanggal' + value of 'tanggal' + ':'
  ADD 'tanggal' by 1
  ADD 'day' by 1
