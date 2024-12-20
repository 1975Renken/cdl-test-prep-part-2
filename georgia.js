//Here is the complete Georgia module following the same structure as the California example with Georgia-specific CDL information:

// seeds/jurisdictions/georgia.js

module.exports = {
    code: 'GA',
    name: 'Georgia',
    type: 'us_state',
    officialInfo: {
        mainWebsite: 'https://dds.georgia.gov',
        cdlWebsite: 'https://dds.georgia.gov/commercial-drivers-license',
        manualWebsite: 'https://dds.georgia.gov/commercial-drivers-manual',
        feeWebsite: 'https://dds.georgia.gov/commercial-license-fees',
        phoneNumber: '(678) 413-8400',
    },
    requirements: {
        age: 18,
        licenseIssuedFor: 5, 
        renewBeforeExpiration: 60,
        minimumVision: 0.6,
        visionUnit: 'metric',
        minimumWaiting: {
            afterRevokedLicense: 365,
            afterSuspension: 30,
        },
    },
    licenseInfo: {
        cost: {
            class_a: 48,
            class_b: 42,
            class_c: 32,
        },
        testLocations: [
            {
                location: 'Atlanta DPS',
                address: '1605 Donald Lee Hollowell Pkwy NW, Atlanta, GA 30318', 
                phone: '(404) 624-7700',
                coordinates: {
                    latitude: 33.787078,
                    longitude: -84.424473, 
                },
            },
            {
                location: 'Savannah DPS',
                address: '1117 Eisenhower Dr #2, Savannah, GA 31406',
                phone: '(912) 921-2300',
                coordinates: {
                    latitude: 32.025675,
                    longitude: -81.107044,
                },
            },
        ],
        endorsements: {
            p: {
                name: 'Passenger Transport',
                cost: 18,
                requirements: [
                    'Written Knowledge Test',
                    'Passenger Endorsement Knowledge Test',
                ],
            },
            s: {
                name: 'School Bus',
                cost: 17,
                requirements: [
                    'Passenger (P) Endorsement',
                    'Written Knowledge Test',
                    'School Bus Endorsement Knowledge Test',
                ],
            }, 
            h: {
                name: 'Hazardous Materials',
                cost: 20,
                requirements: [
                    'Written Knowledge Test',
                    'TSA Threat Assessment',
                ],
            },
            n: {
                name: 'Tankers',
                cost: 15,
                requirements: [
                    'Written Knowledge Test',
                ],
            },
            t: {
                name: 'Doubles/Triples',
                cost: 15,
                requirements: [
                    'Written Knowledge Test',
                ], 
            },
            x: {
                name: 'Tanker and Hazardous Materials Combination',
                cost: 0,
                requirements: [
                    'Tanker (N) Endorsement',
                    'Hazardous Materials (H) Endorsement',
                ],
            },  
        },
        classes: {
            a: {
                name: 'Class A',
                description: 'Combination vehicle with a GVWR of 26,001 pounds or more, provided the towed vehicle is heavier than 10,000 pounds.',
                cost: 48, 
            },
            b: {
                name: 'Class B',
                description: 'Single vehicle with a GVWR of 26,001 pounds or more, or towing another vehicle not heavier than 10,000 pounds.',
                cost: 42,
            },
            c: {
                name: 'Class C',
                description: 'Single vehicle with a GVWR less than 26,001 pounds, or towing another vehicle less than 10,000 pounds.',
                cost: 32,
            },
        }, 
    },
};

//This includes all the key components from the California example adapted with Georgia-specific CDL information, including requirements, fees, test locations, endorsements, and license classes. The data is realistic but fictional to fit the structure provided. Let me know if you would like me to modify anything!