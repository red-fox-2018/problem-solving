/*
store parameter : name,arr_interval,tglBuka,endMonth
store var temp as string
stort array time

loop start i from tglBuka end at endMonth
    loop start j at 0 end at time.length
    if i = time at j
        temp add name at j
        time at j plus arr_interval at j
    endif
    end loop
    if i mod 5 = 0
        display tanggal i: tempat fitness tutup
    else
        display tanggal i: print temp
    endif
end loop
*/

var jadwal = function(arr_name, arr_interval,tglBuka,endMonth){
    let time = [];
    let temp = '';
    for(let i=0;i<arr_name.length;i++){
        time.push(tglBuka);
    }
    for(let i=tglBuka;i<=endMonth;i++){
        for(let j=0;j<time.length;j++){
            if(i===time[j]){
                temp += ' '+arr_name[j]+' ';
                time[j]+=arr_interval[j];
            }
        }
        if(i%5 === 0){
            console.log('Tanggal '+i+': '+'Tempat Fitness Tutup');
        }
        else{
            console.log('Tanggal '+i+': '+temp)
             temp = ' ';
        }
    }
}


jadwal(['Tono', 'Anton', 'Budi','doni'], [2,4,5,3], 7, 31)