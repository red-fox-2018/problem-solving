# problem-solving

PSEUDOCODE
SET member1 WITH Tono
SET member2 WITH Anton
SET member3 WITH Budi

DO LOOPING FROM i EQUAL 7 TO i EQUAL 31 WITH INCREMENT i + 1
  SET tmp WITH []

  IF i EQUAL 7
    PUSH tmp with member1
    PUSH tmp with member2
    PUSH tmp with member3

    ELSE IF i MODULUS 5 EQUAL 0
      PUSH tmp WITH Tempat Fitness Tutup
    ELSE
      IF i - 7 MODULUS 2 EQUAL 0
        PUSH tmp WITH member1
      IF i - 7 MODULUS 4 EQUAL 0
        PUSH tmp WITH member2
      IF i - 7 MODULUS 5 EQUAL 0
        PUSH tmp WITH member3

  DISPLAY Tanggal i: JOIN tmp
