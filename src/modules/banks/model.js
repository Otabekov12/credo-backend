const { fetch, fetchData } = require("../../utils/postgres");

const allBanks = () => {
  return fetchData("SELECT * FROM banks");
};

const addBank = (banks_name, credit_limit, credit_duration, starting_payment) => {
  return fetch(
    `
      insert into company
        (banks_name, credit_limit, credit_duration, starting_payment)
      values
        ($1, $2, $3, $4) 
      returning *;
    `,
    banks_name,
    credit_limit,
    credit_duration,
    starting_payment
  );
};

module.exports = {
  allBanks,
  addBank,
};
