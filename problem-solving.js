// sebuah tempat fitnes ingin memiliki perhitungan kalender jadwal member
// tono 2 hari sekali
// anton 4 hari sekali
// budi 5 hari sekali
// dibuka pertama tanggal 7 
// semua datang di tanggal 7
// kalender tanggal 31

// looping sebanyak 31 kali
// data masuk mulai dari 7
// tanggal 7 semua masuk
// angka kelipatan 5 maka libur
// diatas 7 tiap 2 hari sekali tono datang kecuali hari libur
// diatas 7 tiap 4 hari sekali anton datang keciali hari libur
// diatas 7 tiap 5 hari sekali budi datang kecuali hari libur

function hariPembukaan(mulai,beda,name,selesai,tutup){
	var obj = {}
	for(var i=mulai;i<=selesai;i++){
		obj['tanggal'+i]=[]
		if (i%5===0) {
			obj['tanggal'+i].push('Tempat fitnes tutup')

		}
		else{
			var tampung = []
			for(var j=0;j<beda.length;j++){
				if ((i-mulai)%beda[j]===0) {
					//console.log('tanggal',i,name[j]);
					obj['tanggal'+i].push(name[j])
				}
			}
		}
	}
	return obj
}
console.log(hariPembukaan(7,[2,4,5],['Tono','Anton','Budi'],31,5));