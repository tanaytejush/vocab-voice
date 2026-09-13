// Static vocabulary dataset. No backend — everything the app needs to run
// a session lives here. Each entry is deliberately plain and accurate;
// no obscure or questionable words.

export const TOPICS = [
  { id: "everyday", label: "Everyday English" },
  { id: "interview", label: "Interview English" },
  { id: "travel", label: "Travel English" },
];

export const DIFFICULTIES = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

export const VOCABULARY = [
  // ---------- Everyday English ----------
  {
    word: "Gather",
    partOfSpeech: "verb",
    definition: "To bring people or things together in one place.",
    example: "We gather in the kitchen every Sunday for breakfast.",
    synonym: "Collect",
    topic: "everyday",
    difficulty: "beginner",
  },
  {
    word: "Tidy",
    partOfSpeech: "adjective",
    definition: "Neat and arranged in an orderly way.",
    example: "She keeps her desk tidy before she leaves work.",
    synonym: "Neat",
    topic: "everyday",
    difficulty: "beginner",
  },
  {
    word: "Borrow",
    partOfSpeech: "verb",
    definition: "To take something with the intention of giving it back.",
    example: "Can I borrow your umbrella until tomorrow?",
    synonym: "Loan (from)",
    topic: "everyday",
    difficulty: "beginner",
  },
  {
    word: "Rush",
    partOfSpeech: "verb",
    definition: "To move or act with great speed, often because of little time.",
    example: "I had to rush to catch the last train home.",
    synonym: "Hurry",
    topic: "everyday",
    difficulty: "beginner",
  },
  {
    word: "Postpone",
    partOfSpeech: "verb",
    definition: "To move an event to a later time or date.",
    example: "We had to postpone the picnic because of the rain.",
    synonym: "Delay",
    topic: "everyday",
    difficulty: "intermediate",
  },
  {
    word: "Convenient",
    partOfSpeech: "adjective",
    definition: "Easy to use or fitting well with someone's needs.",
    example: "The new bus stop is very convenient for my commute.",
    synonym: "Handy",
    topic: "everyday",
    difficulty: "intermediate",
  },
  {
    word: "Reluctant",
    partOfSpeech: "adjective",
    definition: "Unwilling to do something and hesitating before doing it.",
    example: "He was reluctant to lend his car to a stranger.",
    synonym: "Hesitant",
    topic: "everyday",
    difficulty: "intermediate",
  },
  {
    word: "Overwhelmed",
    partOfSpeech: "adjective",
    definition: "Having too much to deal with at once.",
    example: "She felt overwhelmed by the number of emails after her trip.",
    synonym: "Swamped",
    topic: "everyday",
    difficulty: "intermediate",
  },
  {
    word: "Meticulous",
    partOfSpeech: "adjective",
    definition: "Showing great care and attention to detail.",
    example: "He is meticulous about keeping his receipts organized.",
    synonym: "Thorough",
    topic: "everyday",
    difficulty: "advanced",
  },
  {
    word: "Ambiguous",
    partOfSpeech: "adjective",
    definition: "Open to more than one interpretation; not clear.",
    example: "Her answer was ambiguous, so I asked her to explain further.",
    synonym: "Unclear",
    topic: "everyday",
    difficulty: "advanced",
  },
  {
    word: "Resilient",
    partOfSpeech: "adjective",
    definition: "Able to recover quickly from difficulties.",
    example: "Children are often more resilient than we expect.",
    synonym: "Tough",
    topic: "everyday",
    difficulty: "advanced",
  },
  {
    word: "Candid",
    partOfSpeech: "adjective",
    definition: "Honest and direct, even about difficult topics.",
    example: "I appreciated her candid feedback on my essay.",
    synonym: "Frank",
    topic: "everyday",
    difficulty: "advanced",
  },

  // ---------- Interview English ----------
  {
    word: "Strength",
    partOfSpeech: "noun",
    definition: "A quality that makes someone good at something.",
    example: "My biggest strength is staying calm under pressure.",
    synonym: "Advantage",
    topic: "interview",
    difficulty: "beginner",
  },
  {
    word: "Reliable",
    partOfSpeech: "adjective",
    definition: "Able to be trusted to do what is expected.",
    example: "My manager described me as a reliable team member.",
    synonym: "Dependable",
    topic: "interview",
    difficulty: "beginner",
  },
  {
    word: "Deadline",
    partOfSpeech: "noun",
    definition: "The latest time by which something must be finished.",
    example: "I always plan my week around upcoming deadlines.",
    synonym: "Due date",
    topic: "interview",
    difficulty: "beginner",
  },
  {
    word: "Motivated",
    partOfSpeech: "adjective",
    definition: "Having a strong reason or desire to do something.",
    example: "I am motivated by solving problems that others find difficult.",
    synonym: "Driven",
    topic: "interview",
    difficulty: "beginner",
  },
  {
    word: "Collaborate",
    partOfSpeech: "verb",
    definition: "To work together with others toward a shared goal.",
    example: "Our team collaborates closely with the design department.",
    synonym: "Cooperate",
    topic: "interview",
    difficulty: "intermediate",
  },
  {
    word: "Initiative",
    partOfSpeech: "noun",
    definition: "The ability to act on your own without being told.",
    example: "She showed initiative by fixing the issue before anyone noticed it.",
    synonym: "Drive",
    topic: "interview",
    difficulty: "intermediate",
  },
  {
    word: "Concise",
    partOfSpeech: "adjective",
    definition: "Using few words while clearly expressing an idea.",
    example: "Please give me a concise summary of the project.",
    synonym: "Brief",
    topic: "interview",
    difficulty: "intermediate",
  },
  {
    word: "Adapt",
    partOfSpeech: "verb",
    definition: "To change your approach to suit new conditions.",
    example: "I had to adapt quickly when the project requirements changed.",
    synonym: "Adjust",
    topic: "interview",
    difficulty: "intermediate",
  },
  {
    word: "Proficient",
    partOfSpeech: "adjective",
    definition: "Skilled and competent at a particular task.",
    example: "I am proficient in three programming languages.",
    synonym: "Skilled",
    topic: "interview",
    difficulty: "advanced",
  },
  {
    word: "Delegate",
    partOfSpeech: "verb",
    definition: "To give part of your work or authority to someone else.",
    example: "A good manager knows when to delegate tasks to the team.",
    synonym: "Assign",
    topic: "interview",
    difficulty: "advanced",
  },
  {
    word: "Feasible",
    partOfSpeech: "adjective",
    definition: "Possible to do or achieve with the resources available.",
    example: "The new timeline is not feasible without more staff.",
    synonym: "Achievable",
    topic: "interview",
    difficulty: "advanced",
  },
  {
    word: "Rapport",
    partOfSpeech: "noun",
    definition: "A friendly relationship built on mutual understanding.",
    example: "It's important to build rapport with new clients quickly.",
    synonym: "Connection",
    topic: "interview",
    difficulty: "advanced",
  },

  // ---------- Travel English ----------
  {
    word: "Itinerary",
    partOfSpeech: "noun",
    definition: "A planned list of places to visit on a trip.",
    example: "I sent you our full itinerary for the weekend trip.",
    synonym: "Travel plan",
    topic: "travel",
    difficulty: "beginner",
  },
  {
    word: "Luggage",
    partOfSpeech: "noun",
    definition: "The bags and suitcases you take when travelling.",
    example: "Please keep your luggage with you at all times.",
    synonym: "Baggage",
    topic: "travel",
    difficulty: "beginner",
  },
  {
    word: "Depart",
    partOfSpeech: "verb",
    definition: "To leave a place, especially at the start of a journey.",
    example: "Our flight will depart from gate twelve.",
    synonym: "Leave",
    topic: "travel",
    difficulty: "beginner",
  },
  {
    word: "Accommodation",
    partOfSpeech: "noun",
    definition: "A place to stay, such as a hotel or hostel.",
    example: "We booked our accommodation near the train station.",
    synonym: "Lodging",
    topic: "travel",
    difficulty: "beginner",
  },
  {
    word: "Layover",
    partOfSpeech: "noun",
    definition: "A short stop between two parts of a journey.",
    example: "We have a three-hour layover in Dubai.",
    synonym: "Stopover",
    topic: "travel",
    difficulty: "intermediate",
  },
  {
    word: "Currency",
    partOfSpeech: "noun",
    definition: "The system of money used in a particular country.",
    example: "You should exchange currency before you arrive at the airport.",
    synonym: "Money",
    topic: "travel",
    difficulty: "intermediate",
  },
  {
    word: "Refundable",
    partOfSpeech: "adjective",
    definition: "Able to have your money given back if you cancel.",
    example: "Always check if your ticket is refundable before booking.",
    synonym: "Returnable",
    topic: "travel",
    difficulty: "intermediate",
  },
  {
    word: "Detour",
    partOfSpeech: "noun",
    definition: "A longer route taken to avoid a problem on the usual path.",
    example: "We took a detour to avoid the traffic near the bridge.",
    synonym: "Diversion",
    topic: "travel",
    difficulty: "intermediate",
  },
  {
    word: "Immersive",
    partOfSpeech: "adjective",
    definition: "Fully involving your attention and senses in an experience.",
    example: "Staying with a local family gave us an immersive view of the culture.",
    synonym: "Engrossing",
    topic: "travel",
    difficulty: "advanced",
  },
  {
    word: "Itinerant",
    partOfSpeech: "adjective",
    definition: "Travelling from place to place rather than staying in one.",
    example: "She lived an itinerant life, working in a new city every year.",
    synonym: "Nomadic",
    topic: "travel",
    difficulty: "advanced",
  },
  {
    word: "Excursion",
    partOfSpeech: "noun",
    definition: "A short trip taken for pleasure, often as part of a larger journey.",
    example: "The hotel offers a day excursion to the nearby islands.",
    synonym: "Outing",
    topic: "travel",
    difficulty: "advanced",
  },
  {
    word: "Customs",
    partOfSpeech: "noun",
    definition: "The place at a border where officials check goods entering a country.",
    example: "It took an hour to get through customs at the airport.",
    synonym: "Border control",
    topic: "travel",
    difficulty: "advanced",
  },
];

// Deterministic, unbiased selection of a session for a topic/difficulty.
// Falls back to nearby difficulty levels if a topic doesn't have enough
// words at the exact difficulty, so a session is always fillable.
export function buildSession(topicId, difficultyId, size = 5) {
  const byTopic = VOCABULARY.filter((w) => w.topic === topicId);
  const exact = byTopic.filter((w) => w.difficulty === difficultyId);

  const order = ["beginner", "intermediate", "advanced"];
  const startIndex = order.indexOf(difficultyId);
  const rest = byTopic
    .filter((w) => w.difficulty !== difficultyId)
    .sort((a, b) => {
      const da = Math.abs(order.indexOf(a.difficulty) - startIndex);
      const db = Math.abs(order.indexOf(b.difficulty) - startIndex);
      return da - db;
    });

  const pool = [...shuffle(exact), ...shuffle(rest)];
  return pool.slice(0, Math.min(size, pool.length));
}

// Simple seeded-free shuffle (Fisher–Yates). Fine for a client-side
// vocabulary picker; no cryptographic requirement here.
function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
