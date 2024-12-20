//Here is the complete JavaScript module for Oregon following the same structure as the California example with Oregon-specific CDL information:

// seeds/jurisdictions/oregon.js
            
module.exports = {
    code: 'OR',
    name: 'Oregon',
    type: 'us_state',
    officialInfo: {
        website: 'https://www.oregon.gov/odot/dmv/pages/driverid/cdl.aspx',
        phoneNumber: '503-945-5000',
        mainOfficeAddress: '1905 Lana Ave NE, Salem, OR 97314',
        reportNewHireURL: 'https://www.oregon.gov/employ/businesses/pages/report-new-hires.aspx'
    },
    requirements: {
        minAge: 18,
        testRequired: true,
        cdlPermitNeeded: true,
        cdlPermitHoldPeriodDays: 14,
        background: {
            required: true,
            drivingRecord: true,
            criminalRecord: true
        },
        minHoursTraining: 0,
        minPassingScore: 80
    },
    licenseInfo: {
        validFor: '8 years',
        fees: {
            application: 0,
            knowledgeTest: 0,
            skillsTest: 70,
            licenseIssuance: {
                A: 75.50,
                B: 75.50,
                C: 75.50
            },
            endorsements: {
                'H (Hazardous Materials)': 0,
                'N (Tank Vehicle)': 0,
                'P (Passenger)': 0,
                'S (School Bus)': 0,
                'T (Double/Triple Trailers)': 0,
                'X (Hazardous Materials & Tank Combination)': 0 
            }    
        },
        documentationNeeded: [
            'Proof of Identity (e.g. Birth Certificate, Passport)',
            'Proof of Social Security Number',
            'Proof of Oregon Residency',
            'Valid Oregon Driver License'
        ],
        medicalCertRequired: true,
        knowledgeTests: {
            general: 50,
            airBrakes: 25,
            combinations: 20,
            hazardousMaterials: 30,
            passengerTransport: 20,
            schoolBus: 20,
            tankerVehicles: 20,
            doubles: 20,
            preTrip: 30
        }    
    },
    classCodes: {
        A: {
            description: 'Any combination of vehicles with a gross combined weight rating (GCWR) of 26,001 pounds or more, provided the gross vehicle weight rating (GVWR)  of the vehicle or vehicles being towed is in excess of 10,000 pounds.',
            restrictions: ['L - No Air Brakes']
        },
        B: {
            description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
            restrictions: ['L - No Air Brakes']
        },
        C: {
            description: 'Any single vehicle or combination of vehicles that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers, including the driver, or is placarded for hazardous materials.',
            restrictions: []  
        }
    },
    endorsements: {
        H: {
            description: 'Hazardous Materials',
            requirements: {
                minAge: 21,
                testRequired: true,
                additionalForms: ['Medical Examiner Certificate']
            }
        },
        N: {
            description: 'Tank Vehicle',
            requirements: {
                minAge: 18,
                testRequired: true
            }
        },
        P: {
            description: 'Passenger Transport',
            requirements: {
                minAge: 21,
                testRequired: true
            } 
        },
        S: {
            description: 'School Bus',
            requirements: {
                minAge: 21,
                testRequired: true,
                schoolBusTraining: true
            }
        },
         T: {
            description: 'Double/Triple Trailers',
            requirements: {
                minAge: 18,
                testRequired: true,
                skillsTest: true
            }
        },
        X: {
            description: 'Hazardous Materials & Tank Combination',
            requirements: {
                minAge: 21,
                testRequired: true,
                additionalForms: ['Medical Examiner Certificate']
            }
        }
    },
    dmvLocations: [
        {
            name: 'Portland DMV',
            address: '1502 SW 6th Ave, Portland, OR 97201',
            phone: '503-299-9999',
            coordinates: {
                latitude: 45.5202471,
                longitude: -122.6741949
            }
        },
        {
            name: 'Eugene DMV',
            address: '2870 W 10th Ave, Eugene, OR 97402',  
            phone: '541-686-7855',
            coordinates: {
                latitude: 44.050238,
                longitude: -123.1404417
            }
        },
        {
            name: 'Medford DMV',
            address: '1814 Table Rock Rd, Medford, OR 97501',
            phone: '541-776-6025',
            coordinates: {
                latitude: 42.349093,
                longitude: -122.8546919  
            }
        }
    ]
}