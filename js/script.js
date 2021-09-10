let pet = prompt ("Pet's name");
document.write(action);
let energy = 0;
let happiness = 0;
document.write(energy);
document.write(happiness);
for (i=1; i<7; i++){
var action = prompt ("feed, pet or walk?");
   if (action === "feed") {
energy = (energy + 2);
   } else if (action === "pet") {
happiness = (happiness + 1);
   } else if (action === "walk")
  {
  if(energy === 0)
    {
      alert("Not enough energy to enjoy a walk.");
    }
  else if(energy>0)
    {
      happiness = ( happiness + 2); 
      energy = (energy - 1);
   } 
   
 } 

};
console.log("Pet's Name : "+pet);
console.log("Pet's Happiness : "+happiness+" and Energy Level : "+energy);
console.log( pet+" has " + happiness + " happiness and " + energy + " energy."); 