//Here is a complete JavaScript module for Illinois CDL information following the same structure as the California example:

// seeds/jurisdictions/illinois.js
            
module.exports = {
    code: 'IL',
    name: 'Illinois',
    type: 'us_state',
    capital: 'Springfield',
    officialInfo: {
        drivingManual: 'https://www.cyberdriveillinois.com/publications/pdf_publications/dsd_cdl10.pdf',
        organizations: [
            {
                name: 'Illinois Secretary of State',
                website: 'https://www.cyberdriveillinois.com/'
            }  
        ]
    },
    requirements: {
        age: 18,
        education: 'high school diploma or equivalent',
        training: 'complete CDL training course',
        testType: 'knowledge and skills tests',
        fee: 60,
        medicalCertificate: true,
    },
    licenseInfo: {
        validity: {
            time: 5,
            unit: 'years'  
        },
        cost: {
            base: 60
        }
    },
    locations: [
        {
            city: 'Chicago',
            address: '5401 N Elston Ave, Chicago, IL 60630',
            coordinates: {
                latitude: 41.9745,
                longitude: -87.7479
            }
        },
        {
            city: 'Springfield',
            address: '2701 S Dirksen Pkwy, Springfield, IL 62723',
            coordinates: {
                latitude: 39.7721,
                longitude: -89.6488  
            }
        },
        {
            city: 'Rockford',
            address: '3720 E State St, Rockford, IL 61108',
            coordinates: {
                latitude: 42.2568,
                longitude: -88.9897
            }
        }
    ],
    classes: [
        {
            name: 'Class A',
            description: 'Any combination of vehicles with a Gross Vehicle Weight Rating (GVWR) of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.',
            requirements: {
                age: 18,
                education: 'high school diploma or equivalent',
                training: 'complete CDL Class A training course',
                testType: 'knowledge and skills tests',
            }
        },
        {   
            name: 'Class B',
            description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle with a GVWR not in excess of 10,000 pounds.',
            requirements: {
                age: 18,
                education: 'high school diploma or equivalent',
                training: 'complete CDL Class B training course', 
                testType: 'knowledge and skills tests',
            }
        },
        {
            name: 'Class C',
            description: 'Any single vehicle with a GVWR less than 26,001 pounds, or any such vehicle towing a vehicle with a GVWR not in excess of 10,000 pounds comprising: Vehicles designed to transport 16 or more passengers, including the driver, and Vehicles used in the transportation of hazardous materials.',
            requirements: {
                age: 18,
                education: 'high school diploma or equivalent',
                training: 'complete CDL Class C training course',
                testType: 'knowledge and skills tests',    
            }
        }
    ],
    endorsements: [
        {
            code: 'H',
            name: 'Hazardous Materials',
            description: 'Required to haul hazardous materials as defined by U.S. Department of Transportation regulations.'
        },
        {   
            code: 'N',
            name: 'Tank Vehicle',
            description: 'Required to haul liquids or gaseous materials in a tank or tanks having an individual rated capacity of more than 119 gallons and an aggregate rated capacity of 1,000 gallons or more that is either permanently or temporarily attached to the vehicle or chassis.'
        },
        {
            code: 'P',
            name: 'Passenger',
            description: 'Required to operate vehicles designed to seat 16 or more people, including the driver.'
        },
        {
            code: 'S',
            name: 'School Bus', 
            description: 'Required to operate a school bus. Includes a requirement for a school bus endorsement knowledge test in addition to a passenger endorsement knowledge test and a driving skills test in a school bus.'
        },
        {
            code: 'T',
            name: 'Double/Triple Trailers',
            description:  'Required to pull double or triple trailers.'
        },
        {  
            code: 'X',  
            name: 'Tank Vehicle/Hazardous Materials',
            description: 'Combination of N and H endorsements.'
        }
    ]
};