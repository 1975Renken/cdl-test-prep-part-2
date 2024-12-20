//Here is the generated Florida jurisdiction module following the same structure as the California example:

// seeds/jurisdictions/florida.js
            
module.exports = {
    code: 'FL',
    name: 'Florida',
    type: 'us_state', 
    officialInfo: {
        overviewUrl: 'https://www.flhsmv.gov/driver-licenses-id-cards/commercial-motor-vehicle-drivers/',
        manualsUrl: 'https://www.flhsmv.gov/resources/handbooks-manuals/',
        faqUrl: 'https://www.flhsmv.gov/driver-licenses-id-cards/commercial-motor-vehicle-drivers/commercial-driver-license/cdl-faqs/',
        codesUrl: 'https://www.flhsmv.gov/driver-licenses-id-cards/commercial-motor-vehicle-drivers/commercial-driver-license/cdl-disqualifications-restrictions/',
        transportationDepartment: 'Florida Department of Transportation',
        drivingDepartment: 'Florida Highway Safety and Motor Vehicles'
    },
    requirements: {
        age: 18,
        driverLicense: true,
        prevCDL: false,
        driverTest: true,
        lawTests: [
            {name: 'General Knowledge', questions: 50, passingScore: 40},
            {name: 'Air Brakes (if applicable)', questions: 25, passingScore: 20},
            {name: 'Combination Vehicles (if applicable)', questions: 20, passingScore: 16}
        ],
        roadTest: true,
        roadTestVehicles: ['Class A vehicle', 'Class B vehicle'],
        medicalExam: true,
        medicalExamCert: '2 yr',
        drugTest: true,
        trainingHours: 0,
        trainingBehindWheel: 0,
        trainingOnRoad: 0,
        classroomHours: 0,
        classAHours: 0,
        classBHours: 0,
        backgroundCheck: false
    },
    licenseInfo: {
        typesOffered: ['Class A', 'Class B', 'Class C'],
        typeDefinitions: {
            classA: 'Any combination of vehicles with a gross combined weight rating (GCWR) of 26,001 pounds or more, providing the gross vehicle weight rating (GVWR) of the vehicle being towed is in excess of 10,000 pounds.',
            classB: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
            classC: 'Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers, including the driver, or is placarded for hazardous materials.'
        },
        endorsements: [
            {
                code: 'H',
                name: 'Hazardous Materials',
                description: 'Required to haul hazardous materials in amounts requiring placarding.',
                requirements: [
                    {name: 'Hazmat Knowledge Test', questions: 30, passingScore: 24},
                    {name: 'TSA Threat Assessment'}
                ] 
            },
            {
                code: 'N',
                name: 'Tank Vehicle',
                description: 'Required to haul any liquid or gaseous material in a tank or tanks having an individual rated capacity of more than 119 gallons and an aggregate rated capacity of 1,000 gallons or more that is either permanently or temporarily attached to the vehicle or chassis.',
                requirements: [
                    {name: 'Tank Vehicle Knowledge Test', questions: 20, passingScore: 16}
                ]
            },
            {
                code: 'P',
                name: 'Passenger Transport',
                description: 'Required to operate a passenger vehicle.',
                requirements: [
                    {name: 'Passenger Transport Knowledge Test', questions: 20, passingScore: 16},
                    {name: 'Passenger Transport Skills Test'}
                ]                
            },
            {
                code: 'S',
                name: 'School Bus',
                description: 'Required to operate a school bus.',
                requirements: [
                    {name: 'School Bus Knowledge Test', questions: 20, passingScore: 16},
                    {name: 'School Bus Skills Test'}
                ]
            },
            {
                code: 'T',
                name: 'Double/Triple Trailers',
                description: 'Required to pull double or triple trailers.',
                requirements: [
                    {name: 'Double/Triple Trailer Knowledge Test', questions: 20, passingScore: 16}
                ]
            },
            {  
                code: 'X',
                name: 'Hazardous Materials and Tank Combination',
                description: 'Required to haul hazardous materials and liquids in a tank vehicle.',
                requirements: [
                    {name: 'Hazmat Knowledge Test', questions: 30, passingScore: 24},
                    {name: 'Tank Vehicle Knowledge Test', questions: 20, passingScore: 16}, 
                    {name: 'TSA Threat Assessment'}
                ]
            }
        ],
        fees: {
            application: 50,
            classCPermit: {
                new: 30, 
                renew: 20
            },   
            classCLicense: {
                new: 60,
                renew: 45
            },
            classBPermit: {
                new: 35,
                renew: 25  
            },
            classBLicense: {
                new: 75,
                renew: 55
            },
            classAPermit: {
                new: 40,
                renew: 30
            },
            classALicense: {
                new: 90,
                renew: 65
            },
            endorsementPermits: {
                H: 20,
                N: 10,
                P: 15,
                S: 15,
                T: 10,
                X: 20  
            },
            endorsementLicenses: {  
                H: 30,
                N: 15,
                P: 20, 
                S: 20,
                T: 15,
                X: 30
            },
        },
        expiration: '8 yr',
        emergencyContact: true
    },
    locations: [
        {
            type: 'DMV Office',
            address: '2900 Apalachee Parkway, Tallahassee, FL 32399',
            phone: '850-617-2000',
            latitude: 30.4370917,
            longitude: -84.2280816 
        },
        {
            type: 'DMV Office',
            address: '7439 Wilson Blvd, Jacksonville, FL 32210',  
            phone: '904-381-6920',
            latitude: 30.2854013,
            longitude: -81.7255543
        },
        {
            type: 'DMV Office', 
            address: '3708-3 W. Tennessee Street, Tallahassee, FL 32304',
            phone: '850-488-0940',
            latitude: 30.4489021,
            longitude: -84.3421729
        },
        {
            type: 'DMV Office',
            address: '2886 Cleveland Avenue, Fort Myers, FL 33901', 
            phone: '239-278-7219',
            latitude: 26.6203936,
            longitude: -81.8695823
        }
    ]
};