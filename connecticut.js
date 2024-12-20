//Here is the generated JavaScript module for Connecticut with the same structure as the California example but with Connecticut-specific information:

// seeds/jurisdictions/connecticut.js

module.exports = {
    code: 'CT',
    name: 'Connecticut',
    type: 'us_state', 
    officialInfo: {
        official_name: 'Connecticut Department of Motor Vehicles',
        slogan: 'Moving CT Forward',
        website: 'https://www.ct.gov/dmv/',
        contact_number: '860-263-5700',
    },
    requirements: {
        minAge: 18,
        minExperience: {
            years: 2, 
            miles: 0,
        },
        residency: true,
        citizenship: 'us',
        testRequired: {
            knowledge: true,
            skills: true,
        },
        feeRange: {
            min: 90,
            max: 130,
        },
        minClassRequired: 'D',
        requiredDocuments: ['identification', 'residency', 'social_security', 'medical_certification'],
    },
    licenseInfo: {
        classifications: [
            {
                code: 'A',
                note: 'Any combination of vehicles with a GVWR or GCWR of 26,001 lbs. or more.'
            },
            {  
                code: 'B',
                note: 'Any single vehicle with a GVWR of 26,001 lbs. or more, or any such vehicle towing a vehicle not in excess of 10,000 lbs. GVWR.'
            },
            {
                code: 'C', 
                note: 'Any single vehicle less than 26,001 lbs. GVWR, or any such vehicle towing a vehicle not in excess of 10,000 lbs. GVWR.',
            },
        ],
        endorsements: [
            {
                code: 'P',
                name: 'Passenger Transport',
                requirements: 'Knowledge and skills testing for endorsement, background check, no DUIs in past 10 years.',
            },
            {
                code: 'S',
                name: 'School Bus',
                requirements: 'Knowledge and skills testing for endorsement, background check, no DUIs in past 10 years.',  
            },
            {
                code: 'T', 
                name: 'Doubles/Triples',
                requirements: 'Knowledge testing for endorsement.',
            },
            {
                code: 'N',
                name: 'Tank Vehicles',
                requirements: 'Knowledge testing for endorsement.',  
            },
            {
                code: 'H',
                name: 'Hazardous Materials',  
                requirements: 'Knowledge testing for endorsement, background check, fingerprinting.',
            },
        ],
    },
    locations: [
        {
            name: 'Bridgeport Branch Office',  
            address: '95 Sylvan Avenue, Bridgeport, CT 06608',
            geo: {
                lat: 41.1929,
                lng: -73.1950,
            },
        },
        {
            name: 'Danbury Branch Office',
            address: '2 Lee Mac Avenue, Danbury, CT 06810', 
            geo: {
                lat: 41.4148,
                lng: -73.4707,  
            },
        },
        {
            name: 'Hamden Branch Office',
            address: '1985 State Street, Hamden, CT 06517',
            geo: { 
                lat: 41.3611,
                lng: -72.9091,
            },
        },
    ],
}