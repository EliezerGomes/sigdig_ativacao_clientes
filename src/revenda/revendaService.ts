import { prismaClient } from "../../database/prismaClient"


export class RevendaService {
    async execute() {
        const revenda = await prismaClient.revenda.findMany()

        return revenda
    }
}