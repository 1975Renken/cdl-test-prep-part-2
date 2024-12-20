//Here is the generated Alabama module following the same structure as the California example:

// seeds/jurisdictions/alabama.js

module.exports = {
    code: 'AL',
    name: 'Alabama',
    type: 'us_state', 
    officialInfo: {
        agencyName: 'Alabama Law Enforcement Agency (ALEA) Driver License Division',
        website: 'https://www.alea.gov/dps/driver-license',
        phoneNumber: '334-242-4400',
    },
    requirements: {
        minAge: 18,
        minYearsLicensed: 1,
        medicalCertificate: true,
        testRequired: {
            general: true,
            air: true,
            doubles: true,
            tankers: true,
            hazmat: true,
            passenger: true,
            school: true
        },
        trainingRequired: false,
    },
    licenseInfo: {
        validity: {
            standard: {
                time: 5, 
                unit: 'y'
            },
            underAge: {
                time: 1,
                unit: 'y'  
            }
        },
        classTypes: [
            {
                name: 'Class A',
                description: 'Combination vehicles with a gross vehicle weight rating (GVWR) over 26,000 pounds. Towed vehicle(s) has a GVWR over 10,000 pounds.',
            },
            {
                name: 'Class B',
                description: 'Single vehicles with a GVWR over 26,000 pounds. Can tow a vehicle under 10,000 pounds GVWR.',
            },
            {
                name: 'Class C',
                description: 'Vehicles with a GVWR under 26,001 pounds. This class includes vehicles designed to transport 16 or more passengers, including the driver, or used in the transportation of hazardous materials requiring placards.', 
            }
        ],
        endorsements: [
            {
                code: 'H',
                name: 'Hazardous Materials',
                description: 'Required for transporting hazardous materials requiring placards.'
            },
            {   
                code: 'N',
                name: 'Tank',
                description: 'Required for vehicles designed to haul liquids or gaseous materials in bulk packaging.'
            },
            {
                code: 'P',
                name: 'Passenger',
                description: 'Required for vehicles designed to carry 16 or more people, including the driver.'  
            },
            {
                code: 'S',
                name: 'School Bus',
                description: 'Required for vehicles designed to carry 11 or more people, including the driver, and transport students back and forth to school.'
            },
            {   
                code: 'T',
                name: 'Doubles/Triples', 
                description: 'Required for vehicles pulling double or triple trailers.'
            },
            {
                code: 'X',  
                name: 'Tank/Hazmat Combo',
                description: 'Tank endorsement combined with Hazardous Materials endorsement.'
            }
        ]
    },
    locations: [
        {
            name: 'Montgomery Driver License Office',
            address: '1040 Coliseum Boulevard Montgomery, Alabama 36110',
            latitude: 32.361389,
            longitude: -86.251944  
        },
        {
            name: 'Birmingham Driver License Office',
            address: '908 Bankhead Highway Birmingham, Alabama 35204', 
            latitude: 33.526667,
            longitude: -86.841111
        },
        {
            name: 'Mobile Driver License Office',   
            address: '3400 Demetropolis Road Mobile, Alabama 36693',
            latitude: 30.637778,
            longitude: -88.162778
        }
    ],
    fees: {
        knowledge: 25,
        permit: 36.25,
        licensing: 66.25,
        endorsements: {
            H: 25,
            N: 10,
            P: 25, 
            S: 20,
            T: 10,
            X: 35
        }
    }
};