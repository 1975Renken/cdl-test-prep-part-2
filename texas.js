//Here is the complete Texas jurisdiction module following the same structure as the California example:

// seeds/jurisdictions/texas.js

module.exports = {
    code: 'TX',
    name: 'Texas', 
    type: 'us_state',
    officialInfo: {
        mainWebsite: 'https://www.dps.texas.gov/section/driver-license',
        cdlWebsite: 'https://www.dps.texas.gov/section/driver-license/commercial-driver-license',
        manualWebsite: 'https://www.dps.texas.gov/internetforms/Forms/DL-7C.pdf',
        driverChecklist: 'https://www.dps.texas.gov/section/driver-license/how-apply-texas-driver-license',
        vehicleChecklist: 'https://www.dps.texas.gov/section/driver-license/texas-commercial-motor-vehicle-driver-handbook',
        dmvPhoneNumber: '(512) 424-2600'
    },
    requirements: {
        age: 21,
        licenseLength: 5,
        renewalBefore: 1, // 1 year
        eyeExam: true,
        writtenTest: true,
        roadTest: true,  
        fees: {
            base: 60,
            endorsements: {
                tanker: 0,
                hazardousMaterials: 0,
                passengerVehicle: 0,
                schoolBus: 0  
            }
        },
        restictions: {
            interlock: false,
            daylight: false           
        }
    },
    licenseInfo: {
        idNumbers: {
            soundex: 'T200', // Texas DLN format: FDDDSSS
            stateCode: 123456789  
        },
        classes: {
            classA: {
                name: 'Class A',
                description: 'Any combination of vehicles with a GCWR of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.',
                ageMinimum: 21,
                weightLimit: Infinity,
                required: ['generalKnowledge', 'airBrakesSkills', 'combinationVehicles'],
                allowed: ['hazardousMaterials', 'doubleTriple', 'passengerVehicle', 'liquidTanker']
            },
            classB: {  
                name: 'Class B',
                description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
                ageMinimum: 21,
                weightLimit: 26001,
                required: ['generalKnowledge', 'airBrakesSkills'],
                allowed: ['hazardousMaterials', 'passengerVehicle', 'schoolBus', 'liquidTanker'] 
            },
            classC: {
                name: 'Class C',  
                description: 'Any single vehicle or combination of vehicles that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers including the driver, or is placarded for hazardous materials.',
                ageMinimum: 21,
                weightLimit: 26000,
                required: ['generalKnowledge'],
                allowed: ['hazardousMaterials', 'passengerVehicle', 'schoolBus']
            }
        }        
    },
    dmvLocations: [
        {
            name: 'Austin DPS',
            address: '6121 North Lamar Blvd, Austin, TX 78752',  
            coordinates: {
                lat: 30.3267, 
                long: -97.7184
            }
        },
        {  
            name: 'Dallas DPS',
            address: '11411 E Northwest Hwy, Dallas, TX 75218',
            coordinates: {
                lat: 32.8594,
                long: -96.6935  
            }
        },
        {
            name: 'Houston DPS',
            address: '12220 South Gessner Road, Houston, TX 77071', 
            coordinates: {
                lat: 29.6575,
                long: -95.5566
            }
        }
    ]
};