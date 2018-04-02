let member =[
  {name: 'Tono', schedule: 2},
  {name: 'Anton', schedule: 4},
  {name: 'Budi', schedule: 5}
]

for(let i=7; i<=31; i++){
  let arr = []

  for(let j=0; j<member.length; j++){
    if(member[j].name === 'Tono' && member[j].schedule === 2){
      arr.push(member[j].name)
      member[j].schedule = 1
    }else if(member[j].name === 'Anton' && member[j].schedule === 4){
      arr.push(member[j].name)
      member[j].schedule = 1
    }else if(member[j].name === 'Budi' && member[j].schedule === 5){
      arr.push(member[j].name)
      member[j].schedule = 1
    }else{
      member[j].schedule += 1
    }
  }

  if(i%5 === 0){
    console.log(`Tanggal ${i}: Tempat Fitness Tutup`);
  }else{
    console.log(`Tanggal ${i}: ${arr.join(", ")}`);
  }
}
