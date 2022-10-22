const { fetch, fetchData } = require("../../utils/postgres");

const getCalculator = async (home_id, pay_time) => {
  const bank = await fetch(
    `
      select
        *
      from
        banks as b
        inner join pay_time as t on t.bank_id = b.id
      where
        t.pay_time = $1
        and b.credit_limit >= (
        select
          r.size * p.room_square as price
        from
          rooms as r
          inner join complex as p on r.complex_id = p.id
        where
          r.id = $2
        );
    `,
    pay_time,
    home_id
  );

  const room = await fetch(
    `
      select
        *
      from
        rooms as r
        inner join complex as p on p.id = r.complex_id
      where
        r.id = $1;
    `,
    home_id
  );

  if (!bank || !room) {
    return null;
  }

  const summa = room.size * room.room_square;
  const starting = (bank.starting_payment / 100) * summa;
  const monthly = (summa - starting) / bank.pay_time;

  return {
    bank: bank,
    calculating: {
      summa,
      starting,
      monthly,
      bank_servis: bank.credit_duration,
    },
  };
};

module.exports = {
  getCalculator,
};
