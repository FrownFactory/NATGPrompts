const adjectives = [
  "exhausted",
  "refreshed",
  "exotic",
  "sneaky",
  "mourning",
  "tiny",
  "embarrassed",
  "shy",
  "giant",
  "triumphant",
  "lovesick",
  "boasting",
  "fashionable",
  "villainous",
  "primitive",
  "emotional",
  "surprised",
  "furious",
  "romantic",
  "sleepy",
  "nervous",
  "excited",
  "idle",
  "bored",
  "evil",
  "happy",
  "inquisitive",
  "puzzled",
  "acrobatic",
  "sad",
  "scared",
  "courageous",
  "imaginative",
  "static",
  "mobile",
  "non-",
  "lonely",
  "inspired",
  "adventurous",
  "lazy",
  "distracted",
  "victorious",
  "impulsive",
  " "
];

const verbs = [
"standing",
"jumping",
"eating",
"dreaming",
"making music",
"singing",
"armed with a bladed weapon",
"playing a board game",
"representing a famous myth or classic story",
"standing in the wind",
"dressed as or hanging out with a famous person/pony",
"in space",
"in love",
"laughing",
"swimming",
"building something",
"crying",
"dancing",
"drawing",
"raising (or pretending to raise) the sun",
"locked in a dungeon in the place they were banished to",
"cooking",
"reading",
"idling ",
"on the go ",
"with a prop",
"on a hilltop",
"as a filly or colt",
"smiling or beaming",
"having a ball",
"facing conflict",
"locked in \"grizzly\" combat ",
"trying something new ",
"dressed as or from your favorite video game, movie, or book",
"making a decision",
"waffling ",
"fixing something",
"on the mend ",
"getting a makeover",
"in command",
"in the lead",
"traveling",
"on a date",
"under pressure",
"feeling the heat",
"cooking",
"with a plate",
"helping someone",
"reaching out",
"with a friend",
"hanging out",
"staying up late",
"in the dark",
"singing",
"wailing",
"searching for something",
"finding a treasure",
"attending a masquerade",
"moving on",
"charging ",
"celebrating",
"graduating",
"staring into space",
"on a journey",
"in costume",
"using a tool",
"on the rise",
"laying down",
"lying",
"winning",
"at a museum",
"putting on a play",
"performing",
"in disguise",
"lost at sea",
"drifting",
"on the clock",
"dreaming",
"working out",
"training",
"in a competition",
"dueling",
"litigating",
"at the beach",
"surfing",
"in or from the future",
"ruling",
"plotting",
"struggling",
"stretching",
"crossing the finish line",
"posing",
"groovin'",
"in the snow",
"bundled up",
"stepping up",
"looking down.",
"falling.",
"taking a break",
"settling down.",
"caroling",
"spreading cheer",
"skiing",
"decorating",
"wrapping.",
"stretching",
"on thin ice",
"by the hearth",
"enjoying cocoa",
"traveling",
"celebrating",
"keeping still",
"holding tight",
"moving",
"shaking",
"gearing up",
"packing",
"shrinking back",
"growing up",
"catching rays.",
"cooling off",
"chilling.",
"on a quest",
"chasing dreams.",
"working out",
"back at school",
"learning.",
"cheering someone on",
"preparing",
"mending fences",
"fencing",
"in apparel",
"pony in peril",
"in space",
"spacing out",
"in a vehicle",
"out for a spin",
"as a filly or colt",
"playing a game",
"sleeping",
"'s dream",
"out of control",
"in disguise",
"filled with confidence",
"doing science",
"living life on the edge",
"reaping an award",
"in need of direction.",
"warming up",
"stretching its limits.",
"facing the unknown",
"in the Twilight Zone",
"in mortal peril",
"modeling",
"mingling",
"blending in",
"in love",
"crushing on somepony",
"fighting",
"grappling",
"on a grand adventure",
"on a personal journey",
"running late",
"star gazing",
"at school",
"frozen in place",
"ony on the run",
"in danger",
"with good taste",
"facing their darkest fear",
"on an impossible mission",
"experiencing a miracle",
"snatching victory from the jaws of defeat",
"deceiving another",
"with nerves of steel",
"seeking Guidance",
"in Need of Schooling",
"following their hopes and dreams",
"darkest secret",
"in a pickle",
"with rotten luck",
"who lost a bet",
"on the wrong side of the law",
"experiencing puppy love",
"daydreaming",
"having a night on the town",
"under the weather",
"in a dire situation",
"as the unlikely hero",
"on holiday",
"fanboying/fangirling",
"'s greatest fear",
"meeting their worst nightmare",
"enjoying nature",
"exploring the great outdoors",
"portrait",
"rubbing their nose",
"eating",
"drinking",
"leaping",
"bouncing",
"yawning",
"weeping",
"gardening",
"crashing",
"being stuck",
"from above",
"from below",
"in pushed perspective",
"swimming",
"in the rain",
"stuck in time",
"springing to life",
"passed out",
"chasing their dreams",
"enjoying your favourite meal",
"having a family moment",
"about to lose it",
"crushing on another pony",
"with a secret admirer",
"enjoying your favourite season",
"whooping it up in town",
"as another species",
"experiencing something unexpected",
"staring down their worst fear",
"hanging on by a thread",
"defying impossible odds",
"finding their innner courage",
"doing something you like to do (outside of drawing)",
"lost in thought",
"with a dark side",
"that's bad to the bone",
"as a fairytale character",
"telling a ghostly story",
"as a character from your favorite book / game / movie / etc",
"sharing their favourite thing with another pony",
"from the future",
"time-travelling",
"with a sixth sense",
"encountering the supernatural",
"in grave daner",
"about to meet its maker",
"cheering up a friend",
"turning a frown upside down",
"breaking out",
"pushing boundaries",
"stretching the limit",
"racing to the finish",
"running short on time",
"experiencing your perfect idea for an episode",
"with a brilliant idea",
"doing a good deed",
"being a stand up citizen",
"going to a foreign land",
"caught in a tourist trap",
"on an adventure",
"on the wild side",
"giving the gift of friendship",
"learning from a mistake",
"jumbling things up",
"scrambling",
"who can't contain themselves",
"bursting with emotion",
"bursting with life",
"with a secret",
"cracking under pressure",
"making a friend",
"in over their head",
"biting off more than they can chew",
"ready to take the plunge",
"making a terrible mistake",
"getting a taste of their own medicine",
"hitting the road",
"on a journey",
"alone in the dark",
"who is a real night owl",
"visiting a strange new land",
"going where nopony has gone before",
"enjoying the summer fun",
"baking in the sun",
"up to no good",
"out of energy",
"taking a breather",
"taking the world by storm",
"being sly as a fox",
"being inspired",
"living life to the fullest",
"experiencing your most cherished memory",
"on an adventure",
"on a noble quest",
"procrastinating",
"with no time to spare",
"zoning out",
"lost in their imagination",
"pulling a prank",
"drawing the wool over someone's eyes",
"winning a competition",
"going for gold",
"celebrating your favourite holiday",
"being the life of the party",
"making a split second decision",
"trying something new",
"reaching for new heights",
"experiencing failure",
"tasting bitter defeat",
"on the last leg of its journey",
"coming home",
"reflecting on the past",
"experiencing the bliss of triumph or agony of defeat",
"falling for someone",
"starting over",
"lining their pockets",
"finding a silver lining",
"experiencing deja vu",
"acting fishy",
"gathering their courage",
"crossing over",
"being pushed to their limit",
"forging their own destiny",
"with their head in the clouds",
"kept in the dark",
"staying up late",
"facing a mistake from their past",
"putting the pieces back together",
"partying like there is no tomorrow",
"making a great discovery",
"pony opening Pandora’s Box",
"celebrating your favorite holiday",
"taking a breather",
"who is dead tired",
"racing to the finish",
"at the end",
"finishing a long journey",
"scrambling",
"making their dreams come true",
"finding harmony in chaos"
];

function getRandomAdjective() {
  return adjectives[Math.floor((Math.random() * adjectives.length))];
};

function getRandomVerb() {
  // half of these aren't even verbs...
  return verbs[Math.floor((Math.random() * verbs.length))];
};

function getGeneratedPrompt() {
  let adj = getRandomAdjective();
  let verb = getRandomVerb();

  return adj + " pony " + verb;
};

function getPossiblePrompts() {
  return adjectives.length * verbs.length;
};
