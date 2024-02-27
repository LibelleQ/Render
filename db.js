const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'dpg-cneqsn8l5elc73dcr6fg-a', // Database name
  '', // User
  '', // Password
  {
    host: 'dpg-cneqsn8l5elc73dcr6fg-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
