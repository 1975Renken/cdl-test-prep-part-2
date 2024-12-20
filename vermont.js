//Here is the generated Vermont jurisdiction module with the requested structure and state-specific data:

// seeds/jurisdictions/vermont.js

module.exports = {
    code: 'VT',
    name: 'Vermont',
    type: 'us_state', 
    officialInfo: {
        drivingManual: 'https://dmv.vermont.gov/documents/drivers-manual',
        cdlManual: 'https://dmv.vermont.gov/documents/commercial-driver-license-manual',
        feeInformation: 'https://dmv.vermont.gov/fees/licenses',
        applicationFormLink: 'https://dmv.vermont.gov/forms/CDL-application',
    },
    requirements: {
        age: 18,
        licenseExperience: {
            passenger: 3, // in years
            passengerExempt: true,
        },
        testWaiversAccepted: ['Skills Test', 'Knowledge Test'],
        cdlPermitHoldingPeriod: 14, // in days
        maxHoursDriving: 11, 
    },
    licenseInfo: {
        medicalCertificateRequired: true,
        medicalCertificateDuration: 24, // in months  
        licenseClasses: {
            classA: {
                description: 'Any combination of vehicles with a GVWR of 26,001 pounds or more, provided the towed unit is more than 10,000 pounds.',
                ageEligible: 18, // lowest age to be eligible for this class
                practiceHours: 25,
            },
            classB: {  
                description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing another not in excess of 10,000 pounds GVWR.',
                ageEligible: 18,
                practiceHours: 15,
            },
            classC: {
                description: 'Any single vehicle less than 26,001 pounds GVWR, or any such vehicle towing another not in excess of 10,000 pounds GVWR. This class applies to vehicles placarded for hazardous materials or designed to transport 16 or more persons including the operator.',
                ageEligible: 18,  
                practiceHours: 10,
            },
        },
        endorsements: {
            t: {
                name: 'Double/Triple Trailers',
                description: 'Required for operators pulling double or triple trailers. A Class A CDL is required to operate vehicles in this category.',
                ageEligible: 18,  
            },
            p: {
                name: 'Passenger',
                description: 'Required for operators of vehicles carrying passengers such as buses. Requires a road test in a passenger vehicle.',
                ageEligible: 18,
                licenseIssuedFor: 48, // in months
                licenseRenewPeriod: 24, // in months
            },
            h: {
                name: 'Hazardous Materials', 
                description: 'Required for operators of vehicles carrying hazardous materials. Requires a knowledge test.',
                ageEligible: 21,  
            },
        },
    },
    locations: [
        {
            name: 'Montpelier DMV',
            location: {  type: 'Point', coordinates: [-72.5754869, 44.2620258] },
            address: '120 State St, Montpelier, VT 05620',
            phone: '802-828-2000',
            hours: 'Monday-Friday 7:45am-4:30pm'
        },
        {
            name: 'Burlington DMV',
            location: {  type: 'Point', coordinates: [-73.2172229, 44.4854976] },
            address: '4 Market St, South Burlington, VT 05403',   
            phone: '802-828-2085',
            hours: 'Monday-Friday 7:45am-4:00pm'
        },
        {
            name: 'Rutland DMV',
            location: {  type: 'Point', coordinates: [-72.9797005, 43.6070115] }, 
            address: '101 State Pl, Rutland, VT 05701',
            phone: '802-828-2050', 
            hours: 'Monday-Friday 7:45am-4:00pm'
        }
    ],
    fees: {
        cdlPermit: 30, // in USD
        classCLicense: 50,
        classALicense: 75,
        classBLicense: 65,
    },
    feeWaivers: ['Military', 'Veteran'],
};