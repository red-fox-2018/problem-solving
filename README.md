# problem-solving

tono  every 2 time
anton every 4 time
budi every 5 time
fitnes mulai 7
setiap mod 5 libur


initiate array mmbr [tono,budi,anton]
initiate array jdwl [2,4,5]
initiate array libur 5
initiate array msk []

for[i=7;i<=31;i++]
  if [ i == 7 ]
      print tanggal i : mmbr
  initiate tanggal with value 1    
  else
      if[k mod jdwl array 0 == 0]
        msk.push[mmbr array 0]
      if[k mod jdwl array 1 == 0]
        msk.push[mmbr array 1]  
      if[k mod jdwl array 2 == 0]
        msk.push[mmbr array 2]  
    tanggal add by 1 for inside looping i          
    print tanggal array i: array msk
reinitiate msk as empty array
end looping i
