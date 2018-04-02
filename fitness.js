function fitnessSchedule(member) {

  const tanggalBuka = 7;

  for (var i = tanggalBuka; i <= 31; i++) {

    let jadwal = `Tanggal ${i}: `

    if (i % 5 == 0) {

      jadwal += `Tempat Fitness Tutup`

      console.log(`${jadwal}`);

    } else {

      for (var j = 0; j < member.length; j++) {

        if ((i - tanggalBuka + member[j].schedule) % member[j].schedule == 0) {

          jadwal += `${member[j].name}, `

        }

      }

      if (jadwal.length > 12) {

        jadwal = jadwal.slice(0, jadwal.length-2)

      }

      console.log(`${jadwal}`);

    }

  }

}

fitnessSchedule([
  {
    name: `Tono`,
    schedule : 2
  },{
    name: `Anton`,
    schedule : 4
  },{
    name: `Budi`,
    schedule : 5
  }
])
