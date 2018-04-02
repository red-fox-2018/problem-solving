let member1 = 'Tono'
let member2 = 'Anton'
let member3 = 'Budi'

for(i = 7; i <= 31; i++){
  let tmp = []

    if(i == 7){
      tmp.push(member1)
      tmp.push(member2)
      tmp.push(member3)
    } else if(i%5 == 0){
      tmp.push('Tempat Fitness Tutup');
    } else {
      if((i-7)%2 == 0){
        tmp.push(member1)
      }
      if((i-7)%4 == 0){
        tmp.push(member2)
      }
      if((i-7)%5 == 0){
        tmp.push(member3)
      }
    }
  console.log(`Tanggal ${i}: ${tmp.join()}`)
}
