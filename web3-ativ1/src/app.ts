import express from 'express'
import router from './router'
import cors from 'cors'

const PORT = 5173
const application = express()

application
    .use(cors())
    .use(express.json())

application
    .use(router)

application
    .listen(PORT, () => {
        console.info(
            `app listening on port: ${PORT}`
        )
    })
