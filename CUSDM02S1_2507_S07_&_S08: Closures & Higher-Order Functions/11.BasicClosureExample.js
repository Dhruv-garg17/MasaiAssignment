const outerFunction = () => {
  let message = "Hello from closure!";

  return () => {
    console.log(message);
  };
};

const storedFunction = outerFunction();

storedFunction(); 
