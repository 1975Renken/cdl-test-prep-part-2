//Here is the complete JavaScript module for Michigan with realistic data following the same structure as the California example:

// seeds/jurisdictions/michigan.js
            
module.exports = {
    code: 'MI',
    name: 'Michigan',
    type: 'us_state', 
    officialInfo: {
        driverLicenseAgency: 'Michigan Department of State',
        website: 'https://www.michigan.gov/sos',
        phoneNumber: '888-767-6424',
        addressLine1: 'Department of State',
        addressLine2: '430 W. Allegan St.',
        city: 'Lansing',
        state: 'MI', 
        zipCode: '48918'
    },
    requirements: {
        minAge: 18,
        minExperience: {years: 1, details: 'Must have held a valid driver license for at least 1 year'},
        eligibleAge: 18,
        licenseLength: {value: 4, units: 'years'},
        renewalLength: {value: 4, units: 'years'},
    },
    licenseInfo: {
        A: {
            knowledgeTest: {required: true, passScore: 80},
            skillsTest: {required: true, appointmentRequired: true},
            fees: {
                knowledge: 25,
                skills: 50,
                licensing: 35
            }
        },
        B: { 
            knowledgeTest: {required: true, passScore: 80},
            skillsTest: {required: true, appointmentRequired: true},  
            fees: {
                knowledge: 25,
                skills: 50, 
                licensing: 35
            }
        },
        C: {
            knowledgeTest: {required: true, passScore: 80},
            skillsTest: {required: true, appointmentRequired: true},
            fees: {
                knowledge: 25,  
                skills: 50,
                licensing: 35 
            }  
        }
    },
    endorsements: {
        H: {
            name: 'Hazardous Materials',
            description: 'Required to transport hazardous materials.',
            requirements: {
                test: true,
                additionalFee: 10,
                tsa: {
                    required: true,
                    feeRequired: true, 
                    amount: 86.50               
                }
            }            
        },
        N: {
            name: 'Tank Vehicle',
            description: 'Required to transport liquids or liquified gases in a permanently mounted cargo tank.',
            requirements: {test: true, additionalFee: 10}
        },
        P: {
            name: 'Passenger Transport',
            description: 'Required to transport 16 or more passengers including the driver.',  
            requirements: {
                test: true,
                additionalFee: 10,
                medicalCertificate: true,
                ageMinimum: 21
            }
        },
        S: {
            name: 'School Bus',
            description: 'Required to transport pre-primary, primary, or secondary school students from home to school.',
            requirements: {
                test: true, 
                additionalFee: 10,
                medicalCertificate: true,
                ageMinimum: 21
            }
        },
        T: {
            name: 'Doubles/Triples',
            description: 'Required to pull double or triple trailers.',
            requirements: {test: true, additionalFee: 10}  
        },
        X: {
            name: 'Tank Vehicle and Hazardous Materials',
            description: 'Combined N and H endorsements.',
            requirements: {
                test: true,
                additionalFee: 20,
                tsa: {
                    required: true,
                    feeRequired: true,
                    amount: 86.50
                }
            }
        }
    },
    locations: [
        {
            locationId: '01-MI',
            address: '3315 E. Michigan Ave.', 
            city: 'Lansing',
            state: 'MI',
            zipCode: '48912',  
            phone: '517-316-6394',
            geo: {lat: 42.7378, lng: -84.5263}
        },
        {  
            locationId: '02-MI',
            address: '3401 Plymouth Rd.',
            city: 'Ann Arbor',
            state: 'MI', 
            zipCode: '48105',
            phone: '734-663-1677',
            geo: {lat: 42.3046, lng: -83.7058}
        },
        {
            locationId: '03-MI',  
            address: '8158 Executive Ct.',
            city: 'Lansing',
            state: 'MI',
            zipCode: '48917',
            phone: '517-316-6600', 
            geo: {lat: 42.7888, lng: -84.6462}
        }
    ]
};

//This JavaScript module contains Michigan-specific data for CDL requirements, fees, endorsements, and DMV locations, while maintaining the same structure and properties as the California example. The data is realistic but not necessarily exact, as it is intended for seeding a database.