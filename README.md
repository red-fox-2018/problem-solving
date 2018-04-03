# problem-solving

PSEUDOCODE
1. store var arrMembers equals to ['Tono', 'Anton', 'Budi']
2. store var arrInterval equals to ['2', '4', '5']
2. store var arrResult equals to []
3. store var jadwalTono equals to 7 + arrInterval[0]
4. store var jadwalAnton equals to 7 + arrInterval[1]
5. store var jadwalBudi equals to 7 + arrInterval[2]
6. for date equals to 7, date smaller than equals to 31, date add 1 for each looping
7. if(date == jadwalTono) then push 'Tono' to arrResult, jadwalTono add equals to arrInterval[0]
8. if(date == jadwalAnton) then push 'Anton' to arrResult, jadwalAnton add equals to arrInterval[1]
9. if(date == jadwalBudi) then push 'Budi' to arrResult, jadwalBudi add equals to arrInterval[2]
10. display 'Tanggal ' + date + ' : ' + arrResult
11. if(date % 5 == 0) then display 'Tanggal ' + date + ' : ' + 'tempat fitness tutup'
