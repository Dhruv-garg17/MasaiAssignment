
let age = 25;  


const displayAge = () => console.log(`Age: ${age}`);


const changeAge = newAge => {
  age = newAge;
  console.log(`Updated Age: ${age}`);
};


displayAge();  
changeAge(30); 
displayAge();  
