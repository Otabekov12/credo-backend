CREATE DATABASE credo;

CREATE TABLE company(
  id uuid not null default uuid_generate_v4() primary key,
  company_name varchar(64) NOT NULL
);
-- ZPmq6IvQTFal_JkHVEszdgyrJ5iCjo08
INSERT INTO
  company(company_name)
VALUES

  ('Golden House');
INSERT INTO
  company(company_name)
VALUES
  ('Bizning Uylar');
  
INSERT INTO
  company(company_name)
VALUES
  ('Murod Buildings');
  
CREATE TABLE complex(
  id uuid not null default uuid_generate_v4() primary key,
  complex_name varchar(64) NOT NULL,
  complex_adress varchar(64) NOT NULL,
  price_squer int not null,
  company_id uuid,
  foreign key(company_id) references company(id) on
  delete
    cascade
    
);
INSERT INTO
  complex(
    complex_name,
    complex_adress,
    price_squer,
    company_id
  )
VALUES
  (
    'Qushbegi',
    'Qushbegi ko`chasi',
    870000,
    '28656172-70b5-4b0e-b662-fdbf062ed8e3'
  );
  
INSERT INTO
  complex(
    complex_name,
    complex_adress,
    price_squer,
    company_id
  )
VALUES
  (
    'Yangi choshtepa',
    'Yangi hayot tumani ',
    758000,
    'ZPmq6IvQTFal_JkHVEszdgyrJ5iCjo08'
  );
  
INSERT INTO
  complex(
    complex_name,
    complex_adress,
    price_squer,
    company_id
  )
VALUES
  (
    'Nest One',
    'Alisher Navoiy ko`chasi',
    1750000,
    'de4f86b2-47b5-45d0-9749-e7ab1527bc9d'
    
  );
CREATE TABLE rooms(
  id uuid not null default uuid_generate_v4() primary key,
  rooms_number int NOT NULL,
  room_square int NOT NULL,
  complex_id uuid,
  foreign key(complex_id) references complex(id) on
  delete
    cascade
);

INSERT INTO
  rooms(rooms_number, room_square, complex_id)
VALUES
  (2, 84, 'b12a72d3-d08b-4e93-805c-ef2c2481d0a9');
  
INSERT INTO
  rooms(rooms_number, room_square, complex_id)
VALUES

  (2, 64, '4a05c5c1-48f1-4f6d-b96c-4a6f8f82ab4a');
  
DROP TABLE IF EXISTS banks;
CREATE TABLE banks(
  id uuid not null default uuid_generate_v4() primary key,
  banks_name varchar(64) NOT NULL,
  credit_limit int NOT NULL,
  credit_duration int NOT NULL,
  starting_payment int NOT NULL
);

DROP TABLE IF EXISTS pay_time;

create table pay_time(
  id uuid not null default uuid_generate_v4(),
  pay_time int not null,
  bank_id uuid,
  foreign key(bank_id) references banks(id) on
  delete
    cascade
);

insert into
  pay_time(pay_time, bank_id)
values

  (10, 'fd1b1fb2-0e47-4a2d-9773-3d22fba97a7d');
insert into
  pay_time(pay_time, bank_id)
values

  (15, 'c8d13e6e-78df-4238-9198-614e114a66e1');
INSERT INTO
  banks(
    banks_name,
    credit_limit,
    credit_duration,
    starting_payment
  )
VALUES
  ('Turon Bank', 65000000, 15, 5);
  
INSERT INTO
  banks(
    banks_name,
    credit_limit,
    credit_duration,
    starting_payment
  )
VALUES
  ('Hamkor Bank', 100000000, 20, 5);
  
CREATE TABLE users(
  id uuid not null default uuid_generate_v4(),
  user_name varchar(64) NOT NULL,
  user_password int NOT NULL
  
);
INSERT INTO
  users(user_name, user_password)
VALUES

  ('Salim', 12345678);
INSERT INTO
  users(user_name, user_password)
VALUES

  ('Ali', 87654321);