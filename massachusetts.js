//Here is the generated Massachusetts module following the same structure as the California example:

// seeds/jurisdictions/massachusetts.js

module.exports = {
    code: 'MA',
    name: 'Massachusetts', 
    type: 'us_state',
    officialInfo: {
        name: 'Massachusetts Registry of Motor Vehicles',
        phone: '857-368-8000',
        website: 'https://www.mass.gov/orgs/massachusetts-registry-of-motor-vehicles'
    },
    requirements: {
        minAge: 18,
        minExperience: {
            years: 1,
            hours: 0  
        },
        maxPoints: 2,
        maxConvictions: 1,
        driversEdRequired: false,
        driversEdHours: 0
    },
    licenseInfo: {
        validity: {
            years: 5
        },
        renewalFee: 50,
        renewalMethods: ['online', 'mail', 'in-person'],
        replacementFee: 25
    },
    classes: {
        A: {
            name: 'Class A',
            description: 'Any combination of vehicles with a GVWR of 26,001 or more pounds, provided the GVWR of the vehicle(s) being towed is in excess of 10,000 pounds.',
            endorsementOptions: ['H', 'N', 'T', 'X', 'P'],
            classSpecific: {
                airBrakesAllowed: true,
                manualAllowed: true,
                roadTestRequired: true 
            },
            upgradeFrom: ['B', 'C']
        },
        B: {  
            name: 'Class B',
            description: 'Any single vehicle with a GVWR of 26,001 or more pounds, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
            endorsementOptions: ['H', 'N', 'P'],
            classSpecific: {
                airBrakesAllowed: true,
                manualAllowed: true,
                roadTestRequired: true
            },
            upgradeFrom: ['C']
        },
        C: {
            name: 'Class C',
            description: 'Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers, including the driver, or is transporting material that has been designated as hazardous under 49 U.S.C. 5103 and is required to be placarded under subpart F of 49 CFR Part 172 or is transporting any quantity of a material listed as a select agent or toxin in 42 CFR Part 73.', 
            endorsementOptions: ['H', 'N', 'P'],
            classSpecific: {
                airBrakesAllowed: false,
                manualAllowed: true,
                roadTestRequired: true  
            },
            upgradeFrom: []
        }
    },
    endorsements: {
        H: {
            name: 'Hazardous Materials',
            description: 'Required to haul hazardous materials in quantities requiring a placard.',
            classOptions: ['A', 'B', 'C'],
            additionalRequirements: {
                writtenTest: true,
                tsnApproval: true,
                backgroundCheck: true
            }
        },
        N: {
            name: 'Tank Vehicle',  
            description: 'Required for vehicles designed to transport any liquid or gaseous materials within a tank or tanks having an individual rated capacity of more than 119 gallons and an aggregate rated capacity of 1,000 gallons or more.',
            classOptions: ['A', 'B', 'C'],
            additionalRequirements: {
                writtenTest: true 
            } 
        },
        T: {  
            name: 'Double/Triple Trailers',
            description: 'Required to pull double or triple trailers.',
            classOptions: ['A'],
            additionalRequirements: {
                writtenTest: true
            }
        }, 
        P: {
            name: 'Passenger',
            description: 'Required to operate a vehicle designed to seat more than 16 persons (including the driver).',
            classOptions: ['A', 'B', 'C'],  
            additionalRequirements: {
                writtenTest: true,
                passengerEndorsementRequired: true
            } 
        },
        X: {
            name: 'Hazardous materials and tank combination',
            description: 'Allows the driver to transport hazardous materials in a tank vehicle.',
            classOptions: ['A'],
            additionalRequirements: {
                writtenTest: true,
                backgroundCheck: true,
                tsnApproval: true  
            }
        }
    },
    serviceLocations: [
        {
            name: 'Boston RMV Service Center',
            address: '630 Washington St, Boston, MA 02111',
            phone: '857-368-8000',
            coordinates: {
                lat: 42.3507838,
                lng: -71.0642301
            }
        },
        {  
            name: 'Worcester RMV Service Center',
            address: '611 Main St, Worcester, MA 01608',
            phone: '857-368-8000',  
            coordinates: {
                lat: 42.2625932,
                lng: -71.8022934
            }
        },
        {
            name: 'Springfield RMV Service Center',
            address: '165 Liberty St, Springfield, MA 01103', 
            phone: '857-368-8000',
            coordinates: {
                lat: 42.1014831, 
                lng: -72.5894387
            }
        }
    ],
    writtenTestLocations: [
        {
            name: 'Milford RMV Branch',
            address: '14 Beach St, Milford, MA 01757',
            phone: '857-368-8000'
        },
        {  
            name: 'Lawrence RMV Branch',
            address: '73 Winthrop Ave, Lawrence, MA 01843', 
            phone: '857-368-8000'
        },
        { 
            name: 'Fall River RMV Branch',
            address: '1794 North Main St, Fall River, MA 02720',
            phone: '857-368-8000'  
        }
    ],
    roadTestLocations: [
        {
            name: 'Pittsfield RMV Road Test Center',
            address: '33 Melnea Cass Blvd, Pittsfield, MA 01201',
            phone: '857-368-8000'
        },
        {
            name: 'Framingham RMV Road Test Center',
            address: '14 Concord St, Framingham, MA 01702', 
            phone: '857-368-8000' 
        },
        {
            name: 'Plymouth RMV Road Test Center', 
            address: '40 Industrial Park Rd, Plymouth, MA 02360',
            phone: '857-368-8000'
        }  
    ]
}

//This module contains Massachusetts-specific information while maintaining the same data structure and property names as the California example. The data, including requirements, fees, locations, and endorsements, has been tailored to reflect realistic details for Massachusetts' commercial driver's license program.