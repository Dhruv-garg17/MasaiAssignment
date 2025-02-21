function Person(name,age){
  this.name=name,
  this.age=age
  this.displayInfo=function(){
  console.log(`${this.name} ${this.age}` );
}
}
let person1=new Person("John",25);
let details=person1.displayInfo.bind(person1);
details();
