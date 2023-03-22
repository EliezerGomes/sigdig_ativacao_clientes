import { Request, Response } from "express"
import { RevendaService } from "./RevendaService"

export class ListarRevendaController {
    async listarRevenda(request: Request, response: Response){
        const listarRevendaService = new RevendaService()
        const revenda = await listarRevendaService.execute()

        return response.json(revenda)
    }
}