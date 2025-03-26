import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

console.log("DB NAME" + process.env.DB_NAME);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);

// const sequelize = process.env.DB_URL
//   ? new Sequelize(process.env.DB_URL)
//   : new Sequelize(
//       process.env.DB_NAME || '',
//       process.env.DB_USER || '',
//       process.env.DB_PASSWORD,
//       {
//         host: 'localhost',
//         dialect: 'postgres',
//         dialectOptions: {
//           decimalNumbers: true,
//         },
//       }
//     );

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Required for hosted databases
    },
  },
  logging: false,
});

export default sequelize;
