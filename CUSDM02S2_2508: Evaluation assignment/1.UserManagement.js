
function fetchUserData(url){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve([
        { id:1, name:"Dhruv", email:"dhruv1689.be21@chitkara.edu.in", age:21 },
        { id:2, name:"Mehul", email:"mehul637@gmail.com", age:22 },
        { id:3, name:"Tarun", email:"tarun835@gmail.com", age:21 },
        { id:4, name:"Guruansh", email:"guruansh648@gmail.com", age:20 },
        { id:5, name:"Parush", email:"parush02673@gmail.com", age:22 }
        ]);
    },3000)
  })
}

function processUsers(users, minAge){
  return users.filter(user=>user.age >= minAge).map(({name,email})=>({name,email}));
}

function createUserManager(){
  let users=[];
  return {
    addUser: (user)=>{ users=[...users,user];},
    getUsers: ()=>users.map(({ id,name})=>({id,name})),
    findUserByName: (name) => users.find(user=>user.name===name)?? "User not found"
  }
}

async function Userdetails(){
  console.log("Fetching user data...");
  
  const users= await fetchUserData("https://api.example.com/users");
  console.log("Fetched users:",users);
  
  const filteredUsers=processUsers(users,21);
  console.log("Processed users (age >= 21):",filteredUsers);
  
  const userManager=createUserManager();
  users.forEach(user => userManager.addUser(user));
  
  console.log("User List (without emails):",userManager.getUsers());
  console.log("Find user 'Mehul':",userManager.findUserByName("Mehul"));
  console.log("Find user 'Ram':",userManager.findUserByName("Ram"));
}
Userdetails();
