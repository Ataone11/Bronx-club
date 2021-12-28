import { Router }  from "express";
const router = Router();

import * as usuarioCtrl from "./controller";

router.get("/usuarios", usuarioCtrl.getUsuarios); 

router.get("/usuarios/:id", usuarioCtrl.getUsuario);

router.post("/usuarios", usuarioCtrl.createUsuario);

router.get("/plan", usuarioCtrl.getPlans); 

router.get("/plan/:id", usuarioCtrl.getPlan);

router.post("/plans", usuarioCtrl.createPlan);





export default router