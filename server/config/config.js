require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DB_URL',
    dialect: 'postgres',
  },
  test: {
    use_env_variable: 'DB_URL',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DB_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};

// require('dotenv').config();

// module.exports = {
//   development: {
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     dialect: 'postgres'
//   },
//   test: {
//     username: process.env.TEST_DB_USERNAME || 'root',
//     password: process.env.TEST_DB_PASSWORD || null,
//     database: process.env.TEST_DB_NAME || 'database_test',
//     host: process.env.TEST_DB_HOST || '127.0.0.1',
//     dialect: 'mysql'
//   },
//   production: {
//     username: process.env.PROD_DB_USERNAME || 'root',
//     password: process.env.PROD_DB_PASSWORD || null,
//     database: process.env.PROD_DB_NAME || 'database_production',
//     host: process.env.PROD_DB_HOST || '127.0.0.1',
//     dialect: 'mysql'
//   }
// };
