function greet(){
  let name= `${this.name}`;
  
  setTimeout(function() {
    console.log( `Hello, ${name}`);
  }, 1000);
  
}


let user1={
  name:"john",
  age:24
}


let ans=greet.bind(user1);
ans();
