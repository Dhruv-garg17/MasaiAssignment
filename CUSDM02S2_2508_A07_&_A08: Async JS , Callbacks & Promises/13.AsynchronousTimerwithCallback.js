function timer(duration,Oncomplete){
  setTimeout(()=>{
    Oncomplete(`Timer of ${duration} ms finished`);
  },duration)
}

timer(5000,(message)=>{
  console.log(message);
})
