export default function concatArrays(array1, array2, string) {
  const chars = [...array1, ...array2, ...string];
  return chars;
}
