//Here is the complete JavaScript module for Arkansas CDL information, following the same structure as the California example:

// seeds/jurisdictions/arkansas.js

module.exports = {
    code: 'AR',
    name: 'Arkansas',
    type: 'us_state',
    officialInfo: {
        agencyName: 'Arkansas Department of Finance and Administration',
        agencyUrl: 'https://www.dfa.arkansas.gov/driver-services',
        phoneNumber: '(501) 682-7059',
        emailAddress: 'DriverServices@dfa.arkansas.gov',
        mainOfficeAddress: '1900 W 7th St, Little Rock, AR 72201',
    },
    requirements: {
        minimumAge: 18, // 21 for non-excepted interstate commerce
        ageByClassType: {
            A: 18,
            B: 18, 
            C: 18,
        },
        residentFor: '30 days',
        holdRegularLicenseFor: '1 year',
        drivingRecord: 'Cannot have more than 1 serious traffic violation in the past 3 years',
        physicalExam: 'Required every 2 years or when medical certificate expires',
        englishProficiency: true,
    },
    licenseInfo: {
        upgradable: true,
        transferrable: true,
        renewBeforeExpires: '1 year',
        expiresAfter: '4 years',
        feesInUSD: {
            classCLicense: 40,
            permitExam: 0,
            knowledgeTest: 0,
            roadTest: 0,  
        },
        classTypes: {
            A: {
                maxGVWR: Infinity,
                maxGCWR: 26001,
                trailerMaxGVWR: 10001
            },
            B: {
                maxGVWR: 26000,
                maxGCWR: 26000,
                trailerMaxGVWR: 10000
            },
            C: {
                maxGVWR: 26000,
                maxGCWR: 26000,
                trailerMaxGVWR: Infinity 
            }
        },
        endorsementTypes: {
            H: {
                name: 'Hazardous Materials',
                requiredTest: true  
            },
            N: {
                name: 'Tank Vehicle',
                requiredTest: true
            },
            P: {
                name: 'Passenger Transport',
                requiredTest: true  
            },
            S: {
                name: 'School Bus',
                requiredTest: true
            },
            T: {
                name: 'Double/Triple Trailers',
                requiredTest: true
            },
            X: {
                name: 'Hazardous Materials and Tank Combination',
                requiredTest: true
            }
        }
    },
    knowledge: {
        testFormat: 'computerized',
        numQuestions: 50,
        passingScore: 80
    },
    roadTest: {
        allowsInterpreter: true,
        vehicle: 'Must provide own vehicle appropriate for license class',
        skills: [
            'Vehicle inspection',
            'Basic control',
            'On-road driving'
        ],  
    },
    locations: [
        {
            name: 'Little Rock Driver Services',
            address: '1900 W 7th St, Little Rock, AR 72201',
            lat: 34.746481,
            lng: -92.290280 
        },
        {
            name: 'Fayetteville Driver Services',
            address: '3420 W Wedington Dr, Fayetteville, AR 72704',
            lat: 36.079140, 
            lng: -94.206871
        },
        {
            name: 'Jonesboro Driver Services',
            address: '2143 Fair Park Blvd, Jonesboro, AR 72401',
            lat: 35.814049,
            lng: -90.690186
        }
    ],
    importantLinks: [
        {
            name: 'Arkansas CDL Manual',
            url: 'https://www.dfa.arkansas.gov/images/uploads/driverServicesOffice/cdlManual.pdf'  
        },
        {
            name: 'CDL Forms and Applications',
            url: 'https://www.dfa.arkansas.gov/driver-services/license-information/commercial-drivers-license-cdl/cdl-forms-and-applications'
        },
        {
            name: 'CDL FAQs',
            url: 'https://www.dfa.arkansas.gov/driver-services/license-information/commercial-drivers-license-cdl/cdl-faqs'
        }
    ]
}