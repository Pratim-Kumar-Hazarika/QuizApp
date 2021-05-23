import { QuizOne } from "./quiz.type";
const quizOne: QuizOne = [
  {
    quizName: "Indian Culture",
    id: 1,
    questions: [
      {
        question: "The ratio of width of our National flag is ",
        points: 5,
        options: [
          {
            text: 3.5,
            isRight: false
          },
          {
            text: 2.3,
            isRight: true
          },
          {
            text: 2.4,
            isRight: false
          },
          {
            text: 3.4,
            isRight: false
          }
        ]
      },
      {
        question: `	
            Rabindranath Tagore's 'Jana Gana Mana' has been adopted as India's National Anthem. How many stanzas of the said song were adopted? `,
        points: 5,
        options: [
          {
            text: "Only the first stanza",
            isRight: true
          },
          {
            text: "The whole song",
            isRight: false
          },
          {
            text: "Third and Fourth stanza",
            isRight: false
          },
          {
            text: "First and Second stanza",
            isRight: false
          }
        ]
      },
      {
        question: `	
            'Natya - Shastra' the main source of India's classical dances was written by`,
        points: 5,
        options: [
          {
            text: "Nara Muni",
            isRight: false
          },
          {
            text: "Bharat Muni",
            isRight: true
          },
          {
            text: "Abhinav Gupt",
            isRight: false
          },
          {
            text: "Tandu Muni",
            isRight: false
          }
        ]
      },
      {
        question: `	
            'Dandia' is a popular dance of`,
        points: 5,
        options: [
          {
            text: "Punjab",
            isRight: false
          },
          {
            text: "Gujarat",
            isRight: true
          },
          {
            text: "Tamil Nadu",
            isRight: false
          },
          {
            text: "Maharashtra",
            isRight: false
          }
        ]
      },
      {
        question: `	
            The words 'Satyameva Jayate' inscribed below the base plate of the emblem of India are taken from`,
        points: 5,
        options: [
          {
            text: "	Rigveda",
            isRight: false
          },
          {
            text: "Satpath Brahmana",
            isRight: true
          },
          {
            text: "Mundak Upanishad",
            isRight: false
          },
          {
            text: "Ramayana",
            isRight: false
          }
        ]
      },
      {
        question:
          "Mohiniattam dance from developed originally in which state? ",
        points: 5,
        options: [
          {
            text: "Tamil Nadu",
            isRight: false
          },
          {
            text: "	Orissa",
            isRight: false
          },
          {
            text: "Kerala",
            isRight: true
          },
          {
            text: "Karnataka",
            isRight: false
          }
        ]
      },
      {
        question:
          "Which of the following folk dance forms is associated with Gujarat? ",
        points: 5,
        options: [
          {
            text: "Garba",
            isRight: true
          },
          {
            text: "	Nautanki",
            isRight: false
          },
          {
            text: "Kathakali",
            isRight: false
          },
          {
            text: "Bhangra",
            isRight: false
          }
        ]
      },
      {
        question:
          "Which of the following Akademis is responsible for fostering the development of dance, drama and music in India? ",
        points: 5,
        options: [
          {
            text: "National School of Drama",
            isRight: false
          },
          {
            text: "	Sahitya Akademi",
            isRight: false
          },
          {
            text: "Lalit Kala Akademi",
            isRight: false
          },
          {
            text: "Sangeet Akademi",
            isRight: true
          }
        ]
      },
      {
        question:
          "The Rath Yatra at Puri is celebrated in honour of which Hindu deity ",
        points: 5,
        options: [
          {
            text: "Shiva",
            isRight: false
          },
          {
            text: "Vishnu",
            isRight: false
          },
          {
            text: "Jaganath",
            isRight: true
          },
          {
            text: "Ram",
            isRight: false
          }
        ]
      },
      {
        question: "The book of Parsis is",
        points: 5,
        options: [
          {
            text: "Torah",
            isRight: false
          },
          {
            text: "Zend Avesta",
            isRight: true
          },
          {
            text: "Gita",
            isRight: false
          },
          {
            text: "Bible",
            isRight: false
          }
        ]
      }
    ]
  },

  {
    quizName: "Chemistry",
    id: 2,
    questions: [
      {
        question: "The nucleus of an atom consists of ",
        points: 5,
        options: [
          {
            text: "electrons and neutrons",
            isRight: false
          },
          {
            text: "electrons and protons",
            isRight: false
          },
          {
            text: "protons and neutrons",
            isRight: true
          },
          {
            text: "	All of the above",
            isRight: false
          }
        ]
      },
      {
        question: `The number of moles of solute present in 1 kg of a solvent is called its `,
        points: 5,
        options: [
          {
            text: "molality",
            isRight: true
          },
          {
            text: "molarity",
            isRight: false
          },
          {
            text: "normality",
            isRight: false
          },
          {
            text: "formality",
            isRight: false
          }
        ]
      },
      {
        question: `	
            The most electronegative element among the following is`,
        points: 5,
        options: [
          {
            text: "sodium",
            isRight: false
          },
          {
            text: "fluorine",
            isRight: true
          },
          {
            text: "oxygen",
            isRight: false
          },
          {
            text: "	bromine",
            isRight: false
          }
        ]
      },
      {
        question: `	
            The metal used to recover copper from a solution of copper sulphate is`,
        points: 5,
        options: [
          {
            text: "Na",
            isRight: false
          },
          {
            text: "Fe",
            isRight: true
          },
          {
            text: "Hg",
            isRight: false
          },
          {
            text: "Ag",
            isRight: false
          }
        ]
      },
      {
        question: `The number of d-electrons in Fe2+ (Z = 26) is not equal to that of`,
        points: 5,
        options: [
          {
            text: "	p-electrons in Ne(Z = 10)",
            isRight: false
          },
          {
            text: "	s-electrons in Mg(Z = 12)",
            isRight: false
          },
          {
            text: "d-electrons in Fe(Z = 26)",
            isRight: false
          },
          {
            text: "p-electrons in CI(Z = 17)",
            isRight: true
          }
        ]
      },
      {
        question:
          "The metallurgical process in which a metal is obtained in a fused state is called ",
        points: 5,
        options: [
          {
            text: "smelting",
            isRight: true
          },
          {
            text: "	roasting",
            isRight: false
          },
          {
            text: "calcinations",
            isRight: false
          },
          {
            text: "froth floatation",
            isRight: false
          }
        ]
      },
      {
        question: "The molecules of which gas have highest speed?",
        points: 5,
        options: [
          {
            text: "H2 at -73oC",
            isRight: true
          },
          {
            text: "	CH4 at 300 K",
            isRight: false
          },
          {
            text: "N2 at 1,027oC",
            isRight: false
          },
          {
            text: "	O2 at 0oC",
            isRight: false
          }
        ]
      },
      {
        question:
          " The oldest rocks in the earth's crust were once molten, and came from deep inside the earth. The molten rock, called magma, spewed out in volcanic eruptions during the earth;s early life and solidified into hard rock's called ",
        points: 5,
        options: [
          {
            text: "granite",
            isRight: false
          },
          {
            text: "basalt",
            isRight: false
          },
          {
            text: "sedimentary rocks",
            isRight: false
          },
          {
            text: "	igneous rocks",
            isRight: true
          }
        ]
      },
      {
        question:
          "The law which states that the amount of gas dissolved in a liquid is proportional to its partial pressure is",
        points: 5,
        options: [
          {
            text: "Daltons law",
            isRight: false
          },
          {
            text: "Gay Lussacs law",
            isRight: false
          },
          {
            text: "Henrys law",
            isRight: true
          },
          {
            text: "	Raoults law",
            isRight: false
          }
        ]
      },
      {
        question:
          "The gas present in the stratosphere which filters out some of the sun's ultraviolet light and provides an effective shield against radiation damage to living things is",
        points: 5,
        options: [
          {
            text: "helium",
            isRight: false
          },
          {
            text: "ozone",
            isRight: true
          },
          {
            text: "oxygen",
            isRight: false
          },
          {
            text: "methane",
            isRight: false
          }
        ]
      }
    ]
  },

  {
    quizName: "General Knowledge",
    id: 3,
    questions: [
      {
        question:
          "Grand Central Terminal, Park Avenue, New York is the world's",
        points: 5,
        options: [
          {
            text: "highest railway station",
            isRight: false
          },
          {
            text: "longest railway station",
            isRight: false
          },
          {
            text: "largest railway station",
            isRight: true
          },
          {
            text: "None of the above",
            isRight: false
          }
        ]
      },
      {
        question: `	
            Entomology is the science that studies`,
        points: 5,
        options: [
          {
            text: "Insects",
            isRight: true
          },
          {
            text: "	Behavior of human beings",
            isRight: false
          },
          {
            text: "The origin and history of technical and scientific terms",
            isRight: false
          },
          {
            text: "The formation of rocks",
            isRight: false
          }
        ]
      },
      {
        question: `	Eritrea, which became the 182nd member of the UN in 1993, is in the continent of`,
        points: 5,
        options: [
          {
            text: "Asia",
            isRight: false
          },
          {
            text: "Africa",
            isRight: true
          },
          {
            text: "	Europe",
            isRight: false
          },
          {
            text: "	Australia",
            isRight: false
          }
        ]
      },
      {
        question: `Garampani sanctuary is located at`,
        points: 5,
        options: [
          {
            text: "Junagarh, Gujarat",
            isRight: false
          },
          {
            text: "Diphu, Assam",
            isRight: true
          },
          {
            text: "	Kohima, Nagaland",
            isRight: false
          },
          {
            text: "Gangtok, Sikkim",
            isRight: false
          }
        ]
      },
      {
        question: `	
            For which of the following disciplines is Nobel Prize awarded?`,
        points: 5,
        options: [
          {
            text: "Physics and Chemistry",
            isRight: false
          },
          {
            text: "Physiology or Medicine",
            isRight: false
          },
          {
            text: "Literature, Peace and Economics",
            isRight: false
          },
          {
            text: "	All of the above",
            isRight: true
          }
        ]
      },
      {
        question: "Hitler party which came into power in 1933 is known as",
        points: 5,
        options: [
          {
            text: "Nazi Party",
            isRight: true
          },
          {
            text: "Labour Party",
            isRight: false
          },
          {
            text: "Ku-Klux-Klan",
            isRight: false
          },
          {
            text: "Democratic Party",
            isRight: false
          }
        ]
      },
      {
        question: " FFC stands for",
        points: 5,
        options: [
          {
            text: "Film Finance Corporation",
            isRight: true
          },
          {
            text: "	Foreign Finance Corporation",
            isRight: false
          },
          {
            text: "Federation of Football Council",
            isRight: false
          },
          {
            text: "None of the above",
            isRight: false
          }
        ]
      },
      {
        question: "Fastest shorthand writer was",
        points: 5,
        options: [
          {
            text: "	Khudada Khan",
            isRight: false
          },
          {
            text: "	J.M. Tagore",
            isRight: false
          },
          {
            text: "	J.R.D. Tata",
            isRight: false
          },
          {
            text: "Dr. G. D. Bist",
            isRight: true
          }
        ]
      },
      {
        question: "Epsom (England) is the place associated with",
        points: 5,
        options: [
          {
            text: "Shooting",
            isRight: false
          },
          {
            text: "Polo",
            isRight: false
          },
          {
            text: "Horse racing",
            isRight: true
          },
          {
            text: "Snooker",
            isRight: false
          }
        ]
      },
      {
        question: "Galileo was an Italian astronomer who",
        points: 5,
        options: [
          {
            text: "developed the telescope",
            isRight: false
          },
          {
            text: "discovered four satellites of Jupiter",
            isRight: false
          },
          {
            text:
              "discovered that the movement of pendulum produces a regular time measurement",
            isRight: false
          },
          {
            text: "All of the above",
            isRight: true
          }
        ]
      }
    ]
  },

  {
    quizName: "Biology",
    id: 4,
    questions: [
      {
        question:
          "Ordinary table salt is sodium chloride. What is baking soda?",
        points: 5,
        options: [
          {
            text: "Potassium chloride",
            isRight: false
          },
          {
            text: "Potassium carbonate",
            isRight: false
          },
          {
            text: "Sodium bicarbonate",
            isRight: true
          },
          {
            text: "Potassium hydroxide",
            isRight: false
          }
        ]
      },
      {
        question: `	Ozone hole refers to`,
        points: 5,
        options: [
          {
            text: "decrease in thickness of ozone layer in stratosphere",
            isRight: true
          },
          {
            text: "hole in ozone layer",
            isRight: false
          },
          {
            text: "decrease in the ozone layer in troposphere",
            isRight: false
          },
          {
            text: "increase in the thickness of ozone layer in troposphere",
            isRight: false
          }
        ]
      },
      {
        question: `	
            Pine, fir, spruce, cedar, larch and cypress are the famous timber-yielding plants of which several also occur widely in the hilly regions of India. All these belong to`,
        points: 5,
        options: [
          {
            text: "angiosperms",
            isRight: false
          },
          {
            text: "gymnosperms",
            isRight: true
          },
          {
            text: "	monocotyledons",
            isRight: false
          },
          {
            text: "dicotyledons",
            isRight: false
          }
        ]
      },
      {
        question: `Pollination is best defined as`,
        points: 5,
        options: [
          {
            text: "germination of pollen grains",
            isRight: false
          },
          {
            text: "transfer of pollen from anther to stigma",
            isRight: true
          },
          {
            text: "growth of pollen tube in ovule",
            isRight: false
          },
          {
            text: "visiting flowers by insects",
            isRight: false
          }
        ]
      },
      {
        question: `	
            Plants receive their nutrients mainly from`,
        points: 5,
        options: [
          {
            text: "chlorophyll",
            isRight: false
          },
          {
            text: "atmospheree",
            isRight: false
          },
          {
            text: "light",
            isRight: false
          },
          {
            text: "soil",
            isRight: true
          }
        ]
      },
      {
        question: "Movement of cell against concentration gradient is called",
        points: 5,
        options: [
          {
            text: "	active transport",
            isRight: true
          },
          {
            text: "osmosis",
            isRight: false
          },
          {
            text: "diffusion",
            isRight: false
          },
          {
            text: "passive transport",
            isRight: false
          }
        ]
      },
      {
        question:
          "Photosynthesis generally takes place in which parts of the plant?",
        points: 5,
        options: [
          {
            text: "Leaf and other chloroplast bearing parts",
            isRight: true
          },
          {
            text: "	stem and leaf",
            isRight: false
          },
          {
            text: "	Roots and chloroplast bearing parts",
            isRight: false
          },
          {
            text: "Bark and leaf",
            isRight: false
          }
        ]
      },
      {
        question: "Plants synthesis protein from",
        points: 5,
        options: [
          {
            text: "	starch",
            isRight: false
          },
          {
            text: "sugar",
            isRight: false
          },
          {
            text: "fattya acids",
            isRight: false
          },
          {
            text: "amino acids",
            isRight: true
          }
        ]
      },
      {
        question:
          "Plants absorb dissolved nitrates from soil and convert them into",
        points: 5,
        options: [
          {
            text: "urea",
            isRight: false
          },
          {
            text: "	proteins",
            isRight: false
          },
          {
            text: "free nitrogen",
            isRight: true
          },
          {
            text: "ammonia",
            isRight: false
          }
        ]
      },
      {
        question: "One of the following is not a function of bones.",
        points: 5,
        options: [
          {
            text: "Place for muscle attachment",
            isRight: false
          },
          {
            text: "Protection of vital organs",
            isRight: false
          },
          {
            text: "Production of blood corpuscles",
            isRight: false
          },
          {
            text:
              "Secretion of hormones for calcium regulation in blood and bones",
            isRight: true
          }
        ]
      }
    ]
  }
];

export { quizOne };
