import clientService from "../../services/Client/client-service";
import { Request, Response } from "express";

class ClientController {
    async getClients(req: Request, res: Response) {
        try {
            const clients = await clientService.getClients()

            res.status(200).send(clients)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async getClientById(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const client = await clientService.getClientById(id)

            res.status(200).send(client)
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async createClient(req: Request, res: Response) {
        try {
            const { name, email, phone, address } = req.body
            const client = await clientService.createClient(name, email, phone, address)

            res.status(201).send(client)
        }   catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async updateClient(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            const { name, email, phone, address } = req.body
            const client = await clientService.updateClient(id, name, email, phone, address)

            res.status(200).send(client)
        }   catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }

    async deleteClient(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id)
            await clientService.deleteClient(id)

            res.status(200).send('Client deleted')
        } catch (error) {
            res.status(500).send({
                info: 'Internal error',
                error: error,
            })
        }
    }
}

export default new ClientController()