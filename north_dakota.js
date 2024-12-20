//Here is the generated JavaScript module for North Dakota with the same structure as the California example but using North Dakota-specific information:

// seeds/jurisdictions/north_dakota.js

module.exports = {
    code: 'ND',
    name: 'North Dakota',
    type: 'us_state', 
    officialInfo: {
        overseeDepartment: 'North Dakota Department of Transportation',
        departmentAbbreviation: 'NDDOT',
        websiteUrl: 'https://www.dot.nd.gov/',
        phoneNumber: '(701) 328-2500'
    },
    requirements: {
        age: 18,
        licenseExperience: 'Minimum of 1 year non-commercial driving experience',
        completedDriversEd: true,
        completedKnowledgeExam: true,
        completedSkillsExam: true, 
        passMedicalExam: true,
        provideSocialSecurityNumber: true,
        provideLegalPresence: true
    },
    licenseInfo: {
        validityPeriod: 4, // years
        renewBy: 'expiration date of current license',
        gracePeriod: 1, // month after expiration  
        fees: {
            issuanceFee: 15.00,
            knowledgeTestFee: 5.00,
            skillsTestFee: 20.00,
            endorsementFees: {
                'H': 3.00,
                'N': 3.00,
                'P': 3.00,
                'S': 3.00,
                'T': 5.00,
                'X': 5.00
            }
        },
        classes: {
            'A': {
                description: 'Combination of vehicles with GCWR more than 26,000 lbs. Towed unit(s) over 10,000 lbs.',
                ageEligibility: 18 
            },
            'B': {
                description: 'Single vehicle more than 26,000 lbs. GVWR. May tow vehicle under 10,000 lbs. GVWR.', 
                ageEligibility: 18
            },
            'C': {
                description: 'Vehicle less than 26,001 lbs. GVWR. May tow vehicle less than 10,000 lbs. GVWR. May require endorsement.',
                ageEligibility: 18
            }
        },
        endorsements: {
            'H': {
                description: 'Hazardous materials',
                requirements: ['Knowledge exam'] 
            },
            'N': {
                description: 'Tank vehicle',
                requirements: ['Knowledge exam']
            },
            'P': {
                description: 'Passenger transport',
                requirements: ['Knowledge exam', 'Skills exam']
            },
            'S': {
                description: 'School bus',
                requirements: ['Knowledge exam', 'Skills exam'] 
            },
            'T': {
                description: 'Double/Triple trailers',
                requirements: ['Knowledge exam']
            },
            'X': {
                description: 'Combination of tank vehicle and hazardous materials',
                requirements: ['Knowledge exam']
            }
        }
    },
    locations: [
        {
            name: 'Bismarck Driver License Site',
            address: '608 East Boulevard Ave. Bismarck, ND 58505',
            latitude: 46.8083,
            longitude: -100.7837
        },
        {
            name: 'Fargo Driver License Site',  
            address: '503 38th St S, Fargo, ND 58103',
            latitude: 46.8772, 
            longitude: -96.8290
        },
        {
            name: 'Grand Forks Driver License Site',
            address: '1951 N Washington St, Grand Forks, ND 58203', 
            latitude: 47.9253,
            longitude: -97.0329
        },
        {
            name: 'Minot Driver License Site',
            address: '1414 20th Ave SW, Minot, ND 58701',
            latitude: 48.2326, 
            longitude: -101.3245
        }
    ]
};