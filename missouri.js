// seeds/jurisdictions/missouri.js

module.exports = {
    code: 'MO',
    name: 'Missouri',
    type: 'us_state',
    officialInfo: {
        agencyName: 'Missouri Department of Revenue',
        agencyAbbreviation: 'DOR',
        websiteUrl: 'https://dor.mo.gov/drivers/',
        phoneNumbers: [
            {
                type: 'general',
                number: '573-751-4600',
            },
            {
                type: 'cdl',
                number: '573-751-2730',
            },
        ],
        mailingAddress: {
            po_box: 'P.O. Box 200',
            city: 'Jefferson City',
            state: 'MO',
            zip: '65105-0200',
        },
    },
    requirements: {
        age: 18,
        licenseExperienceMonths: 0,
        cleanRecord: {
            suspensions: {
                monthsPrior: 24,
                allowed: 0,
            },
            revocations: {
                monthsPrior: 120,
                allowed: 0,
            },
        },
        physicalExam: true,
        knowledgeTest: true,
        skillsTest: true,
    },
    licenseInfo: {
        issuingAgency: 'Missouri Department of Revenue',
        website: 'https://dor.mo.gov/drivers/commercial/',
        phoneNumber: '573-751-2730',
        validityPeriodYears: 6,
        fees: {
            class_a: 41,
            class_b: 41,
            class_c: 26,
            endorsements: {
                h: 13,
                n: 13,
                p: 13,
                s: 13,
                t: 13,
                x: 13,
            },
        },
        classTypes: {
            class_a: 'Combination Vehicles (GCWR of 26,001 or more pounds)',
            class_b: 'Heavy Straight Vehicles (GVWR of 26,001 or more pounds)',
            class_c: 'Small Vehicles (GVWR of less than 26,001 pounds)',
        },
        endorsements: {
            h: 'Hazardous Materials',
            n: 'Tank Vehicles',
            p: 'Passengers',
            s: 'School Bus',
            t: 'Double/Triple Trailers',
            x: 'Tank Vehicle and Hazardous Materials',
        },
    },
    testing: {
        knowledgeExamFee: 25,
        skillsTestFee: 100,
        knowledgeTestLocations: [
            {
                address: '2634 NE Independence Ave',
                city: 'Lee\'s Summit',
                state: 'MO',
                zip: '64064',
                appointmentRequired: true,
                coordinates: {
                    latitude: 38.994076,
                    longitude: -94.392822,
                },
            },
            {
                address: '1500 Southridge Drive',
                city: 'Jefferson City',
                state: 'MO',
                zip: '65109',
                appointmentRequired: true,
                coordinates: {
                    latitude: 38.570237,
                    longitude: -92.237520,
                },
            },
        ],
        skillsTestLocations: [
            {
                address: '5310 S Limit Ave',
                city: 'Sedalia',
                state: 'MO',
                zip: '65301',
                appointmentRequired: true,
                coordinates: {
                    latitude: 38.678259,
                    longitude: -93.281747,
                },
            },
            {
                address: '2302 Southway Drive',
                city: 'Kennett',
                state: 'MO',
                zip: '63857',
                appointmentRequired: true,
                coordinates: {
                    latitude: 36.238503,
                    longitude: -90.063019,
                },
            },
        ],
    },
    manuals: {
        cdlManual: {
            url: 'https://dor.mo.gov/forms/CDL_Manual.pdf',
            revision_date: '2021-05-15',
        },
    },
    schoolBus: {
        requirements: {
            minAge: 21,
            licenseExperience: {
                yearsCdl: 0,
                yearsCdlBusOrTruck: 0,
                monthsSchoolBus: 0,
            },
            backgroundCheck: true,
            physicalExam: true,
            driverTraining: true,
        },
        disqualifications: {
            felonies: true,
            substanceAbuse: true,
            trafficViolations: {
                majorOffenses: true,
                seriousOffenses: {
                    withinMonths: 36,
                },
            },
        },
        licenseInfo: {
            endorsementNeeded: 's',
            licenseValidityPeriodYears: 6,
        },
    },
};