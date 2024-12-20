//Here is the generated JavaScript module for Louisiana with the same structure as the California example but Louisiana-specific data:

// seeds/jurisdictions/louisiana.js

module.exports = {
    code: 'LA',
    name: 'Louisiana',
    type: 'us_state', 
    officialInfo: {
        overviewUrl: 'https://www.la.gov/pages/omv/commercial_dl/cdl_overview.aspx',
        manualUrl: 'https://www.la.gov/PublicSafety/omv/DL/cdl/CDLManual.pdf',
        feeUrl: 'https://la.gov/PublicSafety/omv/DL/cdl/cdl_fees.aspx',
        applicationUrl: 'https://la.gov/PublicSafety/omv/forms/DPSMV2211.pdf',  
    },
    requirements: {
        age: 18,
        eligibility: [
            'Valid Louisiana drivers license',
            'Proof of identity, social security, and residency',
            'Pass knowledge and skills tests',
            'Pass vision and medical exams',
            'Pay applicable fees',
        ],
    },
    licenseInfo: {
        cost: 41,
        validity: 'Maximum 6 years', 
        renewalOptions: ['online', 'by mail', 'in person'],
    },
    classTypes: [
        {
            name: 'Class A',
            description: [
                'Gross vehicle weight rating (GVWR) over 26,000 lbs',
                'Towed vehicle(s) over 10,000 lbs GVWR',
            ],            
        },
        {
            name: 'Class B',
            description: [
                'Single vehicle over 26,000 lbs GVWR', 
                'Towed vehicle(s) under 10,000 lbs GVWR',
            ],
        },
        {
            name: 'Class C',
            description: [
                'Vehicles under 26,000 lbs GVWR',
                'Vehicles designed to transport 16+ passengers or hazardous materials',
            ],  
        },
    ],
    endorsements: [
        {
            code: 'H',
            name: 'Hazardous Materials',
            description: 'Required to transport hazardous materials.',
            requirements: [
                'At least 21 years old',
                'Acceptable driving record and criminal history',  
                'Pass hazmat knowledge test',
            ],
        },
        {
            code: 'N',
            name: 'Tank Vehicle',
            description: 'Required for tank vehicles over 1,000 gallons designed for transporting liquids or gases.',
            requirements: [
                'Pass tank vehicle knowledge test',
            ],          
        },  
        {
            code: 'P',
            name: 'Passenger Transport', 
            description: 'Required to transport 16+ passengers including the driver.',
            requirements: [
                'Pass passenger transport knowledge and skills tests',
            ],
        }, 
        {
            code: 'X', 
            name: 'Combination of Tank Vehicle and Hazardous Materials',
            description: 'Required for tank vehicles transporting hazardous materials.',
            requirements: [
                'Hazardous Materials (H) and Tank Vehicle (N) endorsement requirements',
            ],
        },
    ],
    locations: [
        {
            name: 'Baton Rouge Office',
            address: '7701 Independence Blvd, Baton Rouge, LA 70806',
            phone: '(225) 925-6146',
            coordinates: { 
                latitude: 30.4507462,
                longitude: -91.1773853,
            },
        },
        {
            name: 'New Orleans Office',
            address: '100 Veterans Blvd, New Orleans, LA 70124',  
            phone: '(504) 483-1870',
            coordinates: {
                latitude: 30.0107194,
                longitude: -90.1529627, 
            },
        },
        {
            name: 'Shreveport Office', 
            address: '9310 Normandie Dr, Shreveport, LA 71118',
            phone: '(318) 676-7028',
            coordinates: {
                latitude: 32.4269058, 
                longitude: -93.8251376,
            },
        },
    ],
};