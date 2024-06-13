/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if(!Array.isArray(transactions) || transactions.length === 0){
    return []
  };
  const totalCategorySpent = {}
  transactions.forEach(transaction => {
    if(!totalCategorySpent[transaction.category]){
      totalCategorySpent[transaction.category]= 0;
    }
      totalCategorySpent[transaction.category]+=transaction.price;
   

    
  });

  const result = Object.keys(totalCategorySpent).map(category =>
    {
      return {
        category,
        totalSpent : totalCategorySpent[category]
      }
    }
  )

  return result



  
}

module.exports = calculateTotalSpentByCategory;
