/* set function jadwalfitness with list parameter
  set result to empty object
  loop  i from 0 to i<=24 increment
    result property index input add empty Array    
    if (i+7) %5 equal with 0
        tempat fitness tutup
    else
        loop key in list object
            if i%list key equal with 0
              result tanggal i +7 push key
            end if
        end loop
    end if
    end loop
  return result
end function
 */

function jadwalFitness(list){
    var result = {}
    for(let i=0;i<=24;i++){
        result['tanggal ' + (i + 7)] = []
        if ((i + 7) % 5 == 0) {
            result['tanggal ' + (i + 7)].push('Tempat Fitness Tutup')
        }
        else {
            for(let key in list){
                if(i%list[key]==0){
                    result['tanggal ' + (i + 7)].push(key)
                }
            }
        }  
    }
    return result
}
console.log(jadwalFitness({'Tono': 2, 'Anton': 4, 'Budi': 5}))
