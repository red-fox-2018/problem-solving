function problemSolving(arr, buka, libur, akhir) {
  let str = '';
  for (let i = buka; i <= akhir; i++) {
    str += 'Tanggal ' +(i)+ ': ';
    if (i % 5 === 0) {
      str += "Tempat Fitness Tutup"
    }else if(i === buka) {
      for (let j in arr) {
        str += arr[j][0] + ', ';
      }
    }else {
      for (let j in arr) {
        if ((i-buka) % arr[j][1] === 0) {
          if (j==arr.length-1) {
            str += arr[j][0]
          }else {
            str += arr[j][0] + ', ';
          }
        }
      }
    }
    if (str.charAt(str.length-1)=== ' ' && str.charAt(str.length-2) === ',') {
      str = str.substr(0, str.length-2);
    }
    str += '\n'
  }
  return str
}

console.log(problemSolving([['Tono', 2], ['Anton', 4], ['Budi', 5]], 7, 5, 31));