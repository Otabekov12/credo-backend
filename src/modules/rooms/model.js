const { fetch, fetchData } = require("../../utils/postgres");

const allRooms = () => {
  return fetchData("SELECT * FROM rooms");
};

const complexRooms = (complex_id) => {
  return fetchData(
    `
      select 
        * 
      from
        rooms
      where 
        complex_id = $1;
    `,
    complex_id
  );
};

const addRooms = (rooms_number, room_square, complex_id) => {
  return fetch(
    `
      insert into
        company(rooms_number, room_square, complex_id)
      values
        ($1, $2, $3)
      returning *;
    `,
    rooms_number,
    room_square,
    complex_id
  );
};

module.exports = {
  allRooms,
  complexRooms,
  addRooms,
};
