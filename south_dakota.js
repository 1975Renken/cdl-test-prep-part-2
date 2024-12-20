// seeds/jurisdictions/south_dakota.js

module.exports = {
    code: 'SD',
    name: 'South Dakota',
    type: 'us_state',
    officialInfo: {
        name: 'South Dakota Department of Public Safety - Driver Licensing',
        website: 'https://dps.sd.gov/driver-licensing',
        phone: '605-773-6883',
        email: 'dpsdl@state.sd.us'
    },
    requirements: {
        minAge: 18,
        minAge18: 18,
        minAge21: 21,
        residency: 'Must be a resident of South Dakota',
        education: 'Must have a high school diploma or equivalent',
        testsPassed: 'Must pass knowledge and skills tests'
    },
    licenseInfo: {
        licenseTypes: [
            {
                name: 'Commercial Class A',
                description: 'Required for any combination of vehicles with a GCWR of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.'
            },
            {
                name: 'Commercial Class B',
                description: 'Required for any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.'
            },
            {
                name: 'Commercial Class C',
                description: 'Required for any single vehicle less than 26,001 pounds GVWR, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR, or any vehicle designed to transport 16 or more people (including driver).'
            }
        ],
        classes: [
            {
                name: 'A',
                description: 'GCWR 26,001 pounds or more and towed unit is over 10,000 pounds',
                requiredTests: ['General Knowledge', 'Air Brakes', 'Combination Vehicles'],
                fees: {
                    application: 33,
                    theory: 0,
                    road: 50,
                    licenseFee: 33
                }
            },
            {
                name: 'B',
                description: 'GVWR 26,001 pounds or more OR towing capacity not exceeding 10,000 pounds',
                requiredTests: ['General Knowledge', 'Air Brakes'],
                fees: {
                    application: 33,
                    theory: 0,
                    road: 50,
                    licenseFee: 33
                }
            },
            {
                name: 'C',
                description: 'GVWR less than 26,001 pounds and towing capacity less than 10,000 pounds',
                requiredTests: ['General Knowledge'],
                fees: {
                    application: 28,
                    theory: 0,
                    road: 50,
                    licenseFee: 28
                }
            }
        ],
        endorsements: [
            {
                code: 'H',
                name: 'Hazardous Materials',
                description: 'Required for vehicles carrying hazardous materials requiring placarding',
                requirements: [
                    'Must pass Hazardous Materials knowledge test',
                    'Must be 21 years old',
                    'Must pass background check'
                ]
            },
            {
                code: 'N',
                name: 'Tank Vehicle',
                description: 'Required for vehicles designed to transport any liquid or gaseous material within a tank',
                requirements: [
                    'Must pass Tank Vehicle knowledge test'
                ]
            },
            {
                code: 'T',
                name: 'Double/Triple Trailers',
                description: 'Required for vehicles pulling double or triple trailers',
                requirements: [
                    'Must pass Double/Triple Trailers knowledge test'
                ]
            },
            {
                code: 'P',
                name: 'Passenger',
                description: 'Required for vehicles designed to seat 16 or more people, including the driver',
                requirements: [
                    'Must pass Passenger knowledge test',
                    'Must pass Passenger skills test'
                ]
            },
            {
                code: 'S',
                name: 'School Bus',
                description: 'Required for vehicles designed to transport pre-primary, primary or secondary school students',
                requirements: [
                    'Must pass School Bus knowledge test',
                    'Must pass School Bus skills test',
                    'Must pass background check'
                ]
            },
            {
                code: 'X',
                name: 'Hazardous Materials and Tank Vehicle',
                description: 'Required for tank vehicles carrying hazardous materials',
                requirements: [
                    'Must pass Hazardous Materials knowledge test',
                    'Must pass Tank Vehicle knowledge test',
                    'Must be 21 years old',
                    'Must pass background check'
                ]
            }
        ]
    },
    locations: [
        {
            name: 'Sioux Falls Driver Exam Station',
            address: '2501 W Russell St, Sioux Falls, SD 57104',
            county: 'Minnehaha County',
            phoneNumber: '605-367-5690',
            coordinates: {
                latitude: 43.5448,
                longitude: -96.7840
            }
        },
        {
            name: 'Rapid City Driver Exam Station',
            address: '1301 Catron Blvd, Rapid City, SD 57701',
            county: 'Pennington County',
            phoneNumber: '605-394-3418',
            coordinates: {
                latitude: 44.0799,
                longitude: -103.1923
            }
        },
        {
            name: 'Aberdeen Driver Exam Station',
            address: '2729 3rd Ave SE, Aberdeen, SD 57402',
            county: 'Brown County',
            phoneNumber: '605-626-2388',
            coordinates: {
                latitude: 45.4573,
                longitude: -98.4505
            }
        }
    ]
};