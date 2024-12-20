//Here is the complete JavaScript module for Arizona (AZ) with the requested structure and Arizona-specific information:

// seeds/jurisdictions/arizona.js

module.exports = {
    code: 'AZ',
    name: 'Arizona', 
    type: 'us_state',
    officialInfo: {
        driverLicensingAgency: 'Arizona Department of Transportation Motor Vehicle Division',
        website: 'https://azdot.gov/motor-vehicles',
        phoneNumber: '602-255-0072'  
    },
    requirements: {
        minAge: 18,
        minExperience: {
            months: 12,
            hours: 0  
        },
        requiredTests: [
            'General Knowledge',
            'Air Brakes (if applicable)',
            'Pre-Trip Vehicle Inspection',
            'Basic Vehicle Control Skills',
            'On-Road Driving'
        ],
        requiredDocuments: [
            'Proof of Identity',
            'Proof of Age', 
            'Proof of Arizona Residency',
            'Proof of Legal Presence', 
            'Social Security Card',
            'Medical Examiner Certificate'
        ],
        feesAndPayments: {
            applicationFee: 25,
            instructionPermitFee: 7,
            licenseFee: 25, 
            renewalFee: 15      
        }
    },
    licenseInfo: {
        classTypes: {
            classA: {
                description: 'Combination of vehicles with a Gross Combination Weight Rating (GCWR) over 26,000 pounds, and the Gross Vehicle Weight Rating (GVWR) of the vehicle being towed is over 10,000 pounds.',
                ageRequirement: 18
            },
            classB: {
                description: 'Single vehicle with a GVWR over 26,000 pounds, or any such vehicle towing another vehicle with a GVWR less than 10,000 pounds.',
                ageRequirement: 18  
            },
            classC: {
                description: 'Vehicles with a GVWR less than 26,001 pounds, vehicles designed to transport 16 or more passengers (including the driver), or vehicles required to be placarded for hazardous materials.',
                ageRequirement: 18
            }
        },
        endorsements: {
            H: {
                name: 'Hazardous Materials',
                description: 'Required to haul hazardous materials.'  
            },
            N: { 
                name: 'Tank Vehicle',
                description: 'Required for vehicles designed to transport any liquid or gaseous material within a tank.'
            },  
            P: {
                name: 'Passenger',
                description: 'Required to operate a vehicle designed to transport 16 or more people including the driver.'
            },
            S: {
                name: 'School Bus',  
                description: 'Required to operate a school bus designed to transport pre-primary, primary, or secondary students to/from school.'
            },
            T: {
                name: 'Doubles/Triples',
                description: 'Required to pull double or triple trailers.'
            },
            X: {
                name: 'Tanker/Hazmat Combo',
                description: 'Combination of Hazardous Materials and Tank Vehicle endorsements.'  
            }
        }
    },
    dmvLocations: [
        {
            name: 'Phoenix CDL Office',
            address: {
                street: '4123 N 7th Ave',
                city: 'Phoenix', 
                state: 'AZ',
                zipcode: '85013'  
            },
            geoLocation: {
                latitude: 33.505980,
                longitude: -112.083170
            }
        },
        {
            name: 'Tucson CDL Office', 
            address: {
                street: '3565 S Broadmont Dr',
                city: 'Tucson',
                state: 'AZ', 
                zipcode: '85713'
            },
            geoLocation: {
                latitude: 32.160570,
                longitude: -110.937640  
            }
        },
        {
            name: 'Flagstaff CDL Office',
            address: {
                street: '1851 S Milton Rd',
                city: 'Flagstaff',
                state: 'AZ',
                zipcode: '86001'
            },  
            geoLocation: {
                latitude: 35.176080, 
                longitude: -111.637070
            }
        }        
    ]
}