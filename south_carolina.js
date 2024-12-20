//Here is the complete JavaScript module for South Carolina CDL information, matching the structure of the California example:

// seeds/jurisdictions/south_carolina.js

module.exports = {
    code: 'SC',
    name: 'South Carolina',
    type: 'us_state', 
    officialInfo: {
        overviewUrl: 'https://www.scdmvonline.com/Driver-Services/Commercial-Driver-License',
        manualUrl: 'https://www.scdmvonline.com/Driver-Services/Commercial-Driver-License/Commercial-Driver-License-Manual',
        faqUrl: 'https://www.scdmvonline.com/FAQ/Commercial-Driver-License',
        courtesyExamsUrl: null,
        reviewsUrl: null
    },
    requirements: {
        basicRequirements: [
            'Be at least 18 years old',
            'Pass a knowledge test',
            'Pass a vision test',
            'Provide proof of identity, social security number, and residency',
            'Have a valid South Carolina regular driver license'          
        ],
        minimumAge: 18,
        driversEdRequired: false,
        driversEdAge: null
    },
    licenseInfo: {
        costInformation: 'https://www.scdmvonline.com/Driver-Services/Fees',
        applicationFormUrl: 'https://www.scdmvonline.com/Forms', 
        instructionPermitInfo: {
            instructionPermitRequired: true,
            instructionPermitNotes: 'Must hold CLP for at least 14 days before skills test',
            holdingPeriod: 14 // 14 days
        },
        driverLicenseIssuingAgency: 'South Carolina Department of Motor Vehicles (SCDMV)',
        classTypes: [
            {
                name: 'Class A',
                description: 'Combination of vehicles with a gross combination weight rating (GCWR) of 26,001 pounds or more, provided the gross vehicle weight rating (GVWR) of the vehicle being towed is in excess of 10,000 pounds',
                commercialLearnerPermit: {
                    available: true,
                    fee: 25,
                    ageEligibility: 18
                },
                licenseProcessing: {
                    fee: 32,
                    validityPeriod: 5, // years 
                    renewable: true,
                    renewalFee: 25
                },
                requiredTests: {
                    knowledgeTest: true,
                    skillsTest: true,
                    additionalRequirements: null
                },
                endorsements: [
                    {
                        name: 'H',
                        description: 'Hazardous materials',
                        available: true,
                        requirements: [
                            'Be 21 years of age or older',
                            'Pass a knowledge test',
                            'Pass a background check'
                        ]
                    },
                    {
                        name: 'N',
                        description: 'Tank vehicles',
                        available: true,
                        requirements: [
                            'Pass a knowledge test'
                        ]   
                    },
                    {
                        name: 'P',
                        description: 'Passenger vehicles (vehicles that can transport 16 or more passengers, including the driver)',
                        available: true,
                        requirements: [
                            'Pass a knowledge and skills test',
                            'Pass an eye exam',
                            'Pass a road test in a representative vehicle'
                        ]
                    }, 
                    {
                        name: 'S',
                        description: 'School bus',
                        available: true,
                        requirements: [
                            'Be 21 years of age or older',
                            'Pass a knowledge and skills test',
                            'Pass an eye exam',
                            'Pass a road test in a school bus',
                            'Must have passenger (P) endorsement'
                        ]
                    },
                    {
                        name: 'T',
                        description: 'Double/Triple trailers',
                        available: true,
                        requirements: [
                            'Pass a knowledge test'
                        ] 
                    },
                    {
                        name: 'X',
                        description: 'Tank vehicle and hazardous materials',
                        available: true,
                        requirements: [
                            'Qualify for both hazardous materials (H) and tank vehicle (N) endorsements'  
                        ]
                    }
                ]
            },

            {
                name: 'Class B',
                description: 'Single vehicle with GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR',
                commercialLearnerPermit: {
                    available: true,
                    fee: 25,
                    ageEligibility: 18
                },
                licenseProcessing: {
                    fee: 32,
                    validityPeriod: 5, 
                    renewable: true,
                    renewalFee: 25
                },
                requiredTests: {
                    knowledgeTest: true,
                    skillsTest: true,
                    additionalRequirements: null  
                },
                endorsements: [
                    {
                        name: 'H',
                        description: 'Hazardous materials',
                        available: true,
                        requirements: [
                            'Be 21 years of age or older',
                            'Pass a knowledge test',
                            'Pass a background check'
                        ]
                    },
                    {
                        name: 'N',
                        description: 'Tank vehicles',
                        available: true,
                        requirements: [
                            'Pass a knowledge test'
                        ]
                    },
                    {
                        name: 'P',
                        description: 'Passenger vehicles (vehicles that can transport 16 or more passengers, including the driver)',
                        available: true,
                        requirements: [
                            'Pass a knowledge and skills test',
                            'Pass an eye exam',
                            'Pass a road test in a representative vehicle'  
                        ]
                    },
                    {
                        name: 'S',
                        description: 'School bus',
                        available: true,
                        requirements: [
                            'Be 21 years of age or older',
                            'Pass a knowledge and skills test', 
                            'Pass an eye exam',
                            'Pass a road test in a school bus',
                            'Must have passenger (P) endorsement'
                        ]
                    },
                    {
                        name: 'X',
                        description: 'Tank vehicle and hazardous materials',
                        available: true,
                        requirements: [
                            'Qualify for both hazardous materials (H) and tank vehicle (N) endorsements'
                        ]
                    }
                ] 
            },

            {
                name: 'Class C',
                description: 'Vehicles that do not meet the definitions of Class A or Class B, but are placarded for hazardous materials or designed to transport 16 or more passengers, including the driver',
                commercialLearnerPermit: {
                    available: true, 
                    fee: 25,
                    ageEligibility: 18
                },
                licenseProcessing: {
                    fee: 32,
                    validityPeriod: 5,
                    renewable: true,
                    renewalFee: 25  
                },
                requiredTests: {
                    knowledgeTest: true,
                    skillsTest: true,
                    additionalRequirements: null
                },
                endorsements: [
                    {
                        name: 'H',
                        description: 'Hazardous materials',
                        available: true,
                        requirements: [
                            'Be 21 years of age or older',
                            'Pass a knowledge test',
                            'Pass a background check' 
                        ]
                    },
                    {
                        name: 'P',
                        description: 'Passenger vehicles (vehicles that can transport 16 or more passengers, including the driver)',
                        available: true,
                        requirements: [
                            'Pass a knowledge and skills test',
                            'Pass an eye exam',
                            'Pass a road test in a representative vehicle'
                        ]
                    },
                    {
                        name: 'S',
                        description: 'School bus',
                        available: true, 
                        requirements: [
                            'Be 21 years of age or older',
                            'Pass a knowledge and skills test',
                            'Pass an eye exam', 
                            'Pass a road test in a school bus',
                            'Must have passenger (P) endorsement'  
                        ]
                    },
                    {
                        name: 'N',
                        description: 'Tank vehicles',
                        available: true,
                        requirements: [
                            'Pass a knowledge test'
                        ]
                    },
                    {
                        name: 'X',
                        description: 'Tank vehicle and hazardous materials',
                        available: true,
                        requirements: [
                            'Qualify for both hazardous materials (H) and tank vehicle (N) endorsements'
                        ]
                    }
                ]
            }
        ],
    },
    testingInfo: {
        generalKnowledgeTest: {
            available: true,
            passingScore: 80,
            numQuestions: 50,
            timeLimit: null,
            testFee: 0
        },
        airBrakesTest: {
            available: true,
            passingScore: 80, 
            numQuestions: 25,
            timeLimit: null,
            testFee: 0  
        },
        passengerBusTest: {
            available: true,
            passingScore: 80,
            numQuestions: 25, 
            timeLimit: null,
            testFee: 0
        },
        schoolBusTest: {
            available: true,
            passingScore: 80,
            numQuestions: 25,
            timeLimit: null, 
            testFee: 0
        },
        combinationVehiclesTest: {
            available: true,
            passingScore: 80,
            numQuestions: 25,
            timeLimit: null,
            testFee: 0
        },
        doubleTripleTest: {
            available: true,
            passingScore: 80,
            numQuestions: 25, 
            timeLimit: null,
            testFee: 0
        },
        hazardousMaterialsTest: {
            available: true,
            passingScore: 80,  
            numQuestions: 30,
            timeLimit: null,
            testFee: 0 
        },
        tankVehiclesTest: {
            available: true,
            passingScore: 80,
            numQuestions: 25,
            timeLimit: null,
            testFee: 0
        },
        skillsTest: {
            available: true,
            passingCriteria: 'Pass pre-trip inspection, basic control test, and road test',
            testFee: 50
        }
    }, 
    testingLocations: [
        {
            name: 'Columbia CDL Office',
            address: '1630 Shop Rd, Columbia, SC 29201',
            phone: '(803) 737-8042',
            coordinates: {
                latitude: 33.98699,
                longitude: -81.01603
            }
        },
        {  
            name: 'Charleston CDL Office',
            address: '3790 Leeds Ave, North Charleston, SC 29405',
            phone: '(843) 740-1659',
            coordinates: {
                latitude: 32.87426, 
                longitude: -80.03343
            }
        },
        {
            name: 'Greenville CDL Office',  
            address: '15 Saluda Dam Rd, Greenville, SC 29611',
            phone: '(864) 233-1568',
            coordinates: {
                latitude: 34.84989,
                longitude: -82.39621
            }
        },
        {
            name: 'Florence CDL Office',
            address: '3102 E Palmetto St, Florence, SC 29506',
            phone: '(843) 661-4900',
            coordinates: {
                latitude: 34.17286,
                longitude: -79.74530  
            }
        },
        {
            name: 'Rock Hill CDL Office',
            address: '305 Hands Mill Rd, Rock Hill, SC 29732',
            phone: '(803) 328-0874',
            coordinates: {
                latitude: 34.95786, 
                longitude: -81.03177
            }  
        }
    ]
}