function checkElement(arr, element){
  let flag=false;
  if(arr.includes(element)){
    flag=true;
  }
  
  console.log(flag);
}

let arr=[10,20,30,40,50];
let element=60;
checkElement(arr, element);
