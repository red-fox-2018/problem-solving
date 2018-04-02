function generateScheduleFitness(arr) {
    let firstDay = 7;
    let date = 31;

    for (let i = firstDay; i <= date; i++) {
        let currentScedhule = [];
        let currentDay = i - firstDay;
        for (let j = 0; j < arr.length; j++) {
            if (currentDay === arr[j].first) {
                currentScedhule.push(arr[j].name)
            } else if (currentDay % arr[j].schedule === 0) {
                currentScedhule.push(arr[j].name)
            }
        }
        if (i % 5 === 0) {
            console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
        } else {
            console.log(`Tanggal ${i}: ${currentScedhule.join(', ')}`)
        }
    }
}

generateScheduleFitness([{
    name: 'Tono',
    first: 0,
    schedule: 2
}, {
    name: 'Anton',
    first: 0,
    schedule: 4
}, {
    name: 'Budi',
    first: 0,
    schedule: 5
}])