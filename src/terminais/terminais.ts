import { prismaClient } from "../../database/prismaClient";

export class TermianisService {
    async execute() {
        const terminais = await prismaClient.terminais.findMany()

        return terminais
    }
}