//Here is the generated JavaScript module for West Virginia with the same structure as the California example but using West Virginia-specific information:

// seeds/jurisdictions/west virginia.js
            
module.exports = {
    code: 'WV',
    name: 'West Virginia',
    type: 'us_state',
    officialInfo: {
        name: 'West Virginia Division of Motor Vehicles',
        website: 'https://transportation.wv.gov/DMV/',
        phone: '(304) 558-3900',
        mainOffice: {
            name: 'Kanawha City DMV',
            address: {
                street: '5707 MacCorkle Ave SE',
                city: 'Charleston',
                state: 'WV',
                zip: '25304'
            }
        }
    },
    requirements: {
        age: 18,
        licenseExperience: {
            type: 'class_d',
            duration: {
                years: 2
            }
        },
        training: {
            required: true,
            types: ['commercial','public_driving_school']
        },
        tests: {
            written: {
                required: true,
                availableLanguages: ['english']
            },
            road: {
                required: true
            },
            physical: {
                required: true
            }
        }
    },
    licenseInfo: {
        classes: {
            a: {
                minAge: 18,
                tests: ['physical','written','road'],
                trainingHours: 180,
                personalVehiclePermitted: false,
                vehicleSize: 'Any combination of vehicles with a GCWR of 26,001 or more pounds provided the GVWR of the vehicle(s) being towed is in excess of 10,000 pounds.'
            },
            b: {
                minAge: 18,
                tests: ['physical','written','road'],
                trainingHours: 120,
                personalVehiclePermitted: false,
                vehicleSize: 'Any single vehicle with a GVWR of 26,001 or more pounds or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.'
            },
            c: {
                minAge: 18,
                tests: ['physical','written','road'],
                trainingHours: 60,
                personalVehiclePermitted: false,  
                vehicleSize: 'Any single vehicle less than 26,001 pounds GVWR or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.'
            }
        },
        endorsements: {
            h: {
                name: 'Hazardous Materials',
                requiresTankerEndorsement: false,
                tests: ['written'],
                feeAmount: 10
            },
            n: {
                name: 'Tank Vehicle',
                requiresHazmatEndorsement: false,
                tests: [],
                feeAmount: 10
            },
            p: {
                name: 'Passenger',
                minAge: 21,
                requiresClassBCommercialLicense: true,  
                tests: ['written','road'],
                feeAmount: 10
            },
            s: {
                name: 'School Bus',
                minAge: 21,
                requiresPassengerEndorsement: true,
                tests: ['written','road'],
                feeAmount: 10
            },
            t: {
                name: 'Double/Triple Trailers',
                requiresClassACommercialLicense: true,
                tests: [],
                feeAmount: 10  
            },
            x: {
                name: 'Combination of Tank Vehicle and Hazardous Materials',
                requiresTankerEndorsement: true,
                requiresHazmatEndorsement: true,
                tests: ['written'],
                feeAmount: 10
            }  
        },
        fees: {
            application: 10,
            renewal: {
                amount: 20,
                frequency: {years: 8}
            },
            dupes: 10
        },
        validity: {
            standard: {
                years: 8
            }
        }
    },
    locations: [
        { 
            name: 'Kanawha City DMV',
            address: {
                street: '5707 MacCorkle Ave SE',
                city: 'Charleston',
                state: 'WV',
                zip: '25304'
            },
            coordinates: {
                latitude: 38.34713765161597,  
                longitude: -81.61957910356707
            }
        },
        {
            name: 'Beckley DMV',
            address: {
                street: '107 Pinecrest Dr',
                city: 'Beckley',  
                state: 'WV',
                zip: '25801'
            },
            coordinates: {
                latitude: 37.78292501974143,
                longitude: -81.1920480631165
            }  
        },
        {
            name: 'Winfield DMV',
            address: {
                street: '116 Liberty Square',
                city: 'Winfield',
                state: 'WV', 
                zip: '25213'
            },
            coordinates: {
                latitude: 38.5367389126351,
                longitude: -81.89424242966815  
            }
        }
    ]
};