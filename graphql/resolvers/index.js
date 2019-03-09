const fs = require("fs");
const fetchData = require("../../lib/fetchData");

module.exports = {
  faqs: async () => {
    try {
      const responseData = fetchData("faqs");
      return responseData;
    } catch (err) {
      throw err;
    }
  },
  homepageElement: async () => {
    try {
      const responseData = fetchData("homepage");
      return responseData;
    } catch (err) {
      throw err;
    }
  }
};
