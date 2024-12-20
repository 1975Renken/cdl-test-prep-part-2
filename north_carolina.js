//Here is the North Carolina jurisdiction module in the same format as the California example:

// seeds/jurisdictions/north_carolina.js
            
module.exports = {
    code: 'NC',
    name: 'North Carolina',
    type: 'us_state',
    officialInfo: {
        agencyName: 'North Carolina Division of Motor Vehicles',
        websiteUrl: 'https://www.ncdot.gov/dmv',
        phoneNumber: '(919) 715-7000',
    },
    requirements: {
        minimumAge: 18,
        minExperience: {
            years: 1,
            details: 'Must have held a valid non-commercial driver license for at least 1 year'
        },
        requiredDocs: [
            'Proof of identity (birth certificate, passport, etc.)',
            'Proof of North Carolina residency (utility bill, lease, etc.)',
            'Proof of lawful presence in the US for non-citizens',
            'Social Security card',
        ],
        testsRequired: [
            'General knowledge',
            'Air brakes (if applicable)',
            'Combinations vehicles (if applicable)',
            'Pre-trip vehicle inspection',
            'Road skills test',
        ],
    },
    licenseInfo: {
        validity: {
            years: 5,
            renewable: {
                before: { months: 6 },
                after: { months: 12 },  
            }
        },
        classTypes: [
            {
                name: 'A',
                details: 'Any combination of vehicles with a gross vehicle weight rating (GVWR) of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.',
                endorsements: ['H', 'N', 'T', 'X', 'P', 'S'],
            },
            {   
                name: 'B',
                details: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds',
                endorsements: ['H', 'N', 'P', 'S'],
            },
            {
                name: 'C',
                details: 'Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or Class B but is either designed to transport 16 or more passengers, including the driver, or is placarded for hazardous materials.',
                endorsements: ['H', 'N', 'P', 'S'],
            }
        ],
        endorsements: [
            {
                code: 'H',
                description: 'Hazardous Materials',
                requirements: [
                    'Must be 21 years old',
                    'Complete Hazardous Materials Endorsement Knowledge Test',
                    'Obtain fingerprint and background check',
                ]
            },
            {
                code: 'N',
                description: 'Tank Vehicle',
                requirements: [
                    'Complete Tank Vehicle Knowledge Test'  
                ]
            },
            {
                code: 'P',
                description: 'Passenger Transport',
                requirements: [
                    'Complete Passenger Transport Knowledge and Skills Tests'
                ] 
            },
            {
                code: 'S',
                description: 'School Bus',
                requirements: [
                    'Complete School Bus Knowledge and Skills Tests',
                    'Pass School Bus Physical Exam'
                ]
            },
            {
                code: 'T',
                description: 'Double/Triple Trailers',
                requirements: [
                    'Possess valid Class A CDL',
                    'Complete Double/Triple Trailers Knowledge Test'
                ]
            },
            {   
                code: 'X',
                description: 'Combination of Tank Vehicle and Hazardous Materials',
                requirements: [
                    'Complete all requirements for H and N endorsements'
                ]
            },
        ]
    },
    locations: [
        {
            name: 'Raleigh DMV Office',
            address: {
                street: '1100 New Bern Ave',
                city: 'Raleigh',
                state: 'NC',
                zip: '27697',
                coords: {
                    lat: 35.7847206,
                    lng: -78.6260002
                } 
            }
        },
        {
            name: 'Charlotte DMV Office',
            address: {
                street: '6016 Brookshire Blvd',
                city: 'Charlotte',  
                state: 'NC',
                zip: '28216',
                coords: {
                    lat: 35.2697272,
                    lng: -80.9300271  
                }
            }
        },
        {
            name: 'Wilmington DMV Office',
            address: {
                street: '2390 Carolina Beach Rd',
                city: 'Wilmington',
                state: 'NC', 
                zip: '28412',
                coords: {
                    lat: 34.1986059,
                    lng: -77.9053061
                }
            }  
        }
    ],
    fees: {
        baseFee: 40,
        endorsements: {
            H: 10,
            N: 0,
            T: 0,
            X: 10,
            P: 0,
            S: 0,            
        },
        knowledgeTest: {
            first: 0,
            subsequent: 10  
        },
        roadTest: {
            first: 50,
            subsequent: 50
        }
    }
}

//This module includes North Carolina-specific CDL requirements, license classes, endorsements, locations, and fees. The structure and property names match the California example, but the data has been customized for North Carolina's regulations. The location coordinates are for actual DMV offices in North Carolina.