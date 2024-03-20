import { Dialect, Sequelize } from "sequelize";

const DB_SCHEMA =  process.env.DB_SCHEMA as string
const DB_USER = process.env.DB_USER as string
const DB_PWD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_DRIVER = process.env.DB_DRIVER as Dialect

const sequelize = new Sequelize(
    DB_SCHEMA,
    DB_USER,
    DB_PWD,
    {
        dialect: DB_DRIVER,
        host: DB_HOST
    },
)

export default sequelize