function sortNames(namesArray){
  return namesArray.sort(function(a,b){
    return a.localeCompare(b);
  })
}
let arr=["Charlie", "Alice", "Bob"];
console.log(sortNames(arr));
