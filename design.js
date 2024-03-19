var num=(Math.ceil(Math.random()*100));
var count=1;
console.log(num);
function checking()
{
    var numUser=parseInt(document.getElementById("n1").value);
   if(numUser==num)
   {
    document.getElementById("res").textContent="Congratulations!! You took "+count+"tries.";
   }
   else if(numUser>num)
   {
    document.getElementById("res").textContent="Go with a Smaller Number";
   }
   else{
    document.getElementById("res").textContent="Go with a larger Number";
   }
   document.getElementById("tries").textContent=count;
   count++;
}