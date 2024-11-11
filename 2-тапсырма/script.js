 let num1=+ prompt("a санын енгызыныз:")
 let num2=+prompt("b санын енгызыныз:")
 let max=0;

 switch (true) {
     case (num1>=num2):
        
        max=num1
        alert("1- саннан 2 -сан улкен")
      
         break;
     case (num2>=num1):
        
         max=num2
         alert("2- саннан 1 -сан улкен")
         break;
     default:
         break;
 }
 alert("ортак саны "+(num1+num2)/2);

