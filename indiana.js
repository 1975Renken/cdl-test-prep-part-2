//Here is a complete JavaScript module for Indiana (IN) following the same structure as the California example you provided:

// seeds/jurisdictions/indiana.js

module.exports = {
    code: 'IN', 
    name: 'Indiana',
    type: 'us_state',
    officialInfo: {
        name: 'Indiana Bureau of Motor Vehicles', 
        website: 'https://www.in.gov/bmv/',
        phoneNumber: '888-692-6841',
        emailAddress: 'bmvcomments@bmv.in.gov',
        mainOfficeAddress: '100 N. Senate Ave., Room N440, Indianapolis, IN 46204'
    },
    requirements: {
        cdlExperienceRequired: true,
        cdlExemptions: [
            'Active duty military with military CDL',
            'Farmers operating within 150 mile radius of farm'
        ],
        minimumAge: 18,  
        oldLicenseRequired: false,
        physicalExamRequired: true,
        residencyRequired: true,
    },
    licenseInfo: {
        cost: {
            base: 35,
            endorsements: {
                hazMat: 10,
                tankVehicle: 10, 
                doubleTriple: 10,
                passengerTransport: 10,
                schoolBus: 10                  
            }
        },
        validity: {
            standard: 6, // years
            veteranInState: 6,
            veteranOutOfState: 6, 
            underAge21: 3
        },
        classTypes: [
            {
                name: 'Class A',
                description: 'Any combination of vehicles with a gross vehicle weight rating (GVWR) of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.',
                endorsements: ['H','N','T','P','S','X']
            },
            {    
                name: 'Class B',
                description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
                endorsements: ['H','N','P','S']
            },
            {
                name: 'Class C', 
                description: 'Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers, including the driver, or is placarded for hazardous materials.', 
                endorsements: ['H','N','P','S']  
            }
        ],
        endorsements: [
            {code: 'H', name: 'Hazardous Materials'},
            {code: 'N', name: 'Tank Vehicle'},  
            {code: 'T', name: 'Double/Triple Trailers'},
            {code: 'P', name: 'Passenger Transport'},
            {code: 'S', name: 'School Bus'}, 
            {code: 'X', name: 'Combination of Tank Vehicle and Hazardous Materials'}
        ]
    },
    locations: [
        {
            name: 'Indianapolis License Branch', 
            address: '3640 S East St, Indianapolis, IN 46227',
            lat: 39.7193,
            long: -86.1386 
        },
        {
            name: 'Fort Wayne License Branch',
            address: '3717-3799 E Washington Blvd, Fort Wayne, IN 46803', 
            lat: 41.0792,
            long: -85.1125
        },
        {  
            name: 'South Bend License Branch',
            address: '623 S St Joseph St, South Bend, IN 46601',
            lat: 41.6748, 
            long: -86.2520
        }
    ]
}

//This module contains Indiana-specific information for CDL licenses, following the same structure as the California example. It includes the Indiana BMV's official information, CDL requirements, license classes and endorsements with their associated costs and validity periods, and a few sample BMV locations in Indiana with realistic coordinates.