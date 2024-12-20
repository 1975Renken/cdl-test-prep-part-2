//Here is the generated JavaScript module for New Jersey with the same structure as the California example but using New Jersey-specific CDL information:

// seeds/jurisdictions/new_jersey.js

module.exports = {
    code: 'NJ',
    name: 'New Jersey',
    type: 'us_state', 
    officialInfo: {
        name: 'New Jersey Motor Vehicle Commission',
        website: 'https://www.state.nj.us/mvc/',
        phoneNumber: '(609) 292-6500'
    },
    requirements: {
        age: 18,
        licenseExperience: '1 year',
        residency: true,
        proofOfIdentity: true,
        proofOfResidency: true,
        ssnOrTaxIdRequired: true,
        completedApplication: true,
        feePayment: true,
        medicalSelfCertification: true,
        dot_medical_card: true,
        completedWrittenTest: true,
        passedVisionTest: true,
        passedDrivingTest: true,
        canProvideCdlVehicle: true
    },
    licenseInfo: {
        writtenTestFee: 35,
        drivingTestFee: 50,
        cdlTemporaryPermitFee: 125,
        cdlLicenseFee: 42,
        cdlLicenseIssueFee: 35, 
        upgradeFee: 18,
        transferFee: 10,
        hazmatFee: 125,
        schoolBusPermitFee: 19,
        drivingTestFirstAttempt: 0,
        drivingTestSubsequentAttempt: 50,
        temporaryPermitExpiration: '180 days',
        cdlLicenseExpiration: '4 years',
        applicationMethods: ['in_person'],
        paymentMethods: ['credit_card', 'check', 'money_order'],
        requiredDocuments: [
            'Completed Application',
            '6 Points of ID Verification', 
            'Proof of Citizenship/Legal Presence',
            'Proof of NJ Residency',
            'Proof of Social Security Number',
            'Medical Examiner\'s Certificate',
            'Self-Certification Form'
        ]
    },
    classes: {
        A: {
            description: 'Combination Vehicle over 26,001 lbs. GVWR',
            ageRequirement: 21, 
            prerequisites: []
        },
        B: {
            description: 'Single vehicle over 26,001 lbs.',
            ageRequirement: 21,
            prerequisites: []
        },
        C: {
            description: 'Vehicle under 26,001 lbs. GVWR',
            ageRequirement: 21,
            prerequisites: []
        }
    },
    endorsements: {
        H: {
            code: 'H',
            name: 'Hazardous Materials',
            description: 'To haul hazardous materials.',
            requirements: [
                'At least 21 years old',
                'Proof of citizenship or lawful permanent residence', 
                'Valid CDL',
                'Hazmat Knowledge Test',
                'TSA Background Check'
            ]
        },
        N: {
            code: 'N', 
            name: 'Tank Vehicle',
            description: 'To haul liquids or liquefied gases in bulk.',
            requirements: [
                'Valid CDL',
                'Tank Vehicle Knowledge Test'
            ]
        },
        P: {
            code: 'P',
            name: 'Passenger Transport',
            description: 'To operate a vehicle designed to seat more than 16 passengers including the driver.', 
            requirements: [
                'Valid CDL',
                'Passenger Transport Knowledge Test',
                'Passenger Skills Test'
            ]
        },
        S: {
            code: 'S',
            name: 'School Bus',
            description: 'To operate a school bus.',
            requirements: [
                'At least 21 years old',
                'Valid CDL with Passenger Endorsement',
                'Pass School Bus Knowledge Test',
                'Pass School Bus Skills Test',
                'Pass background check',
                'Not have more than 3 moving violations'
            ]   
        },
        T: {
            code: 'T',
            name: 'Doubles/Triples',
            description: 'To pull double or triple trailers.',
            requirements: [
                'Valid CDL',
                'Doubles/Triples Knowledge Test'
            ]
        },
        X: {
            code: 'X',
            name: 'Tanker & Hazardous Materials',
            description: 'To haul hazardous liquids or liquefied gases in bulk.',
            requirements: [
                'At least 21 years old',
                'Proof of citizenship or lawful permanent residence',
                'Valid CDL',
                'Hazmat Knowledge Test', 
                'Tank Vehicle Knowledge Test',
                'TSA Background Check'
            ]
        }
    },
    locations: [
        {
            name: 'Newark Regional Office',
            address: '228 Frelinghuysen Ave, Newark NJ 07114',
            latitude: 40.735657,
            longitude: -74.174209
        },
        {
            name: 'Trenton Regional Office', 
            address: '120 S Stockton St, Trenton NJ 08666',
            latitude: 40.220457,
            longitude: -74.759717
        },
        {
            name: 'West Deptford Regional Office',
            address: '215 Crown Point Rd, Thorofare NJ 08086', 
            latitude: 39.838931,
            longitude: -75.180305
        },
        {
            name: 'Eatontown Regional Office',
            address: '109 Route 36, Eatontown NJ 07724',
            latitude: 40.296236, 
            longitude: -74.061805
        },
        {
            name: 'Wayne Regional Office',
            address: '481 Route 46 West, Wayne NJ 07470',  
            latitude: 40.892978,
            longitude: -74.246826
        }
    ]
}