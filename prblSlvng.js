let mmbr = ['Tono','Anton','Budi','philip']
let jdwl = [2,4,5,7]
let libur =5
let msk=[]

    for(i=7;i<=31;i++){
      if(i==7 ){
        console.log(`tanggal ${i}: ${mmbr}`);
     var tanggal=1
      }else{
          if(tanggal % jdwl[0] === 0 && i % 5 !== 0){
            msk.push(mmbr[0])
          } if(tanggal % jdwl[1] === 0 && i % 5 !== 0 ){
            msk.push(mmbr[1])
          }if(tanggal % jdwl[2] === 0 && i % 5 !== 0){
            msk.push(mmbr[2])
          }if(tanggal % jdwl[3] === 0 && i % 5 !== 0){
            msk.push(mmbr[3])
          } if(i % 5 === 0 ){
            msk.push('libur')
          }
        tanggal++
        console.log(`tanggal ${i}: ${msk}`);
      }
      msk=[]
    }
