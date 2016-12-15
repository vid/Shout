/* jslint node: true, esnext: true */
'use strict';

export const resources = [{
    name: "Open Door Community",
    civic_address: "910 Ponce De Leon Ave NE",
    phone: "(404) 874-9652",
    description: "The Open Door Community is a residential community in the Catholic Worker tradition (we’re sometimes called a Protestant Catholic Worker House). We seek to dismantle racism, sexism and heterosexism, abolish the death penalty, and proclaim the Beloved Community through loving relationships with some of the most neglected and outcast of God’s children: the homeless and our sisters and brothers who are in prison. We serve breakfasts and soup-kitchen lunches, provide showers and changes of clothes, staff a free medical clinic, conduct worship services and meetings for the clarification of thought, and provide a prison ministry, including monthly trips for families to visit loved ones at the Hardwick Prisons in central Georgia. We also advocate on behalf of the oppressed, homeless and prisoners through non-violent protests, grassroots organizing and the publication of our monthly newspaper, Hospitality.",
    lat: "33.724465",
    lng: "-81.080121",
    rating: {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      text: "Great that this place is near a MARTA station"
    }],
    tags: ["family", "housing", "homeless"]

  }, {
    name: "Community Advance Practice Nurses",
    civic_address: "173 Boulevard NE, Atlanta",
    postal_code: "30312",
    lat: "33.524465",
    lng: "-83.090121",
    phone: "(404) 658-1500",
    hours: {
      M: {
        start: "8",
        finish: "15"

      },
      T: {
        start: "8",
        finish: "15"
      },
      W: {
        start: "8",
        finish: "15"
      },
      Th: {},
      F: {},
      Sat: {},
      Sun: {}
    },
    description: "The CAPN Clinic is a free clinic offering basic physical and mental health care and prevention education to the homeless and medically underserved in metropolitan Atlanta. It is an independent nonprofit funded by grants, businesses, and individuals.CAPN provides walk-in clinics for infants, children, teens and adults in need of medical attention for primary and acute care needs. CAPN also offers social service referrals, mental health services and healthy lifestyle counseling as well.",
    rating: {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      text: "Great that this place is near a MARTA station"
    }],
    tags: ["free", "homeless"]
  }, {
    name: "Mercy Care at The Gateway",
    civic_address: "275 Pryor St SW, Atlanta",
    postal_code: "30303",
    lat: "33.724465",
    lng: "-83.580121",
    phone: "(678) 843-8840",
    description: "We honor the healing mission of the Sisters of Mercy by providing excellent healthcare to the poor and marginalized.Our fundamentals are compassion, commitment to the poor, excellence, integrity, justice, stewardship and reverence for the dignity of each person. We are rich with workers, volunteers, board members, collaborators, funders; excellent facilities and vehicle fleets; and professional and technological expertise.",
    rating: {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      text: "Great that this place is near a MARTA station"
    }],
    tags: ["free", "homeless"]
  },

  {
    name: "Metro Atlanta Task Force for the Homeless",
    civic_address: "477 Peachtree St NE, Atlanta",
    postal_code: "30308",
    phone: "(404) 787-5826",
    description: "",
    rating: {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      text: "Great that this place is near a MARTA station"
    }],
    tags: ["women", "handicapped", "free", "homeless"]
  }, {
    name: "Atlanta Day Shelter For Women & Children",
    civic_address: "655 Ethel St NW, Atlanta",
    postal_code: "30318",
    description: "",
    rating: {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      text: "Great that this place is near a MARTA station"
    }],
    tags: ["women", "children", "free", "housing"]
  },

  {
    name: "Good Samaritan Health Center",
    description: "",
    rating: {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      text: "Great that this place is near a MARTA station"
    }],
    tags: ["women", "handicapped", "free", "homeless"]
  }, {
    name: "Atlanta Childrens Shelter",
    phone: "(678) 843-8700",
    description: "",
    rating: {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      text: "Great that this place is near a MARTA station"
    }],
    tags: ["women", "handicapped", "free", "homeless"]
  }, {
    name: "Mercy Care North",
    civic_address: "Northeast Plaza, 3367 Buford Hwy NE #910",
    postal_code: "30319 ",
    lat: "33.71004",
    lng: "-84.090121",
    description: "",
    rating: {
      overall: 4,
      accessibility: 4,
      qualtyofcare: 3
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      text: "Great that this place is near a MARTA station"
    }],
    tags: ["women", "handicapped", "free", "homeless"]
  }, {
    name: "Georgia Law Center for the Homeless",
    civic_address: "One Park Tower, 34 Peachtree St NW #750",
    postal_code: "30303",
    phone: "(404) 681-0680",
    lat: "33.71004",
    lng: "-84.090121"
  }, {
    name: "Center for Black Women’s Wellness"
  }, {
    name: "Grant Park Clinic",
    lat: "33.824465",
    lng: "-84.090121"
  }, {
    name: "Mercy Care",
    lat: "33.704465",
    lng: "-84.190121"
  }, {
    name: "National AIDS Education and Services for Minorities Inc."
  }, {
    name: "Richmond County Medical Society Project Access"
  }, {
    name: "Urban Health and Wellness"
  }, {
    name: "The Center for Pan Asian Community Services, Inc."
  }, {
    name: "Richmond County Medical Society Project Access",
    civic_address: "2612 Commons Boulevard",
    z: "Augusta",
    postal_code: "30909",
    phone: "706-733-5177"
  }, {
    name: "Adolescent Medicine Clinic, Children’s Healthcare at Hughes Spalding",
    civic_address: "35 Jesse Hill Jr Dr SE, Atlanta, GA 30303",
    phone: "(404) 785-5437",
    hours: {
      M: {
        start: "8",
        finish: "15"

      },
      T: {
        start: "8",
        finish: "15"
      },
      W: {
        start: "8",
        finish: "15"
      },
      Th: {},
      F: {},
      Sat: {},
      Sun: {}
    },
    description: "In our clinic, we support teens by talking about their health with them and their parents or guardians. Because teens may be embarrassed to have an exam or talk about some things in front of their parents, we give all teens a chance to be seen privately.",
    rating: {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      text: "Great that this place is near a MARTA station"
    }],
    tags: ["children", "adolescent", "pregnancy", "std", "family planning"]

  }, {
    name: "Grady Family Planning/Teen Clinic",
    civic_address: "80 Jesse Hill Jr Drive SE Atlanta, GA 30303",
    postal_code: "30303",
    phone: "(404) 616-3678",
    hours: {
      M: {
        start: "8",
        finish: "15"

      },
      T: {
        start: "8",
        finish: "15"
      },
      W: {
        start: "8",
        finish: "15"
      },
      Th: {},
      F: {},
      Sat: {},
      Sun: {}
    },
    description: "The CAPN Clinic is a free clinic offering basic physical and mental health care and prevention education to the homeless and medically underserved in metropolitan Atlanta. It is an independent nonprofit funded by grants, businesses, and individuals.CAPN provides walk-in clinics for infants, children, teens and adults in need of medical attention for primary and acute care needs. CAPN also offers social service referrals, mental health services and healthy lifestyle counseling as well.",
    rating: {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      text: "Great that this place is near a MARTA station"
    }],
    tags: ["women", "adolescent", "teen", "family", "sexual health",
      "birth control", "pregnancy"
    ]
  }, {
    name: "Planned Parenthood",
    civic_address: "75 Piedmont Ave NE #800, Atlanta, GA 30303",
    postal_code: "30303",
    phone: " (404) 688-9300",
    description: "Planned Parenthood Southeast believes in the fundamental right of each individual, throughout our service area, to manage his or her fertility, regardless of the individual's income, marital status, race, ethnicity, gender identity or expression, sexual orientation, age, religion, disability, or residence.",
    tags: ["women", "sexual health", "birth control", "pregnancy", ]
  }, {
    name: "Grady Family Planning/Teen Clinic",
    civic_address: "80 Jesse Hill Jr Drive SE Atlanta, GA 30303",
    postal_code: "30303",
    phone: "(404) 616-3678",
    description: "The CAPN Clinic is a free clinic offering basic physical and mental health care and prevention education to the homeless and medically underserved in metropolitan Atlanta. It is an independent nonprofit funded by grants, businesses, and individuals.CAPN provides walk-in clinics for infants, children, teens and adults in need of medical attention for primary and acute care needs. CAPN also offers social service referrals, mental health services and healthy lifestyle counseling as well.",
    tags: ["women", "adolescent", "teen", "family", "sexual health",
      "birth control", "pregnancy"
    ]
  }, {
    name: "Grady Family Planning/Teen Clinic",
    civic_address: "80 Jesse Hill Jr Drive SE Atlanta, GA 30303",
    postal_code: "30303",
    phone: "(404) 616-3678",
    description: "The CAPN Clinic is a free clinic offering basic physical and mental health care and prevention education to the homeless and medically underserved in metropolitan Atlanta. It is an independent nonprofit funded by grants, businesses, and individuals.CAPN provides walk-in clinics for infants, children, teens and adults in need of medical attention for primary and acute care needs. CAPN also offers social service referrals, mental health services and healthy lifestyle counseling as well.",
    tags: ["women", "adolescent", "teen", "family", "sexual health",
      "birth control", "pregnancy"
    ]
  },
];
