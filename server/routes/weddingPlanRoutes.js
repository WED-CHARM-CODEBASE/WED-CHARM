// imports
const {generateWeddingPlan} = require("../controllers/weddingPlanController");
const express =require("express");
const router = express.Router();


// routes
router.route("/generate-wedding-plan").post(generateWeddingPlan);

// exports
module.exports = router;