import { Router, Request, Response } from "express"
import { dbConnection } from "./db"

import User from './types/User'

const router = Router()

const validateUserData = (f: User, omits: Array<String> = []) => {
    const dataKeys: Array<String> = Object.keys(f)

    let userKeys: Array<String> = [
        'id',
        'name',
        'email',
    ]

    if (omits.length > 0) {
        userKeys = userKeys.filter(k => !omits.includes(k))
    }

    const validKeys: boolean = dataKeys.every((k) => {
        return userKeys.includes(k) && dataKeys.length === userKeys.length
    })

    return validKeys
}

router.get('/api/v1/user', (req: Request, res: Response) => {
    const sqlQuery = 'SELECT * FROM users'

    dbConnection.query(sqlQuery, (err, result) => {
        if (err) {
            res.status(500).send({
                error: 'Fail to get from users.',
                message: err.message,
            })
        } else {
            res.status(200).send(result)
        }
    })
})

router.post('/api/v1/user', (req: Request, res: Response) => {
    if (!validateUserData(req.body, [ 'id' ])) {
        res.status(422).send({
            error: 'Invalid request body. User haves required email and name fields.'
        })
        return
    }

    const { email, name } = req.body

    const sqlQuery = 'INSERT INTO users (email, name) VALUES (?, ?)'

    dbConnection.query(sqlQuery, [email, name], (err, result) => {
        if (err) {
            res.status(500).send({
                error: 'Fail to insert into users.',
                message: err.message,
            })
        } else {
            res.status(201).send({
                message: 'Success inserting into users'
            })
        }
    })
})

router.put('/api/v1/user/:id', (req: Request, res: Response) => {
    if (!validateUserData(req.body, [ 'id' ])) {
        res.status(422).send({
            error: 'Invalid request body. User haves required email and name fields.'
        })
        return
    }

    const { id } = req.params

    const { email, name } = req.body

    const sqlQuery = 'UPDATE users SET email = ?, name = ? WHERE id = ?'

    dbConnection.query(sqlQuery, [email, name, id], (err, result) => {
        if (err) {
            res.status(500).send({
                error: 'Fail to update registry in users.',
                message: err.message,
            })
        } else {
            res.status(200).send({
                message: 'Success updating into users'
            })
        }
    })
})

router.delete('/api/v1/user/:id', (req: Request, res: Response) => {
    const { id } = req.params

    const sqlQuery = 'DELETE FROM users WHERE id = ?'

    dbConnection.query(sqlQuery, [ id ], (err, result) => {
        if (err) {
            res.status(500).send({
                error: 'Fail to update registry in users.',
                message: err.message,
            })
        } else {
            res.status(204).send({
                message: 'Success deleted registry into users'
            })
        }
    })
})

export default router