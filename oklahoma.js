//Here is the complete JavaScript module for Oklahoma, following the same structure as the California example but with Oklahoma-specific information:

// seeds/jurisdictions/oklahoma.js

module.exports = {
    code: 'OK', 
    name: 'Oklahoma',
    type: 'us_state',
    officialInfo: {
        driverLicensingAgency: 'Oklahoma Department of Public Safety',
        website: 'https://oklahoma.gov/dps.html',
        phoneNumber: '405-425-2424',
    },
    requirements: {
        age: {
            permit: 15.5,
            license: 16,
            under18: {
                parentalConsent: true,
                behindWheelHours: 50,
                passengerRestrictions: {
                    months: 6,
                    exceptFamily: true
                },
                nightRestrictions: {
                    inEffect: true,
                    from: '23:00',
                    until: '05:00',
                }
            }
        },
        fees: {
            permit: 25.50,
            permitTest: 4,
            licenseTest: 4, 
            license: 38.50  
        },
        training: {
            mandatory: false,
            behindWheelHours: 0
        },
        written: {
            questions: 50,
            passingScore: 40,
            allowedAttempts: 3,
            waitAfterFailure: {
                days: 1
            }
        },
        road: {
            passingScore: 80,
            failuresWaitPeriod: {
                days: 14
            }      
        },
        vision: {
            requirements: {
                minimumAcuity: '20/40',
                minimumPeripheralVision: '70 degrees',
                restrictions: 'Must wear corrective lenses while operating vehicle if needed to achieve 20/40 acuity'
            }
        }    
    },
    licenseInfo: {
        prefix: 'TBD',
        hasPhoto: true,
        renewalCycle: {
            years: 4
        },
        classes: [{
            name: 'Class A',
            minAge: 18,
            commercialExperience: false,
            instructionPermitHoldPeriod: {
                days: 14
            },
            roadTest: true,
        },{
            name: 'Class B',
            minAge: 18,
            commercialExperience: false,
            instructionPermitHoldPeriod: {
                days: 14
            },
            roadTest: true,     
        },{
            name: 'Class C',
            minAge: 18,
            commercialExperience: false,
            instructionPermitHoldPeriod: {
                days: 14
            },    
            roadTest: true
        }],
        endorsements: [{
            code: 'P',
            name: 'Passenger Transport',
            additionalRequirements: 'Must pass passenger transport knowledge test.'
        },{
            code: 'S',
            name: 'School Bus',  
            additionalRequirements: 'Must pass school bus knowledge test and specialized road test. Background check required.'
        },{
            code: 'H',
            name: 'Hazardous Materials',
            additionalRequirements: 'Must pass HazMat knowledge test. TSA background check and fingerprinting required.'
        },{
            code: 'N',
            name: 'Tank Vehicles',
            additionalRequirements: 'Must pass tank vehicle knowledge test.'
        },{
            code: 'T',
            name: 'Double/Triple Trailers',
            additionalRequirements: 'Must pass doubles/triples knowledge test.' 
        },{  
            code: 'X',
            name: 'Combination of Tank Vehicle and Hazardous Materials'
        }]
    },
    locations: [{
        name: 'Oklahoma City DPS',
        address: '3600 N Martin Luther King Ave, Oklahoma City, OK 73111',  
        latitude: 35.503841,
        longitude: -97.470595
    },{
        name: 'Tulsa CDL Office', 
        address: '7130 S Lewis Ave Suite 1100, Tulsa, OK 74136',
        latitude: 36.063175, 
        longitude: -95.953804
    },{
        name: 'Lawton DPS',
        address: '705 NW Flower Mound Rd, Lawton, OK 73507',
        latitude: 34.601802,
        longitude: -98.431232
    }]
};

//This module includes Oklahoma-specific information for CDL requirements, fees, license classes, endorsements, and DMV locations while maintaining the same data structure as the California example. The data is realistic but not necessarily entirely accurate, as it was generated based on general knowledge of Oklahoma's CDL system.