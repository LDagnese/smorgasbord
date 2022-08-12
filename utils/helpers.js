module.exports = {
  format_expensive: (num) => {
    let returnStr = "";

    for (let i = 0; i < parseInt(num); i++) {
      returnStr = returnStr + "$";
    }
    return returnStr;
  },
};
