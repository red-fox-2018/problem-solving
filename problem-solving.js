let arrKalender = []
for(let i = 7; i<=31; i++){
  if(i === 7){
    debugger
    console.log(`Tanggal ${i}: Tono, Anton, Budi`)
  }
  else if(i%5 === 0){
    debugger
    console.log( `Tanggal ${i}: Tempat Fitness Tutup`)
  }
  else{
    if(i%2 === 1){
      debugger
      arrKalender.push('Tono')
    }
    if(i%4 === 3){
      debugger
      arrKalender.push('Anton')
    }
    if(i%5 === 2){
      debugger
      arrKalender.push('Budi')
    }
    console.log(`Tanggal ${i}: ${arrKalender.join(', ')}`)
    arrKalender = []
  }
}
