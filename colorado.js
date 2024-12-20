//Here is the complete JavaScript module for Colorado CDL information, following the same structure as the California example:

// seeds/jurisdictions/colorado.js

module.exports = {
    code: 'CO',
    name: 'Colorado', 
    type: 'us_state',
    officialInfo: {
        driverServicesWebsite: 'https://dmv.colorado.gov/driver-services',
        driverLicenseWebsite: 'https://dmv.colorado.gov/licenses',
        primaryPhoneNumber: '303-205-5600',
        phoneHours: 'Monday - Friday, 8:00 AM - 5:00 PM MT'
    },
    requirements: {
        minAge: 18,
        minAgeHazmat: 21,
        minAgePassenger: 21,
        minAgeSchoolBus: 21,
        commercialDriversLicense: true,
        hazmatBackgroundCheck: true,
        drivingRecord: 'No suspensions, revocations, or cancellations in any state within the past 3 years',
        drivingExperience: 'At least 2 years driving experience recommended',
        medicalCertificate: true,
        medicalCertificateUrl: 'https://dmv.colorado.gov/medical-certification-requirement',
        dot_medical_card: true,
        skillsTest: true,
        writtenKnowledgeTest: true
    },
    licenseInfo: {
        classes: [
            {
                name: 'Class A',
                description: 'Combination vehicles with a gross combination weight rating of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.',
                endorsements: ['H', 'N', 'P', 'S', 'T', 'X']
            },
            {   
                name: 'Class B',
                description: 'Single vehicles with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
                endorsements: ['H', 'N', 'P', 'S', 'T', 'X']
            },
            {
                name: 'Class C',
                description: 'Vehicles with a GVWR less than 26,001 pounds intended to transport 16 or more passengers including the driver, or used in the transportation of hazardous materials requiring placarding.',
                endorsements: ['H', 'N', 'P', 'S', 'X']
            }
        ],
        endorsements: [
            {
                code: 'H',
                name: 'Hazardous Materials',
                description: 'Required to haul hazardous materials in amounts requiring placarding'
            },
            {
                code: 'N',
                name: 'Tank Vehicles',
                description: 'Required for operating tankertruck vehicles'  
            },
            {
                code: 'P',
                name: 'Passenger Transport',
                description: 'Required for operating vehicles carrying 16 or more passengers including the driver'
            },
            {
                code: 'S',
                name: 'School Bus',
                description: 'Required for operatingschool buses' 
            },
            {
                code: 'T',
                name: 'Doubles/Triples',
                description: 'Required for operating vehicles towing more than one trailer'
            },
            {
                code: 'X',
                name: 'Tanker & Hazmat',
                description: 'Combined endorsement for Hazardous Materials and Tank Vehicles'
            }
        ] 
    },
    locations: [
        {
            name: 'Denver Central Driver License Office',
            address: '1865 W. Mississippi Ave., Denver, CO 80223',
            latitude: 39.6969,
            longitude: -105.0209,
            phoneNumber: '720-229-9676'
        },
        {
            name: 'Colorado Springs Driver License Office',
            address: '2447 N. Union Blvd., Colorado Springs, CO 80909',  
            latitude: 38.8777,
            longitude: -104.7555,
            phoneNumber: '719-594-0495'
        },
        {
            name: 'Lakewood Driver License Office',
            address: '1881 Pierce St., Lakewood, CO 80214',
            latitude: 39.7398,
            longitude: -105.1216,
            phoneNumber: '303-205-5609'
        }
    ],
    fees: {
        commericialLicense: {
            'Class A': 66.95,
            'Class B': 56.94,
            'Class C': 56.94
        },
        endorsements: {
            H: 20,
            N: 15, 
            P: 15,
            S: 15,
            T: 15,
            X: 30
        },
        knowledgeTest: 11.15,
        skillsTest: 225 
    },
    regexPatterns: {
        licenseClass: /[ABC]/,
        endorsements: /H|N|P|S|T|X/g,
        licenseNumber: /[0-9]{9}/,
        customerNumber: /[0-9]{7}/
    }
}

//This module exports an object with Colorado-specific CDL information, following the same structure as the California example. It includes the required properties with state-specific data, such as the minimum age requirements, license classes and endorsements, DMV locations with realistic Colorado coordinates, fees for licenses and tests, and regex patterns for validating license details.