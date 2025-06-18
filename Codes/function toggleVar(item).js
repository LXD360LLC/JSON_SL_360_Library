function toggleVar(item)
{
var play=GetPlayer(); // get the player
var counter=0; // this will count the number of true variables
// set the Var+item (Var1 or Var2 or Var3 etc.) variable to the opposite (! mark makes a true false and a false true)
play.SetVar("Var"+item,!play.GetVar("Var"+item));