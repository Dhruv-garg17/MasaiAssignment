const getUserAccessMessage = ({ role, active }) => 
  role === "admin" ? (active ? "Admin Access Granted!" : "Admin Access Revoked") :
  role === "user" ? (active ? "User Access Granted!" : "User Access Revoked") :
  "Access Denied";


let user1 = { name: "Alice", role: "admin", active: false };
let user2 = { name: "Bob", role: "user", active: true };

console.log(getUserAccessMessage(user1));
console.log(getUserAccessMessage(user2));
