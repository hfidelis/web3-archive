import mysql2 from 'mysql2'

export const dbConnection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
})

dbConnection.connect((err) => {
    if (err) {
        console.error('Fail to connect into MySQL DB:')
        console.error(err.message)
    } else {
        console.info('Connected into MySQL DB')
    }
})