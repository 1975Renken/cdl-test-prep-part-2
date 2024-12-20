// seeds/jurisdictions/idaho.js

module.exports = {
    code: 'ID',
    name: 'Idaho',
    type: 'us_state', 
    officialInfo: {
        stateAgencyName: 'Idaho Transportation Department',
        stateWebsite: 'https://itd.idaho.gov/',
        manualLink: 'https://itd.idaho.gov/wp-content/uploads/2020/12/cdl-manual.pdf',
    },
    requirements: {
        minimumAge: 18,
        minimumAge18: {
            details: "With a valid Class D license, you can obtain a CDL at 18 for intrastate operation. For interstate operation, you must be at least 21.",
        },  
        testingRequired: {
            knowledge: true,
            skills: true,
        },
        requiredDocuments: [
            "Valid Idaho driver's license",
            "Proof of identity and lawful presence",
            "Proof of Social Security Number",
            "Valid medical card",
        ],
        training: {
            hoursRequired: 0,
            details: "CDL applicants must pass a knowledge test and demonstrate their skills through a skills test, but there are no minimum training hours required. Training programs are available but optional.",
        },
    },
    licenseInfo: {
        cost: 30,
        issuedBy: 'ITD DMV',
        validFor: {
            amount: 8, 
            unit: 'year',
        },
        renewalFrequency: {
            amount: 8, 
            unit: 'year',
        },
    },
    classTypes: {
        a: {
            name: 'Class A', 
            description: "For operating any combination of vehicles with a gross combination weight rating (GCWR) of 26,001 lbs or more, provided the towed unit has a GVWR of more than 10,000 lbs.",
        },
        b: {
            name: 'Class B',
            description: "For operating any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing another not weighing more than 10,000 lbs GVWR.",
        },
        c: {
            name: 'Class C',
            description: "For operating any single vehicle or combination of vehicles not meeting Class A or B definitions but are designed to transport 16 or more passengers (including you, the driver) or are used in the transportation of hazardous materials.",
        },
    },
    endorsements: {
        t: {
            name: 'T - Double/Triple Trailer',
            requirements: "Special knowledge test",
        },
        p: {
            name: 'P - Passenger Vehicle', 
            requirements: "Special knowledge and skills tests",
        },
        n: {
            name: 'N - Tank Vehicle',
            requirements: "Special knowledge test", 
        },
        h: {
            name: 'H - Hazardous Materials',
            requirements: "Special knowledge test and background check",
        },
        s: {
            name: 'S - School Bus',
            requirements: "Special knowledge and skills tests, background check",
        },
    },
    locations: [
        {
            name: 'Boise CDL Office',
            address: '400 Karcher Rd, Nampa, ID 83687',
            latitude: 43.558897, 
            longitude: -116.566002,
        },
        {
            name: 'Coeur dAlene CDL Office',  
            address: '1735 W Kathleen Ave, Coeur dAlene, ID 83815',
            latitude: 47.701851,
            longitude: -116.805191,
        },
        {
            name: 'Pocatello CDL Office',
            address: '216 S 7th Ave, Pocatello, ID 83201', 
            latitude: 42.861111,
            longitude: -112.450556,
        },
    ],
    process: [
        "Get a valid Idaho Class D (non-commercial) license", 
        "Hold a Class D license for at least one year if under 21 years old",
        "Pass knowledge test(s)", 
        "Get a Commercial Learner's Permit (CLP) to practice",
        "Pass a skills test in appropriate vehicle for license class",
        "Provide proof of identity, Social Security Number, and medical certification",
        "Pay applicable fee and receive CDL",
    ],
}