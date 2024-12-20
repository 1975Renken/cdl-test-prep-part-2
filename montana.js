// seeds/jurisdictions/montana.js

module.exports = {
    code: 'MT',
    name: 'Montana',
    type: 'us_state',
    officialInfo: {
        name: 'Montana Department of Justice - Motor Vehicle Division',
        website: 'https://dojmt.gov/driving/',
        phoneNumber: '(406) 444-3661',
    },
    requirements: {
        age: 18,
        residency: true,
        driversLicense: true,
        driversTest: true,
        cdlKnowledgeTest: true,
        cdlRoadTest: true,
        medicalCard: true,
    },
    licenseInfo: {
        validity: {
            months: 60,
        },
        classTypes: {
            a: {
                name: 'Class A (Combination Vehicle)',
                description:
                    'Any combination of vehicles with a gross combination weight rating (GCWR) of 26,001 pounds or more, provided the towed vehicle(s) has a gross vehicle weight rating (GVWR) of 10,001 pounds or more.',
            },
            b: {
                name: 'Class B (Heavy Straight Vehicle)',
                description:
                    'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle with a GVWR not in excess of 10,000 pounds.',
            },
            c: {
                name: 'Class C (Small Vehicle)',
                description:
                    'Any single vehicle or combination of vehicles that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers including the driver or is placarded for hazardous materials.',
            },
        },
        endorsements: {
            p: {
                name: 'Passenger',
                description: 'Required for operating vehicles designed to carry 16 or more passengers (including the driver).',
            },
            n: {
                name: 'Tank Vehicle',
                description: 'Required for operating vehicles designed to transport any liquid or gaseous materials in permanent or temporarily mounted tanks rated at 119 gallons or more.',
            },
            h: {
                name: 'Hazardous Materials',
                description: 'Required for operating vehicles transporting hazardous materials that require placarding.',
            },
            x: {
                name: 'Tanker and Hazardous Materials',
                description: 'Combination of Tank Vehicle and Hazardous Materials endorsements.',
            },
            s: {
                name: 'School Bus',
                description: 'Required for operating a school bus designed to transport 16 or more passengers (including the driver).',
            },
            t: {
                name: 'Double/Triple Trailers',
                description: 'Required for operating vehicles towing more than one trailer.',
            },
        },
    },
    renewalInfo: {
        cycle: {
            years: 5,
        },
        fees: {
            regular: 41.72,
            hazmat: 86.72,
        },
        methods: ['in_person', 'online', 'by_mail'],
        extensions: {
            available: true,
            maximumMonths: 12,
        },
    },
    locations: [
        {
            name: 'Billings Driver Exam Station',
            address: '1001 Southgate Drive, Billings, MT 59101',
            coordinates: {
                latitude: 45.7832856,
                longitude: -108.5006904,
            },
        },
        {
            name: 'Great Falls Driver Exam Station',
            address: '1300 Benton Avenue, Helena, MT 59601',
            coordinates: {
                latitude: 47.4941836,
                longitude: -111.2833449,
            },
        },
        {
            name: 'Missoula Driver Exam Station',
            address: '2681 Palmer Street, Missoula, MT 59808',
            coordinates: {
                latitude: 46.8721875,
                longitude: -114.0190799,
            },
        },
    ],
    reciprocity: [
        {
            jurisdiction: 'ID',
            description: 'Montana accepts valid CDLs from Idaho.',
        },
        {
            jurisdiction: 'ND',
            description: 'Montana accepts valid CDLs from North Dakota.',
        },
        {
            jurisdiction: 'WY',
            description: 'Montana accepts valid CDLs from Wyoming.',
        },
    ],
};