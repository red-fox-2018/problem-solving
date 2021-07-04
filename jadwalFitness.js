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

function jadwalFitness(list,start_date){
    var result = {}
    for(let i=start_date;i<=31;i++){
        result['tanggal ' + i] = []
        if (i % 5 == 0) {
            result['tanggal ' + i].push('Tempat Fitness Tutup')
        }
        else {
            for(let key in list){
                if((i-start_date)%list[key]==0){
                    result['tanggal ' + i].push(key)
                }
            }
        }  
    }
    return result
}
console.log(jadwalFitness({'Tono': 2, 'Anton': 4, 'Budi': 5},7))
