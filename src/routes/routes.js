import {express} from 'express';
const router = express.Router();
import APPOINTMENTCONTROLLER from '../controllers/APPOINTMENTCONTROLLER.js';
import DOCTORCONTROLLER from '../controllers/DOCTORCONTROLLER.js';
import PACIENTECONTROLLER from '../controllers/PACIENTECONTROLLER.js';
import RECEITUARIOCONTROLLER from '../controllers/RECEITUARIOCONTROLLER.js';



router.get("/", (req,res) =>{
    console.log("ok");
    res.status(200).json({message: "ok"});
});

router.use("/", PACIENTECONTROLLER);
router.use("/", DOCTORCONTROLLER);
router.use("/", APPOINTMENTCONTROLLER);
router.use("/", RECEITUARIOCONTROLLER);

export default router;
