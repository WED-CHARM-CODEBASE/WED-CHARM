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
    accommodationNeeded,
    transportationForGuests
  } = req.body;

  if (!weddingDate || !celebrationDays || !location || !noOfGuests || !budget || !entertainmentChoices || !ceremonyType || !weddingTheme || !cateringType) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const prompt = `
    You are a professional wedding planner. Please create a detailed 3-day wedding itinerary based on the following details:
    
    Wedding Date: ${weddingDate}
    Celebration Days: ${celebrationDays}
    Location: ${location}
    Number of Guests: ${noOfGuests}
    Budget: Rs. ${budget}
    Entertainment: ${entertainmentChoices.join(", ")}
    Ceremony Type: ${ceremonyType}
    Wedding Theme: ${weddingTheme}
    Catering: ${cateringType}
    Accommodation Needed: ${accommodationNeeded}
    Transportation for Guests: ${transportationForGuests}

    Please create a detailed itinerary (html) including:

    1. Schedule of events for each day (morning, afternoon, evening)
    2. Meal plans and catering details
    3. Entertainment activities
    4. Guest transportation arrangements
    5. Venue setup for different events (e.g., ceremony, reception)
  `;

  try {
    const response = await hf.textGeneration({
      model: 'bigscience/bloom', // Switch to a more capable model
      inputs: prompt,
      parameters: {
        max_new_tokens: 1000,  // Increased token limit for detailed response
        temperature: 0.7,      // Adjust for creativity
      }
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
