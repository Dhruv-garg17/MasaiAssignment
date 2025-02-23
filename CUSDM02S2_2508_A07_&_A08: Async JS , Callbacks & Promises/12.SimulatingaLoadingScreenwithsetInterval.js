  let count=1;
  const IntervalID=setInterval(()=>{
    console.log("Loading...");
    count++;
    if(count>5){
      clearInterval(IntervalID);
      console.log("Loaded successfully!");
    }
  },1000);
     
  
