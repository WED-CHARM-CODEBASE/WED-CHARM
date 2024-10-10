const {generateWeddingPlan} = require("../controllers/weddingPlanController");
const express =require("express");


const router = express.Router();

router.route("/generate-wedding-plan").post(generateWeddingPlan);


module.exports = router;