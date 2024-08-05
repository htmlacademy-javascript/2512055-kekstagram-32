function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomArrayElement(items) {
  return items[getRandomInteger(0, items.length - 1)];
}

function createIdGenerator() {
  let numberId = 0;
  return function() {
    numberId += 1;
    return numberId;
  };
}


export {getRandomInteger, getRandomArrayElement,createIdGenerator};

