const { fetch, fetchData } = require("../../utils/postgres");

const allUser = () => {
  return fetchData(
    `
      select 
        * 
      from
        users;
    `
  );
};

const addCompany = (company_name) => {
  return fetchData(
    `
      insert into 
        company(company_name) 
      values 
        ($1);
    `,
    company_name
  );
};

module.exports = {
  allUser,
  addCompany,
};
