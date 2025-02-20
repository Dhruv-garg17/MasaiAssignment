
let person={
  getInfo: function(){
  return `${this.name} ${this.age}`;
  }
}

let user1={
  name:"john",
  age:24
}

let user2={
  name:"dev",
  age:21
}


let user3={
  name:"dhruv",
  age:22
}
console.log(person.getInfo.call(user1));
console.log(person.getInfo.call(user2));
console.log(person.getInfo.call(user3));
