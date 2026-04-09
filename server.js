const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ============================================
// CYZ CAR RECOMMENDATION ENGINE
// Tiers every $50k up to $1,000,000
// Returns: car, message, priceRange, vibe
// ============================================

function getCarRecommendation(income, name) {

  // Special cases — no car has been made for these legends
  const vips = ['haris', 'naj'];
  if (vips.some(v => name.toLowerCase().includes(v))) {
    return {
      car: "No car exists",
      message: "You are too sexy. No car has been made for you yet. Engineers are working on it. They are crying.",
      priceRange: "Priceless",
      vibe: "🔥 Too sexy for the automotive industry"
    };
  }

  if (income < 10000) {
    return {
      car: "2003 Honda Civic with a cracked bumper",
      message: "Bro the girl will hear you coming from 3 blocks away. She will wave... at someone else.",
      priceRange: "Under $5,000",
      vibe: "💀 Survival mode"
    };
  } else if (income < 20000) {
    return {
      car: "2008 Toyota Corolla",
      message: "Reliable. Honest. Invisible. She will respect you as a person and never text back.",
      priceRange: "$6,000 – $10,000",
      vibe: "😐 Friend zoned before you spoke"
    };
  } else if (income < 30000) {
    return {
      car: "2015 Nissan Sentra",
      message: "She will get in the car. She will look out the window the whole ride. She will say 'thanks' and go inside.",
      priceRange: "$12,000 – $16,000",
      vibe: "🙂 A solid maybe"
    };
  } else if (income < 40000) {
    return {
      car: "2018 Honda Accord",
      message: "Now we're talking. Clean, practical, respectable. She tells her mom you drive an Accord. Mom approves.",
      priceRange: "$18,000 – $22,000",
      vibe: "😊 Mom likes you"
    };
  } else if (income < 50000) {
    return {
      car: "2020 Mazda CX-5",
      message: "Underrated car for an underrated guy. She doesn't know what it is but it LOOKS expensive. That's the move.",
      priceRange: "$25,000 – $30,000",
      vibe: "😏 Quietly impressive"
    };
  } else if (income < 60000) {
    return {
      car: "2021 Toyota RAV4",
      message: "Safe, smart, suburban. She starts talking about 'the future' on the second date. Buckle up.",
      priceRange: "$30,000 – $35,000",
      vibe: "🏡 She's already naming the kids"
    };
  } else if (income < 70000) {
    return {
      car: "2022 Volkswagen Golf GTI",
      message: "Now you've got personality. She thinks you're fun but also responsible. She tells her friends you're 'different'.",
      priceRange: "$33,000 – $38,000",
      vibe: "😎 'He's different'"
    };
  } else if (income < 80000) {
    return {
      car: "2022 Hyundai Genesis G70",
      message: "She doesn't know the badge but the interior smells like money. She's already googling it in the bathroom.",
      priceRange: "$38,000 – $44,000",
      vibe: "🔍 She's googling you AND the car"
    };
  } else if (income < 90000) {
    return {
      car: "2023 BMW 3 Series",
      message: "The BMW pulls up and something shifts in her eyes. She straightens up. She laughs louder. Physics.",
      priceRange: "$45,000 – $52,000",
      vibe: "✨ The posture changed"
    };
  } else if (income < 100000) {
    return {
      car: "2023 Audi A4",
      message: "Four rings. She tells her ex. He pretends not to care. He cares.",
      priceRange: "$46,000 – $54,000",
      vibe: "💅 Her ex is sick rn"
    };
  } else if (income < 120000) {
    return {
      car: "2023 Mercedes C-Class",
      message: "You pull up in the Benz and she forgets what she was about to say. This is science.",
      priceRange: "$48,000 – $58,000",
      vibe: "🌟 She forgot her own name"
    };
  } else if (income < 140000) {
    return {
      car: "2023 BMW 5 Series",
      message: "Stepping up. She notices the upgrade. She doesn't say it but she notices. They always notice.",
      priceRange: "$58,000 – $68,000",
      vibe: "👀 She noticed"
    };
  } else if (income < 160000) {
    return {
      car: "2024 Lexus LC 500",
      message: "This car is art. She stops mid-sentence to ask 'wait, what is THAT?' You win the night before you even park.",
      priceRange: "$100,000 – $105,000",
      vibe: "🎨 She stopped talking about herself"
    };
  } else if (income < 200000) {
    return {
      car: "2024 Porsche Macan GTS",
      message: "Porsche badge. She posts the car on her story before she even tags you. You're the accessory now.",
      priceRange: "$80,000 – $95,000",
      vibe: "📸 You're in her story"
    };
  } else if (income < 250000) {
    return {
      car: "2024 Porsche 911 Carrera",
      message: "The 911. Timeless. She cancels her plans to ride with you. Her friends ask who you are. Nobody knows. Perfect.",
      priceRange: "$120,000 – $140,000",
      vibe: "🏆 She cancelled plans"
    };
  } else if (income < 300000) {
    return {
      car: "2024 Bentley Bentayga",
      message: "The Bentley SUV. She thinks you're either a CEO, an athlete, or a villain. All three are working in your favor.",
      priceRange: "$200,000 – $240,000",
      vibe: "🕴️ CEO or villain energy"
    };
  } else if (income < 400000) {
    return {
      car: "2024 Ferrari Roma",
      message: "Ferrari. She calls her best friend from the passenger seat just to say 'I'm in a Ferrari right now'. You are the moment.",
      priceRange: "$230,000 – $260,000",
      vibe: "📞 She called her bestie"
    };
  } else if (income < 500000) {
    return {
      car: "2024 Lamborghini Huracán",
      message: "The Lambo. People film you at red lights. She has never felt more famous in her life. She loves it. You love it.",
      priceRange: "$280,000 – $330,000",
      vibe: "🎥 Strangers are filming"
    };
  } else if (income < 600000) {
    return {
      car: "2024 Rolls-Royce Ghost",
      message: "The Ghost glides up. She doesn't say anything. She just gets in slowly. The silence says everything.",
      priceRange: "$350,000 – $400,000",
      vibe: "🤫 No words needed"
    };
  } else if (income < 750000) {
    return {
      car: "2024 Rolls-Royce Cullinan",
      message: "The Cullinan SUV. She thought she had standards. She's now rethinking all of them from the heated massage seat.",
      priceRange: "$380,000 – $420,000",
      vibe: "💺 Her standards just dissolved"
    };
  } else if (income < 1000000) {
    return {
      car: "2024 Bugatti Chiron",
      message: "1,500 horsepower. She has no frame of reference for this. Neither does anyone else. You exist in a different dimension now.",
      priceRange: "$3,000,000+",
      vibe: "🚀 Different dimension"
    };
  } else {
    return {
      car: "A custom jet with a car inside it",
      message: "At this income, you don't drive to her. She flies to wherever you are. The car is on the jet. The jet has a pool.",
      priceRange: "If you have to ask...",
      vibe: "🛩️ She flies to YOU"
    };
  }
}

// ============================================
// API ROUTE — POST /recommend
// ============================================
app.post('/recommend', (req, res) => {
  const { name, income } = req.body;

  console.log(`🚗 New request — Name: ${name}, Income: $${income?.toLocaleString()}`);

  if (!name || income === undefined) {
    return res.status(400).json({ error: "Name and income are required." });
  }

  if (typeof income !== 'number' || income < 0) {
    return res.status(400).json({ error: "Income must be a positive number." });
  }

  const recommendation = getCarRecommendation(income, name);

  console.log(`✅ Recommended: ${recommendation.car} — ${recommendation.vibe}`);

  res.json({
    name,
    income,
    ...recommendation
  });
});

app.listen(PORT, () => {
  console.log(`🚀 CYZ Backend running at http://localhost:${PORT}`);
});
