export const EVENTS_DATA = [
  {
    id: 'hackathon-01',
    title: 'CodeForge 36H Hackathon',
    category: 'Hackathon',
    teamSize: '2-4 Members',
    minTeam: 2,
    maxTeam: 4,
    fee: '₹500 / team',
    prizePool: '₹1,50,000',
    prizeValue: 150000,
    date: 'Oct 14-15, 2026',
    time: '09:00 AM Onwards',
    venue: 'Main Computing Lab 3',
    shortDesc: '36-hour intense hackathon focused on AI, Web3, and Open Innovation.',
    rules: [
      'Original code must be written during the hackathon hours.',
      'Use of open-source frameworks is allowed with prior mention.',
      'Plagiarism leads to immediate disqualification.'
    ],
    eligibility: 'Open to all undergraduate & postgraduate engineering students.',
    tags: ['AI/ML', 'Web3', 'Cloud', 'High Prize']
  },
  {
    id: 'ctf-01',
    title: 'ByteGuard CTF (Capture The Flag)',
    category: 'CTF',
    teamSize: '1-2 Members',
    minTeam: 1,
    maxTeam: 2,
    fee: '₹200 / team',
    prizePool: '₹50,000',
    prizeValue: 50000,
    date: 'Oct 14, 2026',
    time: '11:00 AM - 05:00 PM',
    venue: 'Cyber Security Lab',
    shortDesc: 'Jeopardy-style cybersecurity challenge covering cryptography, reverse engineering, and web exploits.',
    rules: [
      'Attacking the hosting infrastructure is strictly forbidden.',
      'Brute force attacks on infrastructure will result in IP bans.',
      'Flag sharing across teams results in instant red card.'
    ],
    eligibility: 'Basic knowledge of Linux networking and web security required.',
    tags: ['CyberSec', 'Crypto', 'Reverse Eng']
  },
  {
    id: 'esports-01',
    title: 'Valorant Showdown',
    category: 'E-Sports',
    teamSize: '5 Members',
    minTeam: 5,
    maxTeam: 5,
    fee: '₹500 / team',
    prizePool: '₹40,000',
    prizeValue: 40000,
    date: 'Oct 15, 2026',
    time: '10:00 AM Onwards',
    venue: 'Auditorium Arena',
    shortDesc: '5v5 tactical shooter tournament on custom high-refresh rate setups.',
    rules: [
      'Standard Riot Games competitive ruleset applies.',
      'Players must bring their own peripherals (Mice/Keyboards/Headsets).'
    ],
    eligibility: 'Must hold an active Valorant account level 20+.',
    tags: ['Gaming', 'Tactical', 'LAN']
  },
  {
    id: 'workshop-01',
    title: 'Quantum Computing 101 with IBM Q',
    category: 'Workshops',
    teamSize: 'Solo (1)',
    minTeam: 1,
    maxTeam: 1,
    fee: '₹150 / person',
    prizePool: 'Certificates & Swag',
    prizeValue: 0,
    date: 'Oct 14, 2026',
    time: '02:00 PM - 05:00 PM',
    venue: 'Seminar Hall B',
    shortDesc: 'Hands-on workshop introducing Qiskit, quantum circuits, and real hardware deployment.',
    rules: [
      'Laptops mandatory with Python 3.9+ pre-installed.',
      'Certificate awarded upon 100% completion of hands-on session.'
    ],
    eligibility: 'Prerequisites: Linear algebra and basic Python knowledge.',
    tags: ['Quantum', 'IBM Q', 'Hands-On']
  }
];
