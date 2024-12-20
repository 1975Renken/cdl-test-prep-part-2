// seeds/jurisdictions/hawaii.js

module.exports = {
    code: 'HI',
    name: 'Hawaii',
    type: 'us_state',
    officialInfo: {
        agencyName: 'Hawaii Department of Transportation',
        website: 'https://hidot.hawaii.gov/highways/library/motor-vehicle-safety-office/',
        phoneNumber: '(808) 692-7656',
    },
    requirements: {
        age: 21,
        residency: true, 
        physicalExam: true,
        eyeExam: true,
        knowledgeTest: true,
        roadTest: true,
        trainingHours: {
            classroom: 15,
            behindTheWheel: 80,
        },
    },
    licenseInfo: {
        cost: 40,
        validity: {
            time: 8,
            unit: 'y',
        },
        renewable: {
            time: 90,
            unit: 'd',
            beforeExpiration: true,
        },
    },
    locations: [
        {
            name: 'Honolulu CDL Licensing Office',
            address: '1199 Dillingham Blvd, Honolulu, HI 96817',
            latitude: 21.3256,
            longitude: -157.8705,
            phoneNumber: '(808) 768-9100',
        },
        {
            name: 'Maui CDL Licensing Office', 
            address: '70 E Kaahumanu Ave, Kahului, HI 96732',
            latitude: 20.8895,
            longitude: -156.4729,
            phoneNumber: '(808) 270-7363',
        },
    ],
    classTypes: {
        a: {
            description: 'Combination Vehicles (GCWR of 26,001 or more pounds provided the GVWR of the vehicle(s) being towed is in excess of 10,000 pounds)',
            endorsements: {
                t: {
                    label: 'Double/Triple Trailers',
                    description: 'For vehicles towing two or three trailers',
                },
                n: {
                    label: 'Tank Vehicle',
                    description: 'For vehicles designed to transport any liquid or gaseous materials within a tank or tanks having an individual rated capacity of more than 119 gallons and an aggregate rated capacity of 1,000 gallons or more',
                },
                h: {
                    label: 'Hazardous Materials',
                    description: 'To operate any size vehicle which requires hazardous materials placards',
                },
                x: {
                    label: 'Combination of Tank Vehicle and Hazardous Materials',
                    description: 'For hauling hazardous liquids or gas in tanks over 119 gallons',
                },  
            },
        },
        b: {
            description: 'Heavy Straight Vehicles (Any single vehicle with a GVWR of 26,001 or more pounds, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR)',
            endorsements: {
                p: {
                    label: 'Passenger Transport',
                    description: 'For vehicles designed to seat 16 or more passengers, including the driver',
                },
                s: {
                    label: 'School Bus',
                    description: 'For vehicles designed to carry students to and from school',
                },
            },
        },
        c: {
            description: 'Small Vehicles (Any single vehicle, or combination of vehicles, that meets neither the definition of Group A nor that of Group B as contained in this section, but that either is designed to transport 16 or more passengers including the driver, or is used in the transportation of hazardous materials)',
            endorsements: {},
        },
    },
};