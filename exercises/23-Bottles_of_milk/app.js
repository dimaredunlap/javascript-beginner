// Your code here:
var word = "bottles";
var count = 99;
while (count > 0) {
  if (count == 1){
    var word = "bottle"
  }
    console.log(count + " " + word + " of milk on the wall");
    console.log(count + " " + word + " of milk,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 0) {
      if (count == 1){
        var word = "bottle"
      }
        console.log(count + " " + word + " of milk on the wall.");
    } else {
      if (count < 1){
        var word = "bottle"
      }
        console.log("No more " + word + " of milk on the wall.");
    }
    else {
      if (count = 0)
        console.log("Go to the store and buy some more, 99 bottles of milk on the wall.");
    }
}