/*
create a funcion 'jadwalMember' with 5 parameter 'member','jadwal','buka','batasTanggal','kelipatanTutup'
  set 'counter' equals to 0
  set 'i' equals to 0
    while 'i' <= 'batasTanggal' do
      set 'hasil' equals to Tanggal 'i' :
      if 'i' equals to 'buka' do
        set 'j' equals to 0
        while 'j' < length of member do
          add hasil with 'member[j]'
          increment 'j' by 1
        print 'hasil'
      else do
        if 'i' mod by 'kelipatanTutup' equals to 0 do
          add hasil with 'Tempat fitness tutup'
          print hasil
        else do
          set 'k' equals to 0
          while 'k' < length of 'jadwal' do
            if 'counter' mod by 'jadwal[k]' equals to 0 do
              add hasil with 'member[k]'
            increment 'k' by 1
          print 'hasil'
      increment 'i' by 1
      increment 'counter' by 1
    return nothing
*/

function jadwalMember(member,jadwal,buka,batasTanggal,kelipatanTutup) {
  // member = [tono,anton,budi]
  // jadwal = [2,4,5]
  // buka = 7
  // batasTanggal = 31
  // kelipatanTutup = 5
  let counter = 0
  for (var i = buka; i <= batasTanggal; i++) {
    let hasil = 'Tanggal ' + i + ': '
    if (i == buka) {
      for (var j = 0; j < member.length; j++) {
        hasil += member[j] + ','
      }
      console.log(hasil);
    } else {
      if (i % kelipatanTutup === 0) {
        hasil += 'Tempat Fitness Tutup'
        console.log(hasil);
      } else {
        for (var k = 0; k < jadwal.length; k++) {
          if (counter % jadwal[k] == 0) {
            hasil += member[k] + ','
          }
        }
        console.log(hasil);
      }
    }
    counter++
  }
  return
}

jadwalMember(['Tono','Anton','Budi'],[3,4,6],2,31,5)
