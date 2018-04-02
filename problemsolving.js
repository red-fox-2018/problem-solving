/*pseudocode

 function(startDate,arrayOrang,arrayHari)
    count=0
    FOR var i=7;i<=31 {
      set store =''
      set store1='

      FOR j=0j<arrayOrang.length;j++{
         IF i%5===0 {
          store=''
          store1='' 
         ELSE IF count%arrayHari[j]===0
           store+=arrayOrang[j]+','
         ELSE IF count===0
          store1+=arrayOrang[j]  
         }
         END IF    
      }
      END FOR
    IF I%5===0
      console.log('Tanggal'+i+)+Tempat itnes tutup)
    ELSE IF store!==''
       console.log Tanggal+i+store1
    ELSE IF store1!==''
       console.log TAnggal+i+store
    END IF
   count++
  END FOR          

*/
function kalender(startDate,arrayOrang,arrayHari) {

  var count=0;
  
  

  for(var i=startDate;i<=31;i++ ) {
  	var store='';
  	var store1='';
  	for(var j=0;j<arrayOrang.length;j++){
  	  if(i%5===0){
  	  	store+='';
  	  	store1+='';
  	  }	 
  	   else if(count%arrayHari[j]===0) {
         store+=arrayOrang[j]+','; 
  	   }
      else if(count===0) {
         store1+=arrayOrang[j]+',';
  	  } 
  	}
  	if(i%5===0){
  		console.log('Tanggal '+i+':'+'Tempat Fitnes Tutup')
  	}else if(store!==''){
  	   console.log('Tanggal '+i+':'+store)
  	 }
      else if(store1!==''){
      console.log('Tanggal '+i+':'+store1)
  	}else{
      console.log('Tanggal '+i+':')
    }
    count++;  
  }
 
 }




kalender(7,['Tono','Anton','Budi'],[2,4,5]);