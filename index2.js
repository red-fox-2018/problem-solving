var member = [
              {nama : 'Tono', jadwal:2},
              {nama : 'Anton', jadwal:4},
              {nama : 'Budi', jadwal:5}
              ]
var tanggal =7;
var day = 0;

while (tanggal <=31){
  if(tanggal %5 === 0){
    console.log(`Tanggal ${tanggal}: Tempat Fitness Tutup`)
  }else{
    if(day % member[0].jadwal === 0 && day % member[1].jadwal !== 0 && day % member[2].jadwal !==0){
      console.log(`Tanggal ${tanggal}: ${member[0].nama}`)
    }
    else if(day % member[0].jadwal === 0 && day % member[1].jadwal === 0 && day % member[2].jadwal !==0){
      console.log(`Tanggal ${tanggal}: ${member[0].nama},${member[1].nama}`)
    }
    else if(day % member[0].jadwal === 0 && day % member[1].jadwal === 0 && day % member[2].jadwal ===0){
      console.log(`Tanggal ${tanggal}: ${member[0].nama},${member[1].nama},${member[2].nama}`)
    }
    else if(day % member[0].jadwal === 0 && day % member[1].jadwal !== 0 && day % member[2].jadwal ===0){
      console.log(`Tanggal ${tanggal}: ${member[0].nama},${member[2].nama}`)
    }
    else if(day % member[0].jadwal !== 0 && day % member[1].jadwal !== 0 && day % member[2].jadwal ===0){
      console.log(`Tanggal ${tanggal}: ${member[2].nama}`)
    }
    else{
      console.log(`Tanggal ${tanggal}:`)
    }
  }
  day ++
  tanggal ++
}
