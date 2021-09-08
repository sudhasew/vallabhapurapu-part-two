let Pet = prompt ("Name your pet");
document.write(Action);
let Energy = 0;
let Happiness = 0;
document.write(Energy);
document.write(Happiness);
for (i=1; i<7; i++){
var Action = prompt ("feed, pet, or walk?");
   if (Action === "feed") {
Energy = (Energy + 2);
   } else if (Action === "pet") {
Happiness = (Happiness + 1);
   } else if (Action === "walk")
  {
  if(Energy === 0)
    {
      alert("Not enough to enjoy a walk");
    }
  else if(Energy>0)
    {
      Happiness = ( Happiness + 2); 
      Energy = (Energy - 1);
   } 
   
 } 

}; 
console.log( Pet+" has " + Happiness + " happiness and " + Energy + " energy"); 