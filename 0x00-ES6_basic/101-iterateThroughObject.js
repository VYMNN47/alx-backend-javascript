export default function iterateThroughObject(reportWithIterator) {
  let str = '';

  reportWithIterator.forEach((name) => {
    if (str) {
      str += ' | ';
    }
    str += `${name}`;
  });

  return str;
}
