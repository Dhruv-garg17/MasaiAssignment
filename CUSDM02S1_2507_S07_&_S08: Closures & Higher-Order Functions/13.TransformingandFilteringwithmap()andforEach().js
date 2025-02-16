const processProducts = (products) => {

  const productNames = products.map(product => product.name);

 
  products.forEach(product => {
    const message = product.price > 50 ? "above" : "below";
    console.log(`${product.name} is ${message} $50`);
  });

  return productNames; 
};

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];

processProducts(products);

