const checkout = {
  items: [],
  total: 0,

  addItem(item) {
    const price = parseFloat(item.price); 

    if (isNaN(price)) {
      console.log(`Invalid price for item: ${item.name}`);
      return;
    }

    item.price = price; 
    this.items.push(item);
    this.total += price;
  },

  getTotal() {
    return `Total: $${this.total.toFixed(2)}`; 
  }
};

// Test cases
checkout.addItem({ name: "Coffee Maker", price: "99.95" });
checkout.addItem({ name: "Milk", price: 3.50 }); 
checkout.addItem({ name: "Bag", price: "abc" }); 

console.log(checkout.getTotal()); 
