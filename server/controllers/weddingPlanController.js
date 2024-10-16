const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
dotenv.config();

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
    transportationForGuests,
  } = req.body;

  // Validate input fields
  if (
    !weddingDate ||
    !celebrationDays ||
    !location ||
    !noOfGuests ||
    !budget ||
    !entertainmentChoices.length ||
    !ceremonyType ||
    !weddingTheme ||
    !cateringType ||
    accommodationNeeded === '' ||
    transportationForGuests === ''
  ) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required.',
    });
  }

  const prompt = `
Create a comprehensive wedding itinerary based on the following details:

- Wedding Date: ${weddingDate}
- Celebration Days: ${celebrationDays}
- Location: ${location}
- Number of Guests: ${noOfGuests}
- Budget: ${budget}
- Entertainment Choices: ${entertainmentChoices.join(', ')}
- Ceremony Type: ${ceremonyType}
- Wedding Theme: ${weddingTheme}
- Catering Type: ${cateringType}
- Accommodation Needed: ${accommodationNeeded ? 'Yes' : 'No'}
- Transportation for Guests: ${transportationForGuests ? 'Yes' : 'No'}

The itinerary should include an overview, a day-by-day schedule, guest information, budget breakdown, catering details, entertainment schedule, and decor implementation in JSON format.
  `;

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = await genAI.getGenerativeModel({
      model: 'gemini-1.5-pro',
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: 'application/json',
    };

    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);

    return res.status(200).json({
      success: true,
      data: result.response || 'No response received from the AI',
    });
  } catch (error) {
    console.error('Error generating wedding plan:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to generate wedding plan. Please try again.',
    });
  }
};

module.exports = { generateWeddingPlan };
