const { fetch, fetchData } = require("../../utils/postgres");

const getDuration = () => {
  return fetchData(
    `
      select 
        * 
      from 
        pay_time;
    `
  );
};

module.exports = {
  getDuration,
};
