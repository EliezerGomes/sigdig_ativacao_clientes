import { Request, Response } from "express"
import { TermianisService } from "./terminais"

export class ListarTerminaisController {
    async listarTerminias(request: Request, response: Response){
        const listarTerminais = new TermianisService()
        const terminais = await listarTerminais.execute()

        return response.json(terminais)
    }
}