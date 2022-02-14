const capatilizeWords = (words) => {
  function captalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  const result = words.split(' ');
  let i = 0;
  while (i < result.length) {
    result[i] = captalizeWord(result[i]);
    i++;
  }
  return result.join(' ');
};
export default capatilizeWords;
