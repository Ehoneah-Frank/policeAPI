

import { Router } from "express";
import { addStatement, getStatement, getsingleData, patchData } from "../controllers/statement_controller.js";


const policeRouter = Router();


policeRouter.post('/statement', addStatement);
policeRouter.get('/statement', getStatement);
policeRouter.get('/statement/:id', getsingleData);
policeRouter.patch('/statement/:id', patchData)
// policeRouter.get('/all', (req, res)=>{
//     res.json('All statement is listed below');
// });

// policeRouter.post('/statement', (req, res) =>{
//     res.json('Statement has been posted');
// });



 export default policeRouter;


