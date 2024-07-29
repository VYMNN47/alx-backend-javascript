export default function updateUniqueItems(groceries) {
  try {
    groceries.forEach((value, key) => {
      if (value === 1) {
        groceries.set(key, 100);
      }
    });
  } catch (error) {
    throw new Error('Cannot process');
  }
}
