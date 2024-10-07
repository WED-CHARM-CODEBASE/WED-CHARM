import ""
const express =require("express");


const router = express.Router();

router.route("/generate-wedding-plan").post(generateWeddingPlan);


