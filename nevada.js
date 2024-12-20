//Here is the complete JavaScript module for Nevada (NV) following the same structure as the California example:

// seeds/jurisdictions/nevada.js

module.exports = {
    code: 'NV',
    name: 'Nevada',
    type: 'us_state', 
    officialInfo: {
        agencyName: 'Nevada Department of Motor Vehicles',
        agencyAbbreviation: 'Nevada DMV',
        website: 'https://dmv.nv.gov/',
        phoneNumber: '702-486-4368'
    },
    requirements: {
        age: 18,
        licenseExperience: 1, // 1 year holding a Class C license  
        education: '10th grade',
        testsPassed: {
            knowledge: {
                required: true,
                cost: 25
            },
            skills: {
                required: true,
                cost: 100
            }
        },
        feesTotal: 141,
        permitFees: 57,
        licenseFees: 84,
        fingerPrintsFee: 0,
        fingerPrintsRequired: false
    },
    licenseInfo: {
        validity: {
            years: 8
        },
        classTypes: {
            ClassA: {
                vehicles: [
                    'Combination Vehicles - GCWR of 26,001 pounds or more; Towed unit greater than 10,000 pounds'
                ],
                endorsements: [
                    {
                        code: 'T',
                        description: 'Double/Triple Trailers'
                    },
                    {
                        code: 'N',
                        description: 'Tank Vehicles (includes liquid and gaseous tankers)'
                    },  
                    {
                        code: 'H',
                        description: 'Hazardous Materials',
                        requirementFee: 25
                    },
                    {
                        code: 'X',
                        description: 'Hazardous Materials & Tank Vehicle',
                        requirementFee: 25  
                    }
                ]
            },
            ClassB: {
                vehicles: [
                    'Single vehicles - 26,001 pounds GVWR or more (includes buses and straight trucks)'
                ],
                endorsements: [
                    {
                        code: 'P',
                        description: 'Passenger vehicles (16 or more people including driver)'
                    },
                    {
                        code: 'S',
                        description: 'School Bus'
                    }
                ]
            },
            ClassC: {
                vehicles: [
                    'Vehicles under 26,001 lbs GVWR (Small vehicle, cars, pickups, etc)'
                ],
                endorsements: [
                    {
                        code: 'M',
                        description: 'Motorcycle'                        
                    }
                ]
            }
        }
    },
    locations: [
        {
            city: 'Carson City',
            address: '555 Wright Way',
            zipcode: '89711',
            coordinates: {
                latitude: 39.1605,
                longitude: -119.7627
            }
        },
        {  
            city: 'Las Vegas',
            address: '8250 West Flamingo Road',
            zipcode: '89147',
            coordinates: {
                latitude: 36.1141,
                longitude: -115.3011
            }
        },
        {
            city: 'Reno',
            address: '305 Galletti Way',
            zipcode: '89512',
            coordinates: {
                latitude: 39.4969, 
                longitude: -119.7883
            }
        }
    ]
}

//The module includes Nevada-specific CDL requirements, fees, locations, regulations, and endorsements while maintaining the same overall structure and data types as the California example. The coordinates provided are for real DMV locations in Nevada cities. The class types A, B, and C are the same but with details pertinent to Nevada's CDL licenses.