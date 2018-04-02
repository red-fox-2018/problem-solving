# problem-solving

# CREATE function generateScheduleFitness with one parameter
#   INITIALIZE firstDay to 7
#   INITIALIZE date to 31
#   LOOP from firstDay to date and plus one for every iteration
#       INITIALIZE currentSchedule to empty array
#       INITIALIZE currentDay to i minus firstDay
#       LOOP array of object from 0 untill length of array of object and plus one every iteration
#           IF currentDay equal to arr[j].first, push arr[j].name to currentSchedule
#           ELSE IF currentDay modulus arr[j].schedule equal to 0, push arr[j].name to currentSchedule
#       IF i modulus 5 equal 0, DISPLAY 'Tanggal ke i: Tempat Fitness Libur'
#       ELSE DISPLAY 'Tanggal i: people at currentScedhule'