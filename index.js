var member = ['Tono', 'Anton','Budi'];
var tanggal =7;
var day = 0;

while (tanggal <=31){
  if(tanggal %5 === 0){
    console.log(`Tanggal ${tanggal}: Tempat Fitness Tutup`)
  }else{
    if(day %2 === 0 && day %4 !== 0 && day %5 !==0){
      console.log(`Tanggal ${tanggal}: ${member[0]}`)
    }
    else if(day %2 === 0 && day %4 === 0 && day %5 !==0){
      console.log(`Tanggal ${tanggal}: ${member[0]},${member[1]}`)
    }
    else if(day %2 === 0 && day %4 === 0 && day %5 ===0){
      console.log(`Tanggal ${tanggal}: ${member[0]},${member[1]},${member[2]}`)
    }
    else if(day %2 === 0 && day %4 !== 0 && day %5 ===0){
      console.log(`Tanggal ${tanggal}: ${member[0]},${member[2]}`)
    }
    else if(day %2 !== 0 && day %4 !== 0 && day %5 ===0){
      console.log(`Tanggal ${tanggal}: ${member[2]}`)
    }
    else{
      console.log(`Tanggal ${tanggal}:`)
    }
  }
  day ++
  tanggal ++
}
