// ============================================
// CYZ BACKEND — server.js
// Layer: Backend / API (the "brain")
// Tech:  Node.js + Express
// Role:  Receives name + income, runs logic,
//        returns a car recommendation
// ============================================

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// MIDDLEWARE — parses incoming JSON, allows cross-origin requests
// (CORS = allows the frontend file to talk to this server)
app.use(cors());
app.use(express.json());

// ============================================
// CAR RECOMMENDATION LOGIC
// This is your "business logic" layer.
// In Salesforce terms, think of this like Apex.
// ============================================
function getCarRecommendation(income) {
  if (income < 20000) {
    return {
      car: "Take the Bus Or Steal a Bike",
      reason: "you ain't gettting no girl with that money so you dont need a car.",
      priceRange: "Under $12,000",
      tier: "fucked"
    };
  } else if (income < 40000) {
    return {
      car: "1999  Toyota Camry",
      reason: "Comfortable, dependable, strong resale value.",
      priceRange: "$25,000 – $30,000",
      tier: "Mcdonald's Woker Status"
    };
  } else if (income < 75000) {
    return {
      car: "2023 Toyota Camry",
      reason: "Reliable, great performance, status symbol.",
      priceRange: "$43,000 – $50,000",
      tier: "Great Financial Choice but no girls "
    };
  } else if (income < 150000) {
    return {
      car: "2026 BMW X5",
      reason: "Sporty SUV, luxury interior, weekend warrior.",
      priceRange: "$65,000 – $80,000",
      tier: "luxury, comfortable, might get you a gold digger"
    };
  } else {
    return {
      car: "2024 Lamborghini Urus",
      reason: "You've earned it. Turn heads everywhere.",
      priceRange: "$230,000+",
      tier: "elite"
    };
  }
}

// ============================================
// API ROUTE — POST /recommend
// This is the "endpoint" the frontend calls.
// Like a Salesforce REST resource URL.
//
// Request body:  { "name": "John", "income": 55000 }
// Response:      { "name": "John", "car": "...", ... }
// ============================================
app.post('/recommend', (req, res) => {
  const { name, income } = req.body;
  console.log(`New request — Name: ${name}, Income: ${income}`);

  // Basic validation
  if (!name || income === undefined) {
    return res.status(400).json({ error: "Name and income are required." });
  }

  if (typeof income !== 'number' || income < 0) {
    return res.status(400).json({ error: "Income must be a positive number." });
  }

  // Run the logic
  const recommendation = getCarRecommendation(income);

  // Send back the response
  res.json({
    name: name,
    income: income,
    ...recommendation
  });
});

// ============================================
// START THE SERVER
// ============================================
app.listen(PORT, () => {
  console.log(`CYZ Backend running at http://localhost:${PORT}`);
  console.log(`POST to http://localhost:${PORT}/recommend`);
});
