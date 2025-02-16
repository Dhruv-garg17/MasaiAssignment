const countCategories = (categories) => {
  
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return categoryCounts;
};

const sortedCategories = (categories) => {
  const categoryCounts = countCategories(categories);

  return Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1]) 
    .map(([category]) => category); 
};


const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(categories));


console.log(sortedCategories(categories));

