/* jslint node: true, esnext: true */
'use strict';

export const resources = [{
    name: "Open Door Community",
    civic_address: "910 Ponce De Leon Ave NE",
    phone: "(404) 874-9652",
    description: "The Open Door Community is a residential community in the Catholic Worker tradition (we’re sometimes called a Protestant Catholic Worker House). We seek to dismantle racism, sexism and heterosexism, abolish the death penalty, and proclaim the Beloved Community through loving relationships with some of the most neglected and outcast of God’s children: the homeless and our sisters and brothers who are in prison. We serve breakfasts and soup-kitchen lunches, provide showers and changes of clothes, staff a free medical clinic, conduct worship services and meetings for the clarification of thought, and provide a prison ministry, including monthly trips for families to visit loved ones at the Hardwick Prisons in central Georgia. We also advocate on behalf of the oppressed, homeless and prisoners through non-violent protests, grassroots organizing and the publication of our monthly newspaper, Hospitality.",
    lat: "33.7744098",
    lng: "-84.3575221",
    rating: {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5
    },
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      author: "Anonymous",
      text: "Free flu vaccines"
    }, {
      overall: 2,
      accessibility: 2,
      qualityofcare: 5,
      author: "Anonymous",
      text: "Great that this place is near a MARTA station"
    }],
    tags: [{
      key: 0,
      label: 'free',
      count: '1'
    }, {
      key: 1,
      label: 'homeless',
      count: '1'
    }, ]
  }, {
    name: "Community Advance Practice Nurses",
    civic_address: "173 Boulevard NE, Atlanta",
    postal_code: "30312",
    lat: "33.7592659",
    lng: "-84.3714725",
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
      availability: 2,
      quality: 5,
      affordability: 4,
    },
    reviews: [{
      accessibility: 5,
      quality: 4,
      affordability: 4,
      author: "Anonymous",
      text: "Free flu vaccines"
    }, {
      accessibility: 2,
      qualityofcare: 5,
      affordability: 4,
      author: "Anonymous",
      text: "Great that this place is near a MARTA station"
    }],
    tags: [{
      key: 0,
      label: 'free',
      count: '1'
    }, {
      key: 1,
      label: 'homeless',
      count: '1'
    }, ]
  }, {
    name: "Mercy Care at The Gateway",
    civic_address: "275 Pryor St SW, Atlanta",
    postal_code: "30303",
    lat: "33.747959",
    lng: "-84.39410119999999",
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
    tags: [{
      key: 0,
      label: 'free',
      count: '1'
    }, {
      key: 1,
      label: 'homeless',
      count: '1'
    }, ]
  },

  {
    name: "Metro Atlanta Task Force for the Homeless",
    civic_address: "477 Peachtree St NE, Atlanta",
    postal_code: "30308",
    lat: "33.7677824",
    lng: "-84.3842002",
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
    lat: "33.7848894",
    lng: "-84.4087713",
    description: "For homeless women, including mothers, The Atlanta Day Shelter for Women and Children provides a variety of services, including childcare, showers, laundry, lunch, MARTA cards for medical appointments, medical care, life-skills classes, recreational opportunities, documentation (birth certificates, state IDs), access to My Sister’s House (for overnight services), and much more.",
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
    tags: [{
      key: 0,
      label: 'women',
      count: '1'
    }, {
      key: 1,
      label: 'children',
      count: '1'
    }, ]
  },

  {
    name: "Good Samaritan Health Center",
    description: "The Center offers medical, dental, health education, mental health, and social services. Patients pay on a reduced sliding fee scale based on income and household size with the remaining costs provided by donations. At The Good Samaritan Health Center, the entire family receives quality healthcare in an atmosphere of dignity and respect, regardless of race, ethnicity, or religion.",
    phone: "(404) 523-6571",
    civic_address: "1015 Donald Lee Hollowell Pkwy NW",
    postal_code: "30318",
    lat: "33.7739374",
    lng: "-84.4204888",
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
    civic_address: "607 Peachtree St NE",
    postal_code: "30308",
    lat: "33.7709437",
    lng: "-84.3844309",
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
    tags: [{
      key: 0,
      label: 'free',
      count: '1'
    }, {
      key: 1,
      label: 'homeless',
      count: '1'
    }, {
      key: 2,
      label: 'children',
      count: '1'
    }, ]
  }, {
    name: "Mercy Care North",
    civic_address: "Northeast Plaza, 3367 Buford Hwy NE #910",
    postal_code: "30319 ",
    lat: "33.8436393",
    lng: "-84.3254455",
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
    lat: "33.7551869",
    lng: "-84.38913789999999",
    tags: ["sliding scale", "family", "medicaid", "dental", "vision"]
  }, {
    name: "Center for Black Women’s Wellness",
    civic_address: "477 Windsor St SW",
    postal_code: "30312",
    phone: "(404) 688-9202",
    lat: "33.7427217802915",
    lng: "-84.39836401970848",
    tags: ["women", "black", "pregnancy", "birth control"]
  }, {
    name: "Grant Park Clinic",
    civic_address: "477 Windsor St SW",
    postal_code: "30312",
    phone: "(404) 688-9202",
    lat: "33.824465",
    lng: "-84.090121",
    tags: ["sliding scale", "family", "medicaid", "dental", "vision"]
  }, {
    name: "Mercy Care",
    civic_address: "477 Windsor St SW",
    postal_code: "30312",
    phone: "(404) 688-9202",
    lat: "33.704465",
    lng: "-84.190121",
    tags: ["sliding scale", "family", "medicaid", "dental", "vision"]
  }, {
    name: "National AIDS Education and Services for Minorities Inc.",
    civic_address: "477 Windsor St SW",
    postal_code: "30312",
    phone: "(404) 688-9202",
    lat: "33.704465",
    lng: "-84.190121",
    tags: ["STD", "HIV", "minorities"]

  }, {
    name: "Richmond County Medical Society Project Access",
    description: "RCMS Project Access, Inc. is an outreach program of the Richmond County Medical Society which assists the uninsured indigent people of Richmond and Columbia Counties with accessing physician services and assists Richmond and Columbia County physicians with expanding their role in caring for these patients. RCMS Project Access, Inc. is a participant in the CSRA Partnership for Community Health and the Greater Augusta Healthcare Network (GAHN).",
    civic_address: "2612 Commons Blvd",
    postal_code: "30909",
    phone: "(706) 733-5177",
    lat: "33.5095012",
    lng: "-82.0417082",
    tags: ["Richmond", "uninsured", "medicaid", "free"]
  }, {
    name: "Urban Health and Wellness",
    description: "Urban Health and Wellness is a free medical clinic which serves residents of metro Atlanta who are uninsured or have Medicaid. Urban Health and Wellness provides quality medical care for routine primary care medical needs, chronic illness and/or disease, and help with prescription medications through the drug manufacturer’s Pharmaceutical Assistance Programs.",
    civic_address: "645 Grant St SE, Atlanta",
    postal_code: "30312",
    phone: "404-618-6983",
    lat: "33.7371122",
    lng: "-84.37659579999999",
    tags: ["adult", "free", "medicaid"]
  }, {
    name: "The Center for Pan Asian Community Services, Inc.",
    description: "Center for Pan Asian Community Services(CPACS) is a private nonprofit located in Atlanta, Georgia. Our mission is to promote self-sufficiency and equity for immigrants, refugees, and the underprivileged through comprehensive health and social services, capacity building, and advocacy.",
    civic_address: "3510 Shallowford Rd",
    postal_code: "30341",
    phone: "(770) 936-0969",
    lat: "33.8914865",
    lng: "-84.286951",
    tags: ["asian", "immigrant", "refugee"]
  }, {
    name: "Adolescent Medicine Clinic, Children’s Healthcare at Hughes Spalding",
    civic_address: "35 Jesse Hill Jr Dr SE, Atlanta, GA 30303",
    lat: "33.7539006",
    lng: "-84.38200929999999",
    phone: "404-785-9855",
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
    lat: "33.752519",
    lng: "-84.3811922",
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
    description: "Grady’s Family Planning Wellness Clinic provides education, counseling, medical and birth control services along with Sexually Transmitted Infections (STI) screenings for men and women. Services Offered: Physical Exams, Birth Control, HIV/STD Testing & Treatment, HPV Vaccine, Pap & Breast Exams, Pregnancy Testing",
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
    lat: "33.7566635",
    lng: "-84.3819613",
    phone: " (404) 688-9300",
    description: "Planned Parenthood Southeast believes in the fundamental right of each individual, throughout our service area, to manage his or her fertility, regardless of the individual's income, marital status, race, ethnicity, gender identity or expression, sexual orientation, age, religion, disability, or residence.",
    tags: ["women", "sexual health", "birth control", "pregnancy", ]
  }, {
    name: "Northside Mental Health Clinic",
    civic_address: "6105 Peachtree Dunwoody Rd #155",
    postal_code: "30328",
    lat: "33.922029",
    lng: "-84.351258",
    phone: "(404) 851-8960",
    description: "The CAPN Clinic is a free clinic offering basic physical and mental health care and prevention education to the homeless and medically underserved in metropolitan Atlanta. It is an independent nonprofit funded by grants, businesses, and individuals.CAPN provides walk-in clinics for infants, children, teens and adults in need of medical attention for primary and acute care needs. CAPN also offers social service referrals, mental health services and healthy lifestyle counseling as well.",
    tags: ["mental health"]
  }, {
    name: "Clifton Springs Mental Health Center",
    civic_address: "3110 Clifton Springs Rd Ste B",
    postal_code: "30034",
    phone: "(404) 243-9500",
    lat: "33.693257",
    lng: "-84.26244919999999",
    description: "The CAPN Clinic is a free clinic offering basic physical and mental health care and prevention education to the homeless and medically underserved in metropolitan Atlanta. It is an independent nonprofit funded by grants, businesses, and individuals.CAPN provides walk-in clinics for infants, children, teens and adults in need of medical attention for primary and acute care needs. CAPN also offers social service referrals, mental health services and healthy lifestyle counseling as well.",
    tags: ["mental health", "counseling"]
  }, {
    name: "Grady Psychiatric Emergency Room",
    civic_address: "80 Jesse Hill Jr Drive SE Atlanta, GA 30303",
    postal_code: "30303",
    lat: "33.752519",
    lng: "-84.3811922",
    phone: "404-616-4762",
    description: "description",
    tags: [{
      key: 0,
      label: 'women',
      count: '1'
    }, {
      key: 1,
      label: 'adolescent',
      count: '1'
    }, {
      key: 2,
      label: 'family',
      count: '1'
    }, {
      key: 3,
      label: 'pregnancy',
      count: '1'
    }, {
      key: 4,
      label: 'birth control',
      count: '1'
    }, ],
    reviews: [],
  }, {
    name: "Georgia State University Student Health Clinic",
    civic_address: "141 Piedmont Ave NE,",
    postal_code: "30303",
    phone: "404-413-1930",
    lat: "33.7574177",
    lng: "-84.38201219999999",
    description: "The Student Health Clinic is able to handle many of Georgia State students’ primary healthcare needs. Several of the primary care services are listed below. The clinic also offers a variety of other services, such as women’s healthcare, men’s healthcare, prescriptions, immunizations and testing to ensure their physical well-being.",
    tags: ["student"],
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }],
  }, {
    name: "Asa G. Yancey Sr. Health Center",
    civic_address: "1247 Donald Lee Hollowell Pkwy NW",
    postal_code: "30318",
    lat: "33.773671",
    lng: "-84.4284067",
    phone: "(404) 616-2265",
    description: "Grady’s Neighborhood Health Centers offer primary care and more for men and women of all ages. Primary care is having one doctor (or clinic) for all of your general healthcare needs. It is an important part of staying healthy. Grady’s primary care doctors offer complete care for all parts of your body and for most diseases. If your doctor feels you need to see a specialist, they will refer you to one. Our primary care physicians and staff manage many common chronic illnesses, such as: High blood pressure, High cholesterol, Diabetes, Asthma",
    tags: ["sliding scale", "family", "medicaid"],
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }],
  }, {
    name: "HEALing Community Center",
    description: "We are a Federally Qualified Health Center. We offer a sliding fee scale. Services: Adult Medicine, Behavioral Health, Cardiology, Dental, Health Education, Health Enrollment Assistance, HIV Testing and Counseling, OB/GYN, Otolaryngology (ENT), Pediatrics, Podiatry, Prescription Assistance, Social Services, Vision Care",
    civic_address: "2600 M.L.K. Jr Dr SW #100",
    postal_code: "30311",
    lat: "33.7533304",
    lng: "-84.47229949999999",
    phone: "(404) 564-7749",
    tags: ["sliding scale", "family", "pulmonology", "medicaid", "adult",
      "children"
    ],
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }],
  }, {
    name: "Kirkwood Family Medicine",
    description: "We provide a variety of healthcare services right in your neighborhood so you don’t have to waste time, energy or money traveling all over town. Does your child need a check-up while you need an eye care appointment? You can do both at Kirkwood Neighborhood Health Center. Do you need to fill a prescription? Did the doctor order lab work? Both can be taken care of right inside our facility. Kirkwood Neighborhood Health Center also utilizes an electronic medical records system that allows your health information to be accessed, saving you time, and easily shared with other medical providers, should an emergency arise. We are here to make your healthcare experience as efficient as possible, while maintaining the highest standard of care.",
    civic_address: "1863 Memorial Drive, SE Atlanta",
    postal_code: "30317",
    lat: "33.7458806",
    lng: "-84.3277662",
    phone: "(404) 616-9304",
    tags: ["adult", "children", "immunizations", "pregnancy",
      "family planning", "birth control", "diabetes", "interpretor",
      "translation", "blood pressure", "prostate"
    ],
    reviews: [{
      overall: 5,
      accessibility: 5,
      qualityofcare: 4,
      text: "Free flu vaccines"
    }],
  },
];
