//Here is the generated JavaScript module for Pennsylvania with the same structure as the California example:

// seeds/jurisdictions/pennsylvania.js
            
module.exports = {
    code: 'PA',
    name: 'Pennsylvania', 
    type: 'us_state',
    officialInfo: {
        mainWebsite: 'https://www.dmv.pa.gov',
        phoneNumber: '717-412-5300',
        emailAddress: 'RA-PDMVINFO@pa.gov',
        cdlHandbook: 'https://www.dot.state.pa.us/public/dvspubsforms/BDL/BDL%20Manuals/Manuals/Commercial%20Drivers%20Manual/Commercial%20Drivers%20Manual%20-%20English%20Version.pdf'
    },
    requirements: {
        minimumAge: 18,
        minimumAge21: true,
        fullLicenseRequired: true,
        goodDrivingRecord: true,
        drivingExperience: {
            required: true,
            minimumYears: 1,
            validLicenseRequired: true
        },
        knowledgeTests: [
            {
                name: 'General Knowledge',
                hoursToStudy: 30,
                minimumPassingScore: 80
            },
            {
                name: 'Air Brakes (if applicable)',
                hoursToStudy: 15,
                minimumPassingScore: 80                
            },
            {
                name: 'Combination Vehicles (if applicable)',
                hoursToStudy: 10,
                minimumPassingScore: 80
            },
            {
                name: 'Hazardous Materials (if applicable)',
                hoursToStudy: 20,
                minimumPassingScore: 80
            }
        ],
        skillsTest: {
            preTrip: true,
            backing: true,
            roadTest: true,
            minimumPassingScore: 80
        },
        medicalExam: true,
        ageUnder21OtherStatesPermitted: false
    },
    licenseInfo: {
        costInState: 78.50,
        costOutOfState: 78.50,
        processingTime: '7-10 business days',
        originalDocumentsRequired: true,
        renewalFrequency: 4,
        upgradeOptions: [
            {
                name: 'Passenger Endorsement',
                description: 'Required for operating any vehicle designed to transport 16 or more passengers (including the driver)',
                requirements: {
                    minimumAge: 18
                }
            },
            {
                name: 'School Bus Endorsement',
                description: 'Required for operating a school bus',
                requirements: {
                    minimumAge: 18,
                    additionalTraining: 14
                }
            },
            {  
                name: 'Double/Triple Trailer Endorsement',
                description: 'Required to tow more than one trailer',
                requirements: {
                    minimumAge: 18,
                    drivingExperienceYears: 1
                }
            },
            {
                name: 'Hazardous Materials Endorsement',
                description: 'Required to transport hazardous materials',
                requirements: {
                    minimumAge: 21,
                    tsa: {
                        required: true,
                        price: 86.50  
                    }
                }
            },
            {
                name: 'Tank Vehicle Endorsement',
                description: 'Required to operate vehicles designed to haul liquids or liquified gases in bulk',
                requirements: {
                    minimumAge: 18
                }
            }
        ],
        classTypes: [
            {
                name: 'Class A',
                description: 'Operates any combination of vehicles over 26,000 lbs',
                requirements: {
                    federalMedicalCard: true
                }
            },
            {  
                name: 'Class B',
                description: 'Operates any single vehicle over 26,000 lbs',
                requirements: {
                    federalMedicalCard: true
                }
            },
            {
                name: 'Class C',
                description: 'Vehicles under 26,000 lbs that transport 16+ passengers or hazardous materials',
                requirements: {
                    federalMedicalCard: true
                }
            }
        ]
    },
    locations: [
        {
            name: 'Harrisburg Driver License Center',
            address: '1101 South Front Street',
            city: 'Harrisburg',
            state: 'PA',
            zip: 17104,
            phone: '717-412-5300',
            latitude: 40.25728,
            longitude: -76.88279
        },
        {
            name: 'Pittsburgh CDL Driver License Center',
            address: '708 Smithfield St',  
            city: 'Pittsburgh',
            state: 'PA',
            zip: 15222,
            phone: '412-429-5000',
            latitude: 40.43947, 
            longitude: -79.99619
        },
        {
            name: 'Philadelphia Commercial Driver License Center',
            address: '1530 S Christopher Columbus Blvd', 
            city: 'Philadelphia',
            state: 'PA',
            zip: 19147,
            phone: '800-932-4600',
            latitude: 39.92297,
            longitude: -75.14619
        },
        {
            name: 'Allentown Driver License Center',
            address: '1710 Hoover Ave',
            city: 'Allentown',
            state: 'PA', 
            zip: 18109,
            phone: '610-439-1396',
            latitude: 40.59201,
            longitude: -75.48930
        },
        {
            name: 'Erie Driver License Center',
            address: '7200 Peach St',
            city: 'Erie',
            state: 'PA',
            zip: 16509, 
            phone: '814-868-0495',
            latitude: 42.06127,
            longitude: -80.08936
        }
    ]
};