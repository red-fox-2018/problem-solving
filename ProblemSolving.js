//Inside function problemSolving with two parameter (inputNama, tanggal), where input nama is multidimensional array
//of name,duration and tanggal is array of two numbers,startdate and enddate
//store output as empty array
//store hasilakhir as empty string
//loop with var i through tanggal (tanggal[0]-tanggal[1])
//store var nama as empty string 
//if i is multiplication of 5, push "Tempat Fitness tutup" to output 
//else 
//loop through inputNama 
//if(i-tanggal[0] divided with inputNama[k][1] which is the duration equal to 0)
//add inputNama[k][0]which is the name to var nama
//outside for loop of inputNama
//if nama is not empty , push nama to output 
//else puth empty string to output
//outside the tanggal loop , loop through output 
//add "Tanggal",(k+tanggal[0]),and output[k] to hasilakhir
// return hasilakhir

function problemSolving(inputNama,tanggal){
    var output=[]
    var hasilakhir=""
    
    for(var i=tanggal[0]; i<=tanggal[1]; i++){
        var nama=""
        if(i%5===0){
            output.push("Tempat Fitness Tutup")

        }
        else{
            for(var k=0; k<inputNama.length; k++){
                if((i-tanggal[0])%inputNama[k][1]===0){
                    nama+=inputNama[k][0]+" "
                }
            } 
            if(nama.length > 0){
                output.push(nama)
            }
            else{
                output.push("")
            }
        }

    }
    for(var k=0; k<output.length; k++){
        hasilakhir+="Tanggal "+(k+tanggal[0])+" : " + output[k] +"\n"
    }
    return hasilakhir
}
let result  = problemSolving([['Tono',2],["Anton",4],["Budi",5]],[7,31])
console.log(result)