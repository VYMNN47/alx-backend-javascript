export default function groceriesList() {
  const groceries = [
    { name: 'Apples', quantity: 10 },
    { name: 'Tomatoes', quantity: 10 },
    { name: 'Pasta', quantity: 1 },
    { name: 'Rice', quantity: 1 },
    { name: 'Banana', quantity: 5 },
  ];

  const groceryMap = new Map();

  groceries.forEach((grocery) => {
    groceryMap.set(grocery.name, grocery.quantity);
  });

  return groceryMap;
}
