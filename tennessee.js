//Here's the generated Tennessee-specific JavaScript module:

// seeds/jurisdictions/tennessee.js

module.exports = {
    code: 'TN',
    name: 'Tennessee',
    type: 'us_state',
    officialInfo: {
        webSite: 'https://www.tn.gov/safety/driver-services/commercial.html',
        phone: '(866) 849-3548',
        mainOffice: {
            streetAddress: '1150 Foster Avenue',
            city: 'Nashville',
            state: 'TN',
            zip: '37243',
            coordinates: {
                latitude: 36.1532,
                longitude: -86.7845
            }
        }
    },
    requirements: {
        age: 18,
        proofOfIdentity: true,
        proofOfResidence: true,
        ssnOrTin: true,
        medicalCertificate: true,
        completedApplication: true,
        passKnowledgeTest: true,
        passDrivingTest: true,
        payFees: true
    },
    licenseInfo: {
        validity: {
            years: 5
        },
        cost: {
            application: 10,
            licenseIssuance: 41
        }
    },
    dmvLocations: [
        {
            city: 'Nashville',
            coordinates: {
                latitude: 36.1627,
                longitude: -86.7816
            }
        },
        {
            city: 'Memphis',
            coordinates: {
                latitude: 35.1495,
                longitude: -90.0490
            }
        },
        {
            city: 'Knoxville',
            coordinates: {
                latitude: 35.9606,
                longitude: -83.9207
            }
        }
    ],
    classTypes: {
        ClassA: {
            definition: 'Any combination of vehicles with a GCWR of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.',
            endorsements: ['H', 'N', 'T', 'X']
        },
        ClassB: {
            definition: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
            endorsements: ['H', 'N', 'T', 'X']
        },
        ClassC: {
            definition: 'Any single vehicle less than 26,001 pounds GVWR, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
            endorsements: ['H', 'N', 'T', 'X']
        }
    },
    endorsements: {
        H: {
            name: 'Hazardous Materials',
            requirements: {
                trainingCourse: true,
                tsa_background_check: true,
                additionalTest: true
            }
        },
        N: {
            name: 'Tank Vehicle',
            requirements: {
                trainingCourse: true,
                additionalTest: true
            }
        },
        T: {
            name: 'Double/Triple Trailers',
            requirements: {
                trainingCourse: true,
                additionalTest: true
            }
        },
        X: {
            name: 'Combination of Tank Vehicle and Hazardous Materials',
            requirements: {
                trainingCourse: true,
                tsa_background_check: true,
                additionalTest: true
            }
        }
    }
};