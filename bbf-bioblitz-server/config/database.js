export default {
  development: {
    driver: 'sqlite3',
    database: 'backend_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'backend_test'
  },

  production: {
    driver: 'pg',
    database: process.env.DATABASE_URL
  }
};
