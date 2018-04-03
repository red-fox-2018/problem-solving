var arrMembers = ['Tono', 'Anton', 'Budi'];
var arrInterval = [2, 4, 5];
var jadwalTono = 7 + arrInterval[0]
var jadwalAnton = 7 + arrInterval[1]
var jadwalBudi = 7 + arrInterval[2]

for(var date = 7; date <= 31; date++) {
  var arrResult = [];
  if(date == 7) {
    arrResult.push(arrMembers[0], arrMembers[1], arrMembers[2])
  }
  if(date == jadwalTono) {
    arrResult.push(arrMembers[0])
    jadwalTono += arrInterval[0]
  }
  if(date == jadwalAnton) {
    arrResult.push(arrMembers[1])
    jadwalAnton += arrInterval[1]
  }
  if(date == jadwalBudi) {
    arrResult.push(arrMembers[2])
    jadwalBudi += arrInterval[2]
  }
  console.log('Tanggal ' + date + ' : ' + arrResult );
  
  if(date % 5 == 0) {
    console.log('Tanggal ' + date + ' : libur');
  }
}
