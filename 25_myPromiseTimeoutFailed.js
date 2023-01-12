const sleepThrow = (ms, boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (boolean === true) {
        resolve("success");
      } else {
        reject("failed");
      }
    }, ms);
  });
};

module.exports = sleepThrow;
