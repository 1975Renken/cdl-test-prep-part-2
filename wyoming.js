//Here is the complete Wyoming module following the same structure as the California example with Wyoming-specific data:

// seeds/jurisdictions/wyoming.js

module.exports = {
    code: 'WY',
    name: 'Wyoming',
    type: 'us_state',
    officialInfo: {
        abbreviation: 'WY',
        website: 'http://www.dot.state.wy.us/home/driver_license_records.html',
        phoneNumber: '307-777-4800',
        driverManual: 'http://www.dot.state.wy.us/files/live/sites/wydot/files/shared/Driver_Services/Manuals/WY_ComDriverLicManual.pdf',
    },
    requirements: {
        age: 18,
        vision: 'Each eye with/without correction: 20/40',
        knowledgeTest: 'General knowledge test required',
        skillsTest: 'Skills test (pre-trip inspection, basic control, on-road) required',
        medicalCard: 'Valid Medical Examiner Certificate required',
    },
    licenseInfo: {
        residency: 'Must be Wyoming resident',
        previousLicense: 'Must possess valid non-commercial license',
        renewalOptions: 'In person, by mail or online',
        renewalPeriod: '4 years',
        gracePeriod: '30 days',
    },
    testing: {
        knowledgeTest: {
            totalQuestions: 50,
            correctToPass: 40,
            fee: 0,
        },
        skillsTest: {
            fee: 40,
            minimumWaitTimeToRetake: '1 day on first failure, 7 days on subsequent failures',
        }
    },
    schools: {
        required: false,
        providedBy: 'Commercial Driver Training Schools, Community Colleges', 
    },
    endorsements: [
        {
            code: 'P',
            description: 'Passenger transport',
            requirements: {
                age: 21,
                testRequired: true,
                additionalFees: 10,
            },            
        },
        {
            code: 'H',
            description: 'Hazardous materials',
            requirements: {
                age: 21,
                testRequired: true,
                backgroundCheck: true, 
                additionalFees: 25,
            },
        },
        {
            code: 'N',
            description: 'Tank vehicle',
            requirements: {
                testRequired: true,
                additionalFees: 10,                
            },
        },
        {
            code: 'T',
            description: 'Double/Triple trailers',
            requirements: {
                testRequired: true,
                additionalFees: 10,
            },
        },
        {
            code: 'X',
            description: 'Tanker & Hazardous materials combination',
            requirements: {
                age: 21,
                testRequired: true,
                backgroundCheck: true,
                additionalFees: 25, 
            },
        }
    ],
    fees: {
        baseLicenseFee: 40,
        knowledgeTestFee: 0,
        skillsTestFee: 40,
        endorsementFees: {
            P: 10,
            H: 25,
            N: 10,
            T: 10,    
        },
    },
    dmvLocations: [
        {
            name: 'Cheyenne Driver Services',
            address: '5300 Bishop Blvd, Cheyenne, WY 82009',
            phone: '307-777-4800',
            coordinates: { 
                latitude: 41.158970,
                longitude: -104.785730,
            },
            hoursOfOperation: 'Mon-Fri 7:45am-4:30pm',
        },
        {
            name: 'Casper Driver Services',
            address: '2001 Westwood Rd, Casper, WY 82601', 
            phone: '307-473-3900',
            coordinates: {
                latitude: 42.846200, 
                longitude: -106.348930,
            },
            hoursOfOperation: 'Mon-Fri 7:45am-4:30pm',
        },
        {
            name: 'Rock Springs Driver Services',
            address: '1900 Foothill Blvd, Rock Springs, WY 82901',
            phone: '307-352-4005',
            coordinates: {
                latitude: 41.579210, 
                longitude: -109.245600,
            },
            hoursOfOperation: 'Mon-Fri 8:00am-4:00pm',
        },
    ],
    classTypes: [
        {
            code: 'A',
            description: 'Combination of vehicles with a Gross Combination Weight Rating (GCWR) over 26,000lbs provided the Gross Vehicle Weight Rating (GVWR) of the vehicle being towed is in excess of 10,000lbs',
        }, 
        {
            code: 'B',
            description: 'Any single vehicle with a GVWR over 26,000lbs, or any such vehicle towing a vehicle which does not have a GVWR in excess of 10,000lbs', 
        },
        {
            code: 'C',
            description: 'Any single vehicle less than 26,001lbs GVWR, or any such vehicle towing a vehicle not in excess of 10,000lbs GVWR',
        },
    ],
}