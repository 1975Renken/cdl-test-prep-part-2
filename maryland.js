//Here is the complete JavaScript module for Maryland (MD) following the same structure as the California example:

// seeds/jurisdictions/maryland.js

module.exports = {
    code: 'MD',
    name: 'Maryland',
    type: 'us_state', 
    officialInfo: {
        driverLicenseAgency: 'Maryland Motor Vehicle Administration (MVA)',
        website: 'http://www.mva.maryland.gov/drivers/apply/commercial.htm',
        phoneNumbers: [
            {
                type: 'general_info',
                number: '410-768-7000'
            }
        ],
        locations: [
            {
                name: 'Glen Burnie Office',
                openDays: 'Mon-Fri',
                openHours: '8:30am-4:30pm',
                address: '6601 Ritchie Highway, N.E., Glen Burnie, MD 21062',
                latitude: 39.191944, 
                longitude: -76.623056
            },
            {
                name: 'Bel Air Office',
                openDays: 'Mon-Fri',
                openHours: '8:30am-4:30pm',
                address: '501 West MacPhail Road, Bel Air, MD 21014',
                latitude: 39.534722,
                longitude: -76.341667 
            }
        ]
    },
    requirements: {
        age: 18,
        residency: true,
        driversLicense: true,
        driversLicenseVersion: 'Any',
        driversLicenseYears: 1,
        selfCertifyMedical: true, 
        cdlKnowledgeTest: true,
        cdlRoadTest: true
    },
    fees: {
        base: 90,
        endorsements: {
            'H': 10,
            'N': 10,
            'P': 10,
            'S': 10,
            'T': 10,
            'X': 25
        }, 
        duplication: 20,
        permits: {
            instruction: 50
        }
    },
    licenseInfo: {
        validity: 5,
        classes: {
            'A': {
                description: 'Combination vehicles with GCWR 26,001 pounds or more.',
                endorsements: [
                    'T','P','N','H','X' 
                ]
            },
            'B': {
                description: 'Single vehicles with GVWR 26,001 pounds or more.',
                endorsements: [
                    'P','S'
                ]
            },
            'C': {
                description: 'Single vehicles with GVWR less than 26,001 pounds, or vehicles towing trailers less than 10,000 pounds GVWR.',
                endorsements: [
                    'H','P','N'
                ]
            }
        }
    },
    endorsements: {
        'H': {
            name: 'Hazardous Materials',
            requirements: [
                'At least 21 years old',
                'Additional knowledge test'
            ]
        },
        'N': {
            name: 'Tank',
            requirements: [
                'Additional knowledge test'
            ]
        },
        'P': {
            name: 'Passenger',
            requirements: [
                'Additional knowledge and skills tests' 
            ]
        },
        'S': {
            name: 'School Bus',  
            requirements: [
                'At least 21 years old',
                'Additional knowledge and skills tests',
                'Criminal background check'
            ]
        },
        'T': {
            name: 'Double/Triple Trailers',
            requirements: [
                'Additional knowledge test'
            ]
        },
        'X': {
            name: 'Tanker & Hazardous Materials',
            requirements: [
                'At least 21 years old', 
                'Additional knowledge test'
            ] 
        }
    }
}