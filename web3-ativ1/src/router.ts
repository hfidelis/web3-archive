import { Router, Request, Response } from "express"

import frameworksData from './mock/frameworksData'
import Framework from './types/Framework'

let frameworks: Array<Framework> = frameworksData
const router = Router()

const dataExists = (id: string | number) => {
    const idToTest: number = Number(id)
    const data: Array<Framework> = frameworks.filter(item => item.id === idToTest)

    if (data.length > 0) {
        return true
    }
    return false
}

const validateFrameworkData = (f: Framework, omits: Array<String> = []) => {
    const dataKeys: Array<String> = Object.keys(f)

    let frameworkKeys: Array<String> = [
        'id',
        'name',
        'haveSupport',
        'fullstack'
    ]

    if (omits.length > 0) {
        frameworkKeys = frameworkKeys.filter(k => !omits.includes(k))
    }

    const validKeys: boolean = dataKeys.every((k) => {
        return frameworkKeys.includes(k) && dataKeys.length === frameworkKeys.length
    })

    return validKeys
}

router
    .get('/frameworks', (req: Request, response: Response) => {
        const data: Array<Framework> = frameworks

        response
            .status(200)
            .send(data)

        response.end()
    })

router
    .get('/frameworks/:id', (req: Request, response: Response) => {
        const id: number = Number(req.params.id)
        const dataResponse: Array<Framework> = frameworks
                                                    .filter(item => item.id === id)

        try {
            if (dataResponse.length > 0) {
                const framework: Framework = dataResponse[0]
                response.status(200).send(framework)
            }
    
            const ERROR_MESSAGE: string = 'resource not found!'
    
            response
                .status(404)
                .send({
                    error: ERROR_MESSAGE
                })
    
            response.end()
        } catch (err) {
            const UNEXPECTED_MESSAGE: string = 
                'unexpected server error, please try again later!'

            response
                .status(500)
                .send({
                    error: UNEXPECTED_MESSAGE,
                    message: err,
                })
        }
    })

router
    .post('/frameworks', (req: Request, response: Response) => {
        try {
            const data: any = req.body

            const validData: boolean = validateFrameworkData(data)
    
            if (validData) {
                const idExists: boolean = dataExists(data.id)
    
                if (!idExists) {
                    frameworks.push(data)

                    response
                        .status(201)
                        .send(data)
                } else {
                    const RESOURCE_EXISTS_MESSAGE: string = 
                     'resource with this id already exists, update with PUT method'
    
                    response
                        .status(409)
                        .send({
                            error: RESOURCE_EXISTS_MESSAGE
                        })
                }
            } else {
                const INVALID_DATA_MESSAGE: string =
                    'invalid data, it must contain the following fields: ["id", "name", "haveSupport", "fullstack"]'
                
                response
                    .status(400)
                    .send({
                        error: INVALID_DATA_MESSAGE
                    })
            }   
        } catch (err) {
            const UNEXPECTED_MESSAGE: string = 
                'unexpected server error, please try again later!'

            response
                .status(500)
                .send({
                    error: UNEXPECTED_MESSAGE,
                    message: err,
                })
        }
    })

router
    .put('/frameworks/:id', (req: Request, response: Response) => {
        try {
            const id: number = Number(req.params.id)

            if (dataExists(id)) {
                const validData: boolean = validateFrameworkData(req.body, ['id'])

                if (validData) {
                    let framework: Framework | undefined = frameworks.find(f => f.id === id)

                    if (framework) {
                        framework.name = req.body.name
                        framework.haveSupport = req.body.haveSupport
                        framework.fullstack = req.body.fullstack

                        response
                            .status(200)
                            .send(framework)
                    }
                }
                
            } else {
                const NOT_FOUND_MESSAGE: string =
                    "resource with this id doens't exists"

                response
                    .status(404)
                    .send({
                        error: NOT_FOUND_MESSAGE
                    })
            }
        } catch (err) {
            const UNEXPECTED_MESSAGE: string = 
                'unexpected server error, please try again later!'

            response
                .status(500)
                .send({
                    error: UNEXPECTED_MESSAGE,
                    message: err,
                })
        }
    })

router
    .delete('/frameworks/:id', (req: Request, response: Response) => {
        try {
            const id: number = Number(req.params.id)

            if (dataExists(id)) {
                frameworks = frameworks.filter(f => !(f.id === id))

                const SUCCESSFULLY_DELETED_MESSAGE: string =
                    'resource deleted successfully'

                response
                    .status(204)
                    .send({
                        message: SUCCESSFULLY_DELETED_MESSAGE
                    })
            }
        } catch (err) {
            const UNEXPECTED_MESSAGE: string = 
                'unexpected server error, please try again later!'

            response
                .status(500)
                .send({
                    error: UNEXPECTED_MESSAGE,
                    message: err,
                })
        }
    })

export default router