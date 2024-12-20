//Here is the generated JavaScript module for New Hampshire with the requested structure and state-specific data:

// seeds/jurisdictions/new hampshire.js
            
module.exports = {
    code: 'NH',
    name: 'New Hampshire',
    type: 'us_state',
    officialInfo: {
        driverLicenseURL: 'https://www.nh.gov/safety/divisions/dmv/driver-licensing/index.htm',
        cdlURL: 'https://www.nh.gov/safety/divisions/dmv/driver-licensing/commercial/index.htm',
    },
    requirements: {
        basicMinAge: 18,
        intermediateMinAge: 16,
        cdlMinAge: {
            intraState: 18,
            interstate: 21,
        },
    },
    licenseInfo: {
        basicLicenseClasses: ['Class D - Operator', 'Class M - Motorcycle'],
        cdlLicenseClasses: ['Class A', 'Class B', 'Class C'],
        basicEndorsements: ['J - Moped'],
        cdlEndorsements: ['T - Double/Triple Trailers', 'P - Passenger', 'N - Tank', 'H - Hazardous Materials', 'X - Combination Tank/Hazmat', 'S - School Bus'],
        cdlRestrictions: ['L - Air Brake', 'Z - No Full Air Brake', 'E - Manual Transmission'],
    },
    fees: {
        basicLicenseFee: 60,
        basicLicenseRenewal: 60,
        cdlLicenseFee: 60,
        cdlLicenseRenewal: 60,
        testFee: 20,
    },
    exams: {
        basicWrittenTest: {
            passingScore: 80,
            numQuestions: 40,
            timeAllowed: 60,
        },
        basicRoadTest: true,  
        cdlWrittenTests: [
            {
                type: 'General Knowledge',
                passingScore: 80,
                numQuestions: 50,
                timeAllowed: 60,  
            },
            {
                type: 'Air Brakes',
                passingScore: 80,
                numQuestions: 25, 
                timeAllowed: 30,
            },
            {
                type: 'Passenger',
                passingScore: 80, 
                numQuestions: 20,
                timeAllowed: 30,
            },
        ],
        cdlRoadTest: true,
    },
    schools: {
        basicDriverEd: true,
        basicDriverEdHours: 40,
        cdlDriverEd: true,
        cdlDriverEdHours: 20,
    },
    offices: [
        {
            name: 'Concord DMV',
            location: {
                address: '23 Hazen Drive',
                city: 'Concord',
                state: 'NH',
                zip: '03305',
                coordinates: {
                    lat: 43.20371,
                    lon: -71.53898,
                }
            }
        },
        {  
            name: 'Manchester DMV',
            location: {
                address: '377 South Willow Street', 
                city: 'Manchester',
                state: 'NH',
                zip: '03103',
                coordinates: {
                    lat: 42.96843,
                    lon: -71.46696,
                }
            }
        },
        {
            name: 'Nashua DMV',
            location: {
                address: '110 Broad St',
                city: 'Nashua', 
                state: 'NH',
                zip: '03063',
                coordinates: {
                    lat: 42.76064,
                    lon: -71.46904,  
                }
            }
        },
    ],
    citations: [
        'https://www.nh.gov/safety/divisions/dmv/driver-licensing/commercial/',
        'https://www.nh.gov/safety/divisions/dmv/forms/documents/cdl-manual.pdf',
    ],
}

//This module includes New Hampshire-specific requirements, fees, endorsements, and office locations while maintaining the same overall structure and data types as the California example. The data has been tailored to New Hampshire's CDL regulations.