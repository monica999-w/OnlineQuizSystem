
const questionPool = [
    {
        id: 1,
        text: "What is the capital of France?",
        choices: ["Berlin", "London", "Paris", "Madrid"],
        correctAnswer: "Paris",
    },
    {
        id: 2,
        text: "Who is the author of 'Romeo and Juliet'?",
        choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare",
    },
    {
        id: 3,
        text: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: "Jupiter",
    },
    {
        id: 4,
        text: "Which element has the chemical symbol 'O'?",
        choices: ["Oxygen", "Gold", "Iron", "Copper"],
        correctAnswer: "Oxygen",
    },
    {
        id: 5,
        text: "In which year did Christopher Columbus reach the Americas?",
        choices: ["1492", "1510", "1601", "1625"],
        correctAnswer: "1492",
    },
    {
        id: 6,
        text: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        id: 7,
        text: "What is the capital of Japan?",
        choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo",
    },
    {
        id: 8,
        text: "Which programming language is known as the 'language of the web ?",
        choices: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript",
    },
    {
        id: 9,
        text: "What is the currency of Brazil?",
        choices: ["Peso", "Euro", "Dollar", "Real"],
        correctAnswer: "Real",
    },
    {
        id: 10,
        text: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["J.K. Rowling", "Harper Lee", "George Orwell", "F. Scott Fitzgerald"],
        correctAnswer: "Harper Lee",
    },
    {
        id: 11,
        text: "In which Italian city can you find the Colosseum?",
        choices: ["Venice", "Rome", "Naples", "Milan"],
        correctAnswer: "Rome",
    },
    {
        id: 12,
        text: "In the TV show New Girl, which actress plays Jessica Day?",
        choices: ["Zooey Deschanel", "Kaley Cuoco", "Jennifer Aniston", "Alyson Hannigan"],
        correctAnswer: "Zooey Deschanel",
    },
    {
        id: 13,
        text: "What is the largest canyon in the world?",
        choices: ["Verdon Gorge, France", "King’s Canyon, Australia", "Grand Canyon, USA", "Fjaðrárgljúfur Canyon, Iceland"],
        correctAnswer: "Grand Canyon, USA",
    },
    {
        id: 14,
        text: "How long is the border between the United States and Canada?",
        choices: ["3,525 miles", "4,525 miles", "5,525 miles", "6,525 miles"],
        correctAnswer: "5,525 miles",
    },
    {
        id: 15,
        text: "What is the largest active volcano in the world?",
        choices: ["Mount Etna", "Mount Vesuvius", "Mouna Loa", "Mount Batur"],
        correctAnswer: "Mouna Loa",
    },
    {
        id: 16,
        text: "When did Lenin die?",
        choices: ["21 January 1924", "21 January 1934", "21 January 1944", "21 January 1954"],
        correctAnswer: "21 January 1924",
    },
    {
        id: 17,
        text: "In which US state did the Scopes Monkey Trial happen?",
        choices: ["Maryland", "South Dakota", "Indiana", "Tennessee"],
        correctAnswer: "Tennessee",
    },
    {
        id: 18,
        text: "When was the book 'To Kill a Mockingbird' by Harper Lee published?",
        choices: ["1950", "1960", "1970", "1980"],
        correctAnswer: "1960",
    },
    {
        id: 19,
        text: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
        choices: ["Le Louvre", "Uffizi Museum", "British Museum", "Metropolitan Museum of Art"],
        correctAnswer: "Le Louvre",
    },
    {
        id: 20,
        text: "In which city can you find the Prado Museum?",
        choices: ["Buenos Aires", "Barcelona", "Santiago", "Madrid"],
        correctAnswer: "Madrid",
    },
    {
        id: 21,
        text: "When did Salt Lake City host the Winter Olympics?",
        choices: ["1992", "1998", "2002", "2008"],
        correctAnswer: "2002",
    },
    {
        id: 22,
        text: "In the Big Bang Theory, what is the name of Sheldon and Leonard’s neighbour?",
        choices: ["Penny", "Patty", "Lily", "Jessie"],
        correctAnswer: "Penny",
    },
    {
        id: 23,
        text: "When did Hitler invade Poland?",
        choices: ["1st September 1939", "11th November 1939", "8th May 1940", "1st December 1940"],
        correctAnswer: "1st September 1939",
    },
    {
        id: 24,
        text: "What is the largest continent in size?",
        choices: ["Asia", "Africa", "Europe", "North America"],
        correctAnswer: "Asia",
    },
    {
        id: 25,
        text: "Which French king was nicknamed the 'Sun King'?",
        choices: ["Louis XVI", "Charlemagne", "Francis I", "Louis XIV"],
        correctAnswer: "Louis XIV",
    },
    {
        id: 26,
        text: "Who was George W. Bush’ vice president?",
        choices: ["Kamala Harris", "Joe Biden", "Dick Cheney", "Al Gore"],
        correctAnswer: "Dick Cheney",
    },
    {
        id: 27,
        text: "Which famous inventor invented the telephone?",
        choices: ["Thomas Edison", "Benjamin Franklin", "Alexander Graham Bell", "Nikola Tesla"],
        correctAnswer: "Alexander Graham Bell",
    },
    {
        id: 28,
        text: "If you are born on the 1st of January, which star sign are you?",
        choices: ["Scorpio", "Capricorn", "Libra", "Aries"],
        correctAnswer: "Capricorn",
    },
    {
        id: 29,
        text: "How many wives had Henry VIII?",
        choices: ["1", "3", "4", "6"],
        correctAnswer: "6",
    },
    {
        id: 30,
        text: "In which city is the Juventus Football Club based?",
        choices: ["Turin", "Barcelona", "Manchester", "Marseille"],
        correctAnswer: "Turin",
    },
    {
        id: 31,
        text: "Which artist and author made the Smurfs comic strips?",
        choices: ["Hergé", "Peyo", "Morris", "Edgar P. Jacobs"],
        correctAnswer: "Peyo",
    },
    {
        id: 32,
        text: "What does the Richter scale measure?",
        choices: ["Wind Speed", "Temperature", "Tornado Strength", "Earthquake intensity"],
        correctAnswer: "Earthquake intensity",
    },
    {
        id: 33,
        text: "Which country is the footballer Cristiano Ronaldo from?",
        choices: ["Spain", "Brazil", "Uruguay", "Portugal"],
        correctAnswer: "Portugal",
    },
    {
        id: 34,
        text: "What is the longest river in the world?",
        choices: ["Amazon River", "Nile", "Yellow River", "Congo River"],
        correctAnswer: "Amazon River",
    },
    {
        id: 35,
        text: "How many sides has a Hexagon?",
        choices: ["5", "6", "7", "8"],
        correctAnswer: "6",
    },
    {
        id: 36,
        text: "Which country does not share a border with Romania?",
        choices: ["Ukraine", "Bulgaria", "Hungary", "Poland"],
        correctAnswer: "Poland",
    },
    {
        id: 37,
        text: "What is the name of the main character in Pride and Prejudice?",
        choices: ["Bernadette Smith", "Poppy Williams", "Elizabeth Bennet", "Maggie Johnson"],
        correctAnswer: "Elizabeth Bennet",
    },
    {
        id: 38,
        text: "In which country was the airline Ryanair founded?",
        choices: ["Germany", "Ireland", "Scotland", "Spain"],
        correctAnswer: "Ireland",
    },
    {
        id: 39,
        text: "When were Guy Fawkes and The Gunpowder Plot discovered?",
        choices: ["1505", "1605", "1705", "1805"],
        correctAnswer: "1605",
    },
    {
        id: 40,
        text: "Who wrote Catch-22?",
        choices: ["Mark Twain", "Ernest Hemingway", "Charles Dickens", "Joseph Heller"],
        correctAnswer: "Joseph Heller",
    },
    {
        id: 41,
        text: "Who was assassinated on the 22nd of November 1963?",
        choices: ["Martin Luther King", "JFK", "MK Gandhi", "Malcolm X"],
        correctAnswer: "JFK",
    },
    {
        id: 42,
        text: "When was the first Harry Potter book published?",
        choices: ["1997", "1999", "2001", "2003"],
        correctAnswer: "1997",
    },
    {
        id: 43,
        text: "Which author is known for creating Hercule Poirot?",
        choices: ["James Patterson", "Stephen King", "Arthur Conan Doyle", "Agatha Christie"],
        correctAnswer: "Agatha Christie",
    },
    {
        id: 44,
        text: "If you are eating chicken jalfrezi, what type of food are you eating?",
        choices: ["French food", "Italian food", "Indian Food", "Mexican Food"],
        correctAnswer: "Indian Food",
    },
    {
        id: 45,
        text: "Which battle did William the Conqueror win in 1066?",
        choices: ["Battle of Hastings", "Battle of Waterloo", "Battle of Borodino", "Battle of the Somme"],
        correctAnswer: "Battle of Hastings",
    },
    {
        id: 46,
        text: "Who is the CEO of Amazon?",
        choices: ["Elon Musk", "Tim Cook", "Mark Zuckerberg", "Jeff Bezos"],
        correctAnswer: "Jeff Bezos",
    },
    {
        id: 47,
        text: "Which country was not part of the Axis Powers during WWII?",
        choices: ["Germany", "Italy", "Soviet Union", "Japan"],
        correctAnswer: "Soviet Union",
    },
    {
        id: 48,
        text: "Which band released the song “Wonderwall” in the 90s?",
        choices: ["Oasis", "Joy Division", "The Verge", "Nirvana"],
        correctAnswer: "Oasis",
    },
    {
        id: 49,
        text: "“When I find myself in times of trouble, Mother Mary comes to me” is the opening line of which song?",
        choices: ["Smells like teen spirit – Nirvana", "Get lucky – Daft Punk", "Sweet Child O’ Mine – Gun N’ Roses", "Let it be – The Beatles"],
        correctAnswer: "Let it be – The Beatles",
    },
    {
        id: 50,
        text: "What was Euclid?",
        choices: ["A philosopher", "A poet", "A painter", "A mathematician"],
        correctAnswer: "A mathematician",
    },
];

export default questionPool;
