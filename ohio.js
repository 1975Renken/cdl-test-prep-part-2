//Here is a complete JavaScript module for Ohio CDL information following the same structure as the California example:

// seeds/jurisdictions/ohio.js

module.exports = {
    code: 'OH', 
    name: 'Ohio',
    type: 'us_state',
    capital: 'Columbus',
    timezone: 'Eastern',
    officialInfo: {
        mainWebsite: 'https://www.bmv.ohio.gov/',
        cdlWebsite: 'https://www.bmv.ohio.gov/dl-cdl.aspx',
        manualWebsite: 'https://www.bmv.ohio.gov/links/bmv-all-cdl-digest.pdf',
        phoneNumber: '(844) 644-6268',
        phoneHours: '8:00am - 5:00pm Monday-Friday'
    },
    requirements: {
        commercialLearners: {
            minAge: 18,
            ageNotes: 'Must be 21 to drive outside OH or transport hazardous materials',
            education: null,
            drivingExperience: null,
            drivingRecord: 'No suspensions in past 3 years or DUI in past 6 years',
            otherNotes: 'Must have valid OH driver license & proof of legal presence',
            testRequired: {
                knowledge: true,
                skills: false  
            }
        }, 
        commercialUnder21: {
            minAge: 18,
            ageNotes: 'Interstate travel prohibited until age 21',
            education: null,
            drivingExperience: null,
            drivingRecord: 'No more than 4 points on record in past 2 years',
            otherNotes: 'Same requirements as commercial learners permit',
            testRequired: {
                knowledge: true, 
                skills: true
            }
        },
        commercialOver21: {
            minAge: 21,
            ageNotes: null,
            education: null,
            drivingExperience: 'Must have held CLP for at least 14 days',
            drivingRecord: 'No more than 4 points on record in past 2 years', 
            otherNotes: null,
            testRequired: {  
                knowledge: true,
                skills: true
            }
        }
    },
    licenseInfo: {
        cost: {
            learners: 27,
            classCUnder21: 42,
            classCOver21: 42, 
            classBUnder21: 44,
            classBOver21: 44,
            classAUnder21: 46,
            classAOver21: 46
        },
        renewalPeriod: {
            under21: '4 years', 
            over21: '4 years'
        },
        locationTypes: {
            bmvDeputyRegistrar: 13,
            bmvDriver: 17,
            thirdPartyTesting: 165
        },
        exampleLocations: [
            {
                name: 'Columbus West Deputy Registrar',
                type: 'bmvDeputyRegistrar', 
                address: '4161 W Broad St, Columbus, OH 43228',
                phone: '(614) 728-4257', 
                geolocation: {
                    lat: 39.95769030601913, 
                    long: -83.09689828285583
                }
            },
            {   
                name: 'Licensing & Testing',
                type: 'bmvDriver',
                address: '1970 W Broad St, Columbus, OH 43223', 
                phone: '(614) 752-7600',
                geolocation: { 
                    lat: 39.955429001855634,
                    long: -83.04119945712836  
                }
            },
            {
                name: 'Great Lakes Truck Driving School',
                type: 'thirdPartyTesting',
                address: '27740 Royalton Rd, Columbia Station, OH 44028',
                phone: '(440) 236-3436', 
                geolocation: {
                    lat: 41.305257178283316,  
                    long: -81.96871625176973
                }
            }
        ]
    },
    endorsements: [
        {
            code: 'H',
            name: 'Hazardous materials', 
            requirements: [
                'Background check', 'Additional knowledge test'
            ]  
        },
        {
            code: 'N',
            name: 'Tank vehicle',
            requirements: ['Additional knowledge test']
        },
        {
            code: 'P',
            name: 'Passenger',
            requirements: ['Additional knowledge & skills tests'] 
        },
        {
            code: 'S',
            name: 'School bus',  
            requirements: [
                'Additional knowledge & skills tests',
                'Background check',
                'No speeding >15mph in school zones in past 2 years'
            ]
        },
        { 
            code: 'T',
            name: 'Double/Triple trailers',
            requirements: ['Additional knowledge test']
        },
        {
            code: 'X',
            name: 'Tank vehicle + Hazardous materials',
            requirements: [] // Requirements combined from H and N endorsements
        } 
    ],
    classTypes: {
        classA: {
            definition: 'Any combination of vehicles with a GCWR of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.',
            ageLimit: 18,  
            class: 'A',
            endorsementReqs: {
                haz: true,
                tank: false,
                passenger: false,
                school: false,  
                doubleTriple: false
            }
        },
        classB: {  
            definition: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
            ageLimit: 18,
            class: 'B',
            endorsementReqs: {
                haz: true, 
                tank: false,
                passenger: false,
                school: false,
                doubleTriple: false  
            }
        },
        classC: {
            definition: 'Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers, including the driver, or is placarded for hazardous materials.',
            ageLimit: 18, 
            class: 'C',
            endorsementReqs: { 
                haz: true,
                tank: false, 
                passenger: true,
                school: true,
                doubleTriple: false
            }
        }
    }
};