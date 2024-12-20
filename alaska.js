// seeds/jurisdictions/alaska.js

module.exports = {
    code: 'AK',
    name: 'Alaska',
    type: 'us_state',
    officialInfo: {
        agencyName: 'Alaska Department of Administration',
        agencyWebsite: 'https://doa.alaska.gov/dmv/',
        physicalAddress: '1300 W Benson Blvd, Anchorage, AK 99503',
        mailingAddress: '1300 W Benson Blvd, Anchorage, AK 99503',
        phoneNumbers: {
            mainNumber: '(855) 269-5551',
            tty: '(907) 269-5190',
        },
        serviceHours: 'Mon - Fri, 8:00 AM - 5:00 PM',
    },
    requirements: {
        age: 19,
        driverLicense: true,
        cdlPermit: true,
        driverTest: true,
        medicalCertificate: true,
        safetyTest: {
            required: true,
            fee: 25,
        },
        vehicleTest: true,
        customRequirements: [
            'None'
        ],
    },
    licenseInfo: {
        validity: {
            standard: '1 year',
            temporaryVisitors: 'No special duration',
        },
        classTypes: {
            classA: {
                name: 'Class A',
                requirements: [
                    'Any combination of vehicles with a GVWR of 26,001 lbs or more, provided the vehicle being towed has a GVWR of 10,000 lbs or more',
                    'Valid for operating vehicles in Classes B and C',
                ],
            },
            classB: {
                name: 'Class B',
                requirements: [
                    'Single vehicles with a GVWR of 26,001 lbs or more',
                    'May tow vehicles with a GVWR of less than 10,000 lbs',
                    'Valid for operating Class C vehicles',
                ],
            },
            classC: {
                name: 'Class C',
                requirements: [
                    'Vehicles with a GVWR of less than 26,001 lbs',
                    'May tow vehicles with a GVWR of less than 10,000 lbs',
                ],
            },
        },
        endorsements: {
            t: {
                name: 'Double/Triple Trailers',
                requirements: [
                    'Knowledge test',
                ],
            },
            p: {
                name: 'Passenger',
                requirements: [
                    'Knowledge and skills tests',
                ],
            },
            n: {
                name: 'Tank vehicle',
                requirements: [
                    'Knowledge test',
                ],
            },
            h: {
                name: 'Hazardous materials',
                requirements: [
                    'Knowledge test',
                    'Background check',
                ],
            },
            x: {
                name: 'Combination of tank vehicle and hazardous materials',
                requirements: [
                    'Knowledge test',
                    'Background check',
                ],
            },
            s: {
                name: 'School Bus',
                requirements: [
                    'Knowledge and skills tests',
                    'Background check',
                ],
            },
        },
    },   
    locations: [
        {
            name: 'Anchorage DMV',
            address: '1300 W Benson Blvd, Anchorage, AK 99503',
            latitude: 61.1931345,
            longitude: -149.9089293,
            phones: ['(855) 269-5551'],
            openHours: 'Mon - Fri, 8:00 AM - 5:00 PM',
        },
        {
            name: 'Fairbanks DMV',
            address: '1979 Peger Rd, Fairbanks, AK 99709',
            latitude: 64.8247369,
            longitude: -147.7769237,
            phones: ['(855) 269-5551'],
            openHours: 'Mon - Fri, 8:00 AM - 5:00 PM',
        },
        {
            name: 'Juneau DMV',
            address: '450 Whittier St, Juneau, AK 99801',
            latitude: 58.3003495,
            longitude: -134.4089472,
            phones: ['(855) 269-5551'],
            openHours: 'Mon - Fri, 8:00 AM - 5:00 PM',
        },
    ],
    fees: {
        knowledgeTest: 25,
        skillsTest: {
            classA: 100,
            classB: 75,
            classC: 50,
        },
        licenseIssue: {
            original: 120,
            renewal: 100,
            transfer: 120,
        },
        endorsements: {
            t: 15,
            p: 15,
            n: 15,
            h: 25,
            x: 40,
            s: 15,
        },
    },
};