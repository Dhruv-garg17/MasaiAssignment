function deepClone(obj){
  return JSON.parse(JSON.stringify(obj));
  
}
let obj={ name: "Alice", hobbies: ["reading", "traveling"] };
let clone=deepClone(obj);
clone.hobbies.push("coding");
console.log("Original:",obj);
console.log("Clone:",clone);
