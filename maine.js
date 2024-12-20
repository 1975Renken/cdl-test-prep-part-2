//Here is a complete JavaScript module for Maine CDL jurisdiction data, following the same structure as the California example:

// seeds/jurisdictions/maine.js

module.exports = {
    code: 'ME',
    name: 'Maine',
    type: 'us_state',
    officialInfo: {
        website: 'https://www.maine.gov/sos/bmv/commercial/',
        phoneNumber: '207-624-9000',
        emailAddress: 'sos.office@maine.gov',
        faxNumber: '207-624-9013',
        postalAddress: {
            street: 'Maine Bureau of Motor Vehicles, CDL Division',
            city: 'Augusta',
            state: 'ME',
            country: 'US',
            zipCode: '04333-0029'
        },
        physicalAddress: {
            street: '101 Hospital Street',
            city: 'Augusta',
            state: 'ME',
            country: 'US',
            zipCode: '04330'
        }
    },
    requirements: {
        minAge: 21,
        licenseExpiration: '6 years',
        renewal: {
            available: '-6 months',
            expires: '+1 year',
            fee: 34
        },
        permitCost: 35,
        permitRenewal: 'Valid for 180 days',
        testWaitPeriod: '1 day',
        mustHaveMELicense: true,
        trainingHours: 'None',
        trainingHoursWith: null,
        writtenKnowledgeTest: true,
        roadTest: true,
        medicalCertificate: true,
        dotMedicalExaminer: true,
        selfCertification: true
    },
    licenseInfo: {
        classCodes: {
            classA: 'Combination (tractor trailer)',
            classB: 'Heavy straight (eg, bus, box truck)',
            classC: 'Small vehicle transporting hazardous materials or passenger vehicle designed to seat 16 or more'
        },
        endorsements: [
            {
                code: 'H',
                name: 'Hazardous materials',
                requiresTankerEndorsement: true,
                requiresKnowledgeTest: true
            },
            {
                code: 'N',
                name: 'Tank vehicles',
                requiresKnowledgeTest: true
            },
            {
                code: 'P',
                name: 'Passenger transport',
                requiresKnowledgeTest: true,
                requiresRoadTest: true
            },
            {
                code: 'S',
                name: 'School bus',
                requiresKnowledgeTest: true,
                requiresRoadTest: true,
                minAge: 21
            },
            {
                code: 'T',
                name: 'Double/Triple trailers',
                requiresKnowledgeTest: true
            },
            {
                code: 'X',
                name: 'Hazardous materials and tank combination',
                requiresKnowledgeTest: true
            }
        ]
    },
    locations: [
        {
            name: 'Main Office - Augusta',
            lat: 44.326958,
            lng: -69.769354
        },
        {
            name: 'Bangor Branch Office',
            lat: 44.807796,
            lng: -68.816731
        },
        {   
            name: 'Caribou Mobile Unit',
            lat: 46.861806, 
            lng: -68.007027
        },
        {
            name: 'Lewiston Branch Office',
            lat: 44.084351,
            lng: -70.183371
        },
        {
            name: 'Portland Branch Office', 
            lat: 43.678594,
            lng: -70.317017
        },
        {
            name: 'Springvale Mobile Unit',
            lat: 43.470733,
            lng: -70.802453
        }
    ]
};