 let num1=+ prompt("a санын енгызыныз:")
 let num2=+prompt("b санын енгызыныз:")
 let max=0;

 switch (true) {
     case (num1>=num2&&num1<num2):
        
        max=num1
      
         break;
     case (num2>=num1&&num2<num1):
        
         max=num2
         break;
     default:
         break;
 }
 alert("ен улкен сан:"+max);

