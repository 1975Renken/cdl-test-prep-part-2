//Here is the complete JavaScript module for Kansas with the same structure as the California example but with Kansas-specific data:

// seeds/jurisdictions/kansas.js
            
module.exports = {
    code: 'KS',
    name: 'Kansas',
    type: 'us_state', 
    officialInfo: {
        website: 'https://www.ksrevenue.gov/vehicle.html',
        phoneNumbers: [
            {
                type: 'DMV General Inquiry',
                number: '785-296-3601'
            }
        ],
        socialMedia: [
            {
                platform: 'Facebook',
                url: 'https://www.facebook.com/KansasDOR/'
            },
            {
                platform:'Twitter',
                url: 'https://twitter.com/KansasDOR'
            }
        ] 
    },
    requirements: {
        age: 18,
        vision: {
            minimumAcuity: '20/40',
            allowedCorrectiveLenses: true
        },
        hasCDLTest: true
    },
    licenseInfo: {
        validity: {
            months: 60
        },
        classes: [
            {
                name: 'Class A',
                description: 'Any combination of vehicles with a gross combination weight rating (GCWR) of 26,001 pounds or more, provided the gross vehicle weight rating (GVWR) of the vehicle being towed is in excess of 10,000 pounds.',
                requires: {
                    testType: 'Knowledge and Skills',
                    endorsements: []
                }  
            },
            {  
                name: 'Class B',
                description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle with a GVWR that does not exceed 10,000 pounds.',
                requires: {
                    testType: 'Knowledge and Skills',
                    endorsements: []
                }
            },
            {
                name:'Class C', 
                description: 'Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers, including the driver, or is placarded for hazardous materials.',
                requires: {
                    testType: 'Knowledge and Skills',
                    endorsements: []
                }
            }
        ],
        endorsements: [
            {
                name: 'Passenger Transport',
                code: 'P',
                description: 'Required for operating vehicles designed to carry 16 or more people (including you, the driver).',
                requires: {
                    knowledge: true,
                    skills: true
                }
            },
            {
                name: 'Double/Triple Trailers',
                code: 'T',
                description: 'Required to pull double or triple trailers.',     
                requires: {
                    knowledge: true,
                    skills: false
                }
            },
            {
                name: 'Hazardous Materials',
                code: 'H',
                description: 'Required to haul hazardous materials as defined in Title 49, CFR, �383.5.',
                requires: {
                    knowledge: true,
                    skills: false
                }
            }
        ]
    },
    applications: [
        {
            type: 'Original CDL',
            fees: [
                {
                    name: 'Application Fee',
                    amount: 18,
                    duration: 0, 
                    notes: ''
                },
                {  
                    name: 'License Fee',
                    amount: 41,
                    duration: 4,
                    notes: 'Covers 4 years'  
                },
                {
                    name: 'Skills Test',
                    amount: 15,
                    duration: 0,
                    notes: 'If applicable'
                }
            ]
        },
        {
            type: 'CDL Renewal',
            fees: [
                {
                    name: 'Renewal Fee',
                    amount: 41,
                    duration: 4,
                    notes: 'Covers 4 years'
                }
            ]
        }  
    ],
    locations: [
        {
            name: 'Topeka Drivers License Office',
            type: 'DMV Office',
            address: {
                street: '300 SW 29th St',  
                city: 'Topeka',
                state: 'KS',
                zipCode: '66611'
            },
            phone: '785-296-3613',
            gps: {
                latitude: 39.035889,
                longitude: -95.692085
            }
        },
        {  
            name: 'Mission Drivers License Office',
            type: 'DMV Office',  
            address: {
                street: '6507 Johnson Dr',
                city: 'Mission',  
                state: 'KS',
                zipCode: '66202'   
            },
            phone: '913-432-2266',
            gps: {
                latitude: 39.023689, 
                longitude: -94.657385
            }
        },
        {
            name: 'Wichita Twin Lakes Drivers License Office', 
            type: 'DMV Office',
            address: {
                street: '1873 W 21st St N',
                city: 'Wichita',
                state: 'KS', 
                zipCode: '67203'
            },
            phone: '316-821-9443',
            gps: {  
                latitude: 37.733130,
                longitude: -97.410629
            }
        }
    ]
};

//This module contains Kansas-specific CDL information organized into the same structure as the California example. The data includes Kansas DMV website and contact info, CDL age and vision requirements, license classes and endorsements, application and renewal fees, and the locations of a few real Kansas DMV offices. The exact same property names and data types are used to maintain consistency with the California module structure.