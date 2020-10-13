window.onload = function(){

var date = new Date();
var day = date.getDate();
var month = date.getMonth()+1;  
var year = date.getFullYear();

var todaydate;

 if(day<10){   //Format date yyyy-mm-dd
        day=  '0'+day
    } 
    if(month<10){
        month= '0'+month
    } 

todaydate = year+'-'+month+'-'+day;


document.getElementById("date").setAttribute("min", todaydate);
   }

   




