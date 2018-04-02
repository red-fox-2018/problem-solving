/*
//opening date
LOOP from startDate until 31
  SET var hadir to empty string
  IF tanggal equals opening THEN
    DISPLAY Tono, Anton, Budi
  END IF
  IF tanggal MODULUS 5 is 0 THEN
    DISPLAY 'Tempat fitness tutup'
  END IF
  LOOP from first until last of member as j
    LOOP from startDate until 31 with interval of member[j][1] as k
      IF k is equals i THEN
        ADD member[j][0] to hadir
        END IF
    END LOOP
  END LOOP
  DISPLAY hadir

*/

function daftarHadir(member, startDate) {
  //[0] --> Tono
  //[1] --> Anton
  //[2] --> Budi

  for (var i = startDate; i <= 31; i++) {
    var hadir = '';
    // if (i === startDate) {
    //   for (var j = 0; j < member.length; j++) {
    //     hadir += member[j][0] + ', ';
    //
    //   }
    //   console.log('Tanggal ' + i + ': ' + hadir.substr(0, hadir.length - 2) + '.');
    // }
    if (i % 5 === 0) {
      console.log('Tanggal ' + i + ': ' + 'Tempat fitness tutup') ;
    }
    for (var j = 0; j < member.length; j++) {
      for (var k = startDate; k <= 31; k += member[j][1]) {
        if (i === k) {
          hadir += member[j][0] + ', ';
        }
      }
    }
    if (hadir.length === 0) {
      console.log('Tanggal ' + i + ': ');
    } else {
      console.log('Tanggal ' + i + ': ' + hadir.substr(0, hadir.length - 2) + '.')
    }
    // console.log('Tanggal ' + i + ': ' + hadir.substr(0, hadir.length - 2) + '.');
  }
  return '';
}



console.log(daftarHadir([['Tono', 2], ['Anton', 4], ['Budi', 5]], 7));
