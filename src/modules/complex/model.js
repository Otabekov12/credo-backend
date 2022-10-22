const { fetch, fetchData } = require("../../utils/postgres");

const allComplex = () => {
  return fetchData("SELECT * FROM complex");
};

const companyComplex = (company_id) => {
  return fetchData("select * from complex where company_id = $1", company_id);
};

const addComplex = (complex_name, complex_adress, price_squer, company_id) => {
  return fetch(
    `
      insert into company
        (complex_name, complex_adress, price_squer,  company_id)
      values
        ($1, $2, $3, $4) 
      returning *;
    `,
    complex_name,
    complex_adress,
    price_squer,
    company_id
  );
};

module.exports = {
  allComplex,
  companyComplex,
  addComplex,
};
