// F1 Performance Portal Data Structures

export interface Driver {
  id: string;
  name: string;
  nationality: string;
  age: number;
  number: number;
  team: string;
  teamId: string;
  championships: number;
  wins: number;
  podiums: number;
  poles: number;
  points: number;
  careerHighlights: string[];
  biography: string;
  imageUrl: string;
  active: boolean;
}

export interface Team {
  id: string;
  name: string;
  fullName: string;
  base: string;
  teamChief: string;
  technicalChief: string;
  chassis: string;
  powerUnit: string;
  firstTeamEntry: number;
  worldChampionships: number;
  highestRaceFinish: {
    position: number;
    year: number;
  };
  polePositions: number;
  fastestLaps: number;
  logoUrl: string;
  color: string;
  drivers: string[];
  cars: CarInfo[];
}

export interface CarInfo {
  year: number;
  model: string;
  imageUrl: string;
}

export interface Race {
  id: string;
  name: string;
  circuit: string;
  country: string;
  date: string;
  season: number;
  round: number;
  results: RaceResult[];
  fastestLap?: {
    driver: string;
    time: string;
    speed: number;
  };
}

export interface RaceResult {
  position: number;
  driver: string;
  team: string;
  time: string;
  points: number;
  status: string;
}

export const drivers: Driver[] = [
  {
    id: "verstappen",
    name: "Max Verstappen",
    nationality: "Dutch",
    age: 26,
    number: 1,
    team: "Red Bull Racing",
    teamId: "red-bull",
    championships: 3,
    wins: 52,
    podiums: 97,
    poles: 29,
    points: 2586,
    careerHighlights: [
      "3x World Drivers' Champion (2021, 2022, 2023)",
      "Youngest driver to win a Grand Prix (18 years, 228 days)",
      "Most wins in a single season (19 wins in 2023)"
    ],
    biography: "Max Verstappen is a Dutch racing driver who competes in Formula One for Red Bull Racing. He is the son of former F1 driver Jos Verstappen and has established himself as one of the sport's most dominant drivers.",
    imageUrl: "/placeholder.svg",
    active: true
  },
  {
    id: "hamilton",
    name: "Lewis Hamilton",
    nationality: "British",
    age: 39,
    number: 44,
    team: "Mercedes",
    teamId: "mercedes",
    championships: 7,
    wins: 103,
    podiums: 197,
    poles: 104,
    points: 4405,
    careerHighlights: [
      "7x World Drivers' Champion",
      "Most race wins in F1 history (103)",
      "Most pole positions in F1 history (104)",
      "First Black driver to win F1 World Championship"
    ],
    biography: "Sir Lewis Carl Davidson Hamilton is a British racing driver who competes in Formula One for Mercedes. Hamilton has won a joint-record seven World Drivers' Championship titles.",
    imageUrl: "/placeholder.svg",
    active: true
  },
  {
    id: "leclerc",
    name: "Charles Leclerc",
    nationality: "Monégasque",
    age: 26,
    number: 16,
    team: "Ferrari",
    teamId: "ferrari",
    championships: 0,
    wins: 5,
    podiums: 29,
    poles: 24,
    points: 1302,
    careerHighlights: [
      "First Monégasque driver to win in Monaco (2024)",
      "Youngest Ferrari race winner since 1961",
      "24 pole positions"
    ],
    biography: "Charles Leclerc is a Monégasque racing driver who competes in Formula One for Scuderia Ferrari. He is considered one of the most promising talents in modern Formula One.",
    imageUrl: "/placeholder.svg",
    active: true
  },
  {
    id: "norris",
    name: "Lando Norris",
    nationality: "British",
    age: 24,
    number: 4,
    team: "McLaren",
    teamId: "mclaren",
    championships: 0,
    wins: 3,
    podiums: 13,
    poles: 5,
    points: 797,
    careerHighlights: [
      "First McLaren victory since 2012 (Miami GP 2024)",
      "Youngest British driver to score points on debut",
      "Multiple podium finisher"
    ],
    biography: "Lando Norris is a British racing driver who competes in Formula One for McLaren. Known for his speed and charismatic personality, he represents the new generation of F1 talent.",
    imageUrl: "/placeholder.svg",
    active: true
  },
  {
    id: "russell",
    name: "George Russell",
    nationality: "British",
    age: 26,
    number: 63,
    team: "Mercedes",
    teamId: "mercedes",
    championships: 0,
    wins: 1,
    podiums: 11,
    poles: 3,
    points: 376,
    careerHighlights: [
      "Sao Paulo GP winner (2022)",
      "First pole position at Hungarian GP (2022)",
      "Mercedes race winner"
    ],
    biography: "George Russell is a British racing driver who competes in Formula One for Mercedes. He joined Mercedes as Lewis Hamilton's teammate in 2022.",
    imageUrl: "/placeholder.svg",
    active: true
  },
  {
    id: "sainz",
    name: "Carlos Sainz Jr.",
    nationality: "Spanish",
    age: 30,
    number: 55,
    team: "Ferrari",
    teamId: "ferrari",
    championships: 0,
    wins: 3,
    podiums: 23,
    poles: 5,
    points: 1154,
    careerHighlights: [
      "Australia GP winner (2024)",
      "Singapore GP winner (2022)",
      "Silverstone GP winner (2022)"
    ],
    biography: "Carlos Sainz Jr. is a Spanish racing driver who competes in Formula One for Scuderia Ferrari. He is the son of two-time World Rally Champion Carlos Sainz Sr.",
    imageUrl: "/placeholder.svg",
    active: true
  }
];

export const teams: Team[] = [
  {
    id: "red-bull",
    name: "Red Bull Racing",
    fullName: "Oracle Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
    teamChief: "Christian Horner",
    technicalChief: "Pierre Waché",
    chassis: "RB20",
    powerUnit: "Honda RBPT",
    firstTeamEntry: 2005,
    worldChampionships: 6,
    highestRaceFinish: { position: 1, year: 2010 },
    polePositions: 91,
    fastestLaps: 33,
    logoUrl: "/placeholder.svg",
    color: "#1E40AF",
    drivers: ["verstappen", "perez"],
    cars: [
      { year: 2024, model: "RB20", imageUrl: "/placeholder.svg" },
      { year: 2023, model: "RB19", imageUrl: "/placeholder.svg" }
    ]
  },
  {
    id: "mercedes",
    name: "Mercedes",
    fullName: "Mercedes-AMG PETRONAS F1 Team",
    base: "Brackley, United Kingdom",
    teamChief: "Toto Wolff",
    technicalChief: "James Allison",
    chassis: "W15",
    powerUnit: "Mercedes",
    firstTeamEntry: 2010,
    worldChampionships: 8,
    highestRaceFinish: { position: 1, year: 2014 },
    polePositions: 130,
    fastestLaps: 87,
    logoUrl: "/placeholder.svg",
    color: "#00D2BE",
    drivers: ["hamilton", "russell"],
    cars: [
      { year: 2024, model: "W15", imageUrl: "/placeholder.svg" },
      { year: 2023, model: "W14", imageUrl: "/placeholder.svg" }
    ]
  },
  {
    id: "ferrari",
    name: "Ferrari",
    fullName: "Scuderia Ferrari",
    base: "Maranello, Italy",
    teamChief: "Frédéric Vasseur",
    technicalChief: "Enrico Cardile",
    chassis: "SF-24",
    powerUnit: "Ferrari",
    firstTeamEntry: 1950,
    worldChampionships: 16,
    highestRaceFinish: { position: 1, year: 1950 },
    polePositions: 249,
    fastestLaps: 262,
    logoUrl: "/placeholder.svg",
    color: "#DC143C",
    drivers: ["leclerc", "sainz"],
    cars: [
      { year: 2024, model: "SF-24", imageUrl: "/placeholder.svg" },
      { year: 2023, model: "SF-23", imageUrl: "/placeholder.svg" }
    ]
  },
  {
    id: "mclaren",
    name: "McLaren",
    fullName: "McLaren F1 Team",
    base: "Woking, United Kingdom",
    teamChief: "Andrea Stella",
    technicalChief: "Peter Prodromou",
    chassis: "MCL38",
    powerUnit: "Mercedes",
    firstTeamEntry: 1966,
    worldChampionships: 8,
    highestRaceFinish: { position: 1, year: 1968 },
    polePositions: 156,
    fastestLaps: 162,
    logoUrl: "/placeholder.svg",
    color: "#FF8700",
    drivers: ["norris", "piastri"],
    cars: [
      { year: 2024, model: "MCL38", imageUrl: "/placeholder.svg" },
      { year: 2023, model: "MCL60", imageUrl: "/placeholder.svg" }
    ]
  }
];

export const races: Race[] = [
  {
    id: "bahrain-2024",
    name: "Bahrain Grand Prix",
    circuit: "Bahrain International Circuit",
    country: "Bahrain",
    date: "2024-03-02",
    season: 2024,
    round: 1,
    results: [
      { position: 1, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:31:44.742", points: 25, status: "Finished" },
      { position: 2, driver: "Sergio Pérez", team: "Red Bull Racing", time: "+22.457", points: 18, status: "Finished" },
      { position: 3, driver: "Carlos Sainz", team: "Ferrari", time: "+47.928", points: 15, status: "Finished" }
    ],
    fastestLap: {
      driver: "Max Verstappen",
      time: "1:31.895",
      speed: 214.764
    }
  },
  {
    id: "jeddah-2024",
    name: "Saudi Arabian Grand Prix",
    circuit: "Jeddah Corniche Circuit",
    country: "Saudi Arabia",
    date: "2024-03-09",
    season: 2024,
    round: 2,
    results: [
      { position: 1, driver: "Max Verstappen", team: "Red Bull Racing", time: "1:20:43.273", points: 25, status: "Finished" },
      { position: 2, driver: "Sergio Pérez", team: "Red Bull Racing", time: "+13.643", points: 18, status: "Finished" },
      { position: 3, driver: "Charles Leclerc", team: "Ferrari", time: "+18.639", points: 15, status: "Finished" }
    ],
    fastestLap: {
      driver: "Lewis Hamilton",
      time: "1:29.734",
      speed: 250.318
    }
  }
];

export const getDriverById = (id: string): Driver | undefined => {
  return drivers.find(driver => driver.id === id);
};

export const getTeamById = (id: string): Team | undefined => {
  return teams.find(team => team.id === id);
};

export const getRaceById = (id: string): Race | undefined => {
  return races.find(race => race.id === id);
};

export const getDriversByTeam = (teamId: string): Driver[] => {
  return drivers.filter(driver => driver.teamId === teamId);
};

export const getRacesBySeason = (season: number): Race[] => {
  return races.filter(race => race.season === season);
};