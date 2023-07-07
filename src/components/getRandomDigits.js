function getRandomDigits(number, count) {
  const digits = number.toString().split("");
  const randomDigits = [];
  const digitSet = new Set(digits);

  while (randomDigits.length < count && digitSet.size > 0) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const randomDigit = digits[randomIndex];

    if (digitSet.has(randomDigit)) {
      randomDigits.push(randomDigit);
      digitSet.delete(randomDigit);
    }
  }

  while (randomDigits.length < count) {
    const randomDigit = Math.floor(Math.random() * 10).toString();
    randomDigits.push(randomDigit);
  }

  return randomDigits.join("");
}

export default getRandomDigits;
