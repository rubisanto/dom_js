const sleepThrow = (ms, boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (boolean) {
        resolve("success");
      } else {
        reject("failed");
      }
    }, ms);
  });
};

module.exports = sleepThrow;
