require('dotenv').config()

import express from 'express'
import sequelize from './db/db'
import dbInit from './db/init'

import router from './router'
import cors from 'cors'

const PORT = process.env.APP_PORT || 8001
const application = express()

application
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))

application
    .use(router)

sequelize.authenticate()
    .then(() => {
        console.info('Success to connect into MySQL DB')
        dbInit()
    })
    .catch((err) => {
        console.error('Fail to connect into MySQL DB:')
        console.error(err.message)
    })

sequelize.sync()
    .then(() => {
        console.info('Success to sync DB Models')
        console.info('MODELS', sequelize.models)

        application
            .listen(PORT, () => {
                console.info(
                    `[[ APP Started && Listening on port: ${PORT} ]]`
                )
            })
    })
    .catch(() => {
        console.error('Errr while sync DB Models')
    })