//PSEUDOCODE
// STORE str WITH EMPTY STRING;
// STORE count WITH 0;
//     LOOP start UNTIL end i COUNT 1
//         STORE cek WITH true
//         STORE nama WITH EMPTY STRING
//         IF i === start 
//             LOOP l UNTIL l<arr.length l COUNT 1
//                 ADD nama arr[l][0]+', '
//             END LOOP
//         ELSE IF i%5==0
//             ADD str += "Tanggal "+i+":"+" Tempat Fitness Tutup"
//             ADD str += "\n"
//             count BY 1
//             ADD cek = false
//         ELSE
//             LOOP l UNTIL l<arr.length l COUNT 1
//                 IF count%arr[l][1]==0
//                     ADD nama += arr[l][0]+', '
//                 END IF
//             END LOOP
//         END IF
//         IF cek==true
//             ADD str += "Tanggal "+i+": "+nama.substr(0,nama.length-2)+"\n"
//             count BY 1
//         END IF
//     END LOOP

// DISPLAY str 

function problemSolve(arr, start, end){
    
    var str = '';
    var count = 0;
    for(var i=start;i<=end;i++){
        var cek = true;
        var nama = '';
        if (i === start) {
            for(var l=0;l<arr.length;l++){
                nama += arr[l][0]+', '
            }
        } else if(i%5==0){
            str += "Tanggal "+i+":"+" Tempat Fitness Tutup"
            str += "\n"
            count++
            cek = false
        } else {
            for(var l=0;l<arr.length;l++){
                if(count%arr[l][1]==0){
                    nama += arr[l][0]+', '
                }
            }
        }
        if(cek==true){
            str += "Tanggal "+i+": "+nama.substr(0,nama.length-2)+"\n"
            count++
        }
    }
    return str 
}
    
console.log(problemSolve([['Tono',2],['Anton',4],['Budi',5]],7, 31));