// seeds/jurisdictions/california.js

module.exports = {
    code: 'CA',
    name: 'California',
    type: 'us_state', 
    officialInfo: {
        agencyName: 'California Department of Motor Vehicles',
        websiteUrl: 'https://www.dmv.ca.gov/',
        phoneNumber: '1-800-777-0133',
        addressLine1: 'DMV Headquarters',
        addressLine2: '2415 1st Avenue, Mail Station F101',
        city: 'Sacramento',
        stateCode: 'CA',
        zip: '95818-2606',
        officeHours: 'Monday to Friday, 8:00 AM - 5:00 PM',
    },
    requirements: {
        minAge: 18,
        minAge18: {
            requiresOfficeVisit: true,
            requiresWrittenExam: true,
            requiresRoadTest: true,  
        },
        minAge21: {
            requiresOfficeVisit: true,
            requiresWrittenExam: false,
            requiresRoadTest: false,
        },
        olderThan21: {
            requiresOfficeVisit: true,
            requiresWrittenExam: false,
            requiresRoadTest: false,  
        },
        identificationDocs: [
            { name: "Valid U.S. passport or passport card" },
            { name: "Certified copy of U.S. birth certificate" },  
            { name: "Proof of legal presence document" },
            { name: "California residency document" },
        ],
        otherDocs: [
            { name: "Completed CDL application (DL 44C)" },
            { name: "Completed 10 Year History Record Check (DL 939)" },
            { name: "Medical Examination Report (DL 51)" },
            { name: "Proof of Social Security number" },
        ],
    },
    licenseInfo: {
        fees: {
            baseFee: 76,
            endorsements: [
                { code: 'T', name: 'Double/Triple Trailers', fee: 0 },
                { code: 'P', name: 'Passenger Transport', fee: 0 },
                { code: 'N', name: 'Tank Vehicle', fee: 0 },
                { code: 'H', name: 'Hazardous Materials', fee: 86.50 },  
                { code: 'X', name: 'Hazmat & Tank Combo', fee: 86.50 },
                { code: 'S', name: 'School Bus', fee: 0 },
            ],
        },
        classTypes: [
            { 
                code: 'A',
                name: 'Class A',
                description: 'Any legal combination of vehicles, including vehicles under Class B and Class C.',
                maxGrossVehicleWeightRating: "26,001 or more",
                maxGrossComboWeightRating: "26,001 or more",
            },
            { 
                code: 'B',
                name: 'Class B', 
                description: 'A single vehicle with a GVWR of 26,001 or more pounds, or any such vehicle towing another not in excess of 10,000 lbs GVWR.',
                maxGrossVehicleWeightRating: 26001,
                maxGrossComboWeightRating: 26001,
            },
            {
                code: 'C',
                name: 'Class C',
                description: 'Vehicles that do not fit the definition of Class A or B, but are placarded for hazardous materials or designed to transport 16 or more passengers including the driver.',
                maxGrossVehicleWeightRating: 26000,
                maxGrossComboWeightRating: 26000,
            },
        ],
    },
    testingInfo: {
        writtenExams: {
            passenger: {
                numberOfQuestions: 50,
                passingScore: 40,
                timeAllowed: 60,
            },
            airBrakes: {
                numberOfQuestions: 25,
                passingScore: 20,
                timeAllowed: 25, 
            },
            combination: {
                numberOfQuestions: 20,
                passingScore: 16,  
                timeAllowed: 20,
            },
            hazMat: {
                numberOfQuestions: 30, 
                passingScore: 24,
                timeAllowed: 30,
            },
            tanker: {
                numberOfQuestions: 20,
                passingScore: 16,
                timeAllowed: 20,  
            },
            doubles: {
                numberOfQuestions: 20,
                passingScore: 16,
                timeAllowed: 20,
            },
            schoolBus: {
                numberOfQuestions: 20,
                passingScore: 16,
                timeAllowed: 20,
            },  
        },
        skillsTests: {
            scoresheet: {
                url: 'https://www.dmv.ca.gov/web/eng_pdf/comlicforms/dl65pt.pdf',
            },
            inspectionAreas: [
                "Engine compartment", "Cab check/engine start","Air brake check (if applicable)","Lights",
                "Steering", "Suspension", "Brakes", "Wheels", "Side of vehicle", "Rear of vehicle"
            ],
            basicControls: ["Braking and stopping", "Backing", "Parking", "Putting vehicle in motion"],  
            roadTest: ["Turns", "Intersections", "Urban business", "Expressway or rural/limited access highway", "Stop/start"],
        },
    },
    locations: [
        {
            name: 'Los Angeles DMV',
            addressLine1: '3615 S Hope St',  
            city: 'Los Angeles',
            stateCode: 'CA',
            zip: 90007,
            latitude: 34.0195896,
            longitude: -118.278329
        },
        {
            name: 'San Francisco DMV', 
            addressLine1: '1377 Fell St',
            city: 'San Francisco',
            stateCode: 'CA',
            zip: 94117,  
            latitude: 37.7720858,
            longitude: -122.4433049  
        },
        {
            name: 'San Diego DMV',
            addressLine1: '3960 Normal St',
            city: 'San Diego', 
            stateCode: 'CA',
            zip: 92103,
            latitude: 32.7503112,
            longitude: -117.1494902
        }
    ],
    regulations: {
        equipmentRules: [
            "Vehicles must have working speedometer.",
            "Vehicles must have properly mounted fire extinguisher.",
            "Seat belt must be in good working order.",
            "Vehicles must not have any fuel leaks.",
            "Vehicles must not have excessive steering play.",
        ],
        operatingRules: [
            "Driver must be in proper lane when turning.",
            "Driver must look back and check mirrors regularly.",
            "Driver must yield right-of-way properly.",
            "Driver must stop at all stop signs.",
            "Driver must maintain proper spacing.",
        ], 
        logs: {
            url: 'https://www.dmv.ca.gov/web/eng_pdf/comlicforms/dl51.pdf',  
            info: 'California drivers must maintain a log of their hours of service as required by FMCSA regulations.',
        }
    }
}