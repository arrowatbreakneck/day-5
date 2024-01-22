const resume = {
    "name": "Srinivas Raghav .V",
    "contact": {
      "mail": "srinivasraghav03@gmail.com",
      "phone": "9003046611",
      "address": "No.7/3, 11th Street, Parthasarathy Nagar, Adambakkam, Chennai-600088"
    },
    "personal_details": {
      "date_of_birth": "15 Dec 1993",
      "nationality": "Indian",
      "languages": ["Tamil", "English"]
    },
    "education": [
      {
        "degree": "SSLC",
        "percentage": "76%",
        "school": "Vyasa Vidyalaya Matriculation Higher Secondary School",
        "year": "2009"
      },
      {
        "degree": "HSC",
        "percentage": "56%",
        "school": "Vidyaa Vikas Higher Secondary School",
        "year": "2011"
      },
      {
        "degree": "B.E. Automobile",
        "percentage": "50",
        "school": "Rajalakshmi Engineering College",
        "year": "2011 - 2015"
      },
      {
        "degree": "Series VIII Equity Derivatives",
        "percentage": "67",
        "school": "National Institute Of Security Markets",
        "year": "2020"
      }
    ]
  }
  for (let key in resume) {
    if (resume.hasOwnProperty(key)) {
      console.log(key + ": " + JSON.stringify(resume[key]));
    }
  }