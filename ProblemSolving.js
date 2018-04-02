function KalenderJaga(open, close) {
  var member1 = 'Tono'; //2 hari
  var member2 = 'Anton'; //4 hari
  var member3 = 'Budi'; // 5 hari
  var hari = 0;

  for (var i = open; i <= close; i++) {
    var tmp = [];
    if (i === open) {
      tmp.push(member1, member2, member3);
    } else if (i % 5 === 0) {
      tmp.push('Tempat Fitness Tutup');
    } else {
      var worktime = [];
      if (hari % 2 === 0) {
        worktime.push(member1);
      }
      if (hari % 4 === 0) {
        worktime.push(member2);
      }
      if (hari % 5 === 0) {
        worktime.push(member3);
      }
      tmp.push(worktime);
    }
    hari++;
    console.log('tanggal ' + i + ': ' + tmp);
  }

}


KalenderJaga(7, 31);
