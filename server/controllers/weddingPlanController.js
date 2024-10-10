const { HfInference } = require('@huggingface/inference');
const dotenv = require("dotenv");
dotenv.config();

const hf = new HfInference(process.env.HF_API_KEY);

const generateWeddingPlan = async (req, res) => {
  const {
    weddingDate,
    celebrationDays,
    location,
    noOfGuests,
    budget,
    entertainmentChoices,
    ceremonyType,
    weddingTheme,
    cateringType,
  } = req.body;

  if (!weddingDate || !celebrationDays || !location || !noOfGuests || !budget || !entertainmentChoices || !ceremonyType || !weddingTheme || !cateringType) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const prompt = `
    Create a detailed wedding itinerary for a couple with the following information:
    1. Wedding Date: ${weddingDate}
    2. Celebration Days: ${celebrationDays}
    3. Location: ${location}
    4. Number of Guests: ${noOfGuests}
    5. Budget: Rs. ${budget}
    6. Entertainment Choices: ${entertainmentChoices.join(", ")}
    7. Ceremony Type: ${ceremonyType}
    8. Wedding Theme: ${weddingTheme}
    9. Catering Type: ${cateringType}
  `;

  try {
    const response = await hf.textGeneration({
      model: 'gpt2',
      inputs: prompt,
    });

    const weddingPlan = response.generated_text;

    res.status(200).json({
      success: true,
      weddingPlan: weddingPlan.trim(),
    });
  } catch (error) {
    console.error("Error generating wedding plan:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to generate wedding plan. Please try again.",
    });
  }
};

module.exports = { generateWeddingPlan };
