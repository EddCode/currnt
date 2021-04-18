import dotenv from 'dotenv'

dotenv.config()

module.exports = {
  env: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET,
  db: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pwd: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
}
