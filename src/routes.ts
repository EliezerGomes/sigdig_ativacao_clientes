import { ListarTerminaisController } from './terminais/terminaisController';
import { Router } from "express";
import { ListaEmpresasController } from "./empresas/empresasController";
import { ListarRevendaController } from "./revenda/revendaController";

const router = Router()

const empresasC = new ListaEmpresasController()
const revendasC = new ListarRevendaController()
const terminaisC = new ListarTerminaisController()

router.get("/empresas", empresasC.empresas)
router.get("/revendas", revendasC.listarRevenda)
router.get("/terminais", terminaisC.listarTerminias)

export { router }