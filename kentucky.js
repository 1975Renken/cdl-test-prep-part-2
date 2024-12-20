//Here is the generated Kentucky module with the same structure as the California example but with Kentucky-specific data:

// seeds/jurisdictions/kentucky.js

module.exports = {
    code: 'KY',
    name: 'Kentucky', 
    type: 'us_state',
    officialInfo: {
        drivingManual: 'https://drive.ky.gov/driver-licensing/Pages/Drivers-Manual.aspx',
        driverLicenseHome: 'https://drive.ky.gov/driver-licensing/Pages/Drivers-License.aspx',
        commercialLicenseHome: 'https://drive.ky.gov/driver-licensing/Pages/Commercial-Drivers-License-Information.aspx',
    },
    requirements: {
        minAge: 18, 
        minCompletedPermitDuration: 14,
        minCompletedPermitHours: 0,
        maxPoints: 12,
        testWaitPeriod: 7,
    },
    licenseInfo: {
        temporaryExpiry: 30,  
        defaultExpiry: 'next_birthday + 4 years',
        temporaryExtensionEligibilityMonths: 6,
        defaultExtensionEligibilityMonths: 6,
    },
    feeInfo: {
        A: {
            baseFee: 48, 
            endorsementFee: 10,
            enhancedFee: 24,
            renewalFee: 48,
            enhancedRenewalFee: 72,
        },
        B: {
            baseFee: 40,
            endorsementFee: 10,
            enhancedFee: 20,
            renewalFee: 40,
            enhancedRenewalFee: 60,
        },
        C: {
            baseFee: 24,
            endorsementFee: 10,
            enhancedFee: 12,
            renewalFee: 24,
            enhancedRenewalFee: 36,
        },
    },
    dmvLocations: [
        {
            city: 'Frankfort',
            address: '200 Mero St',  
            zip: '40601',
            coords: { lat: 38.201080, long: -84.873730 },
        },
        {  
            city: 'Lexington',
            address: '141 Leestown Center Way',
            zip: '40511', 
            coords: { lat: 38.072910, long: -84.550540 },
        },
        {
            city: 'Louisville', 
            address: '600 W Cedar St',
            zip: '40202',
            coords: { lat: 38.255840, long: -85.763290 },
        },
    ],
    classTypes: {
        A: {
            name: 'Class A',
            description: 'Any combination of vehicles with a GCWR of 26,001 pounds or more, provided that the GVWR of the vehicle being towed is in excess of 10,000 pounds. (Holders of a Class A license may, with appropriate endorsements, operate all vehicles within Classes B and C.)',    
        },
        B: {
            name: 'Class B',
            description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR. (Holders of a Class B license may, with appropriate endorsements, operate all vehicles within Class C.)',
        },     
        C: {  
            name: 'Class C',
            description: 'Any single vehicle less than 26,001 pounds GVWR, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR, and are: - Vehicles designed to transport 16 or more passengers, including the driver; or - Vehicles used in the transportation of hazardous materials.',
        }, 
    },
    endorsements: [   
        {
            code: 'L',
            name: 'Motorcycles',
            description: 'Required to operate motorcycles or motor-scooters/mopeds.',
            requirements: {
                test: true,
                minimumAge: 18,
            }
        },
        {
            code: 'H',
            name: 'Hazardous Materials', 
            description: 'Required to operate any size vehicle used in the transportation of materials found to be hazardous.',
            requirements: {
                test: true,
                tsa_check: true,
            }
        },
        {  
            code: 'X',
            name: 'Hazmat and Tanker',
            description: 'Combination of Hazardous Materials and Tanker vehicle endorsements.',
            requirements: {
                test: true,
                tsa_check: true,  
            }
        },
        {
            code: 'T', 
            name: 'Double/Triple',
            description: 'Required to operate a vehicle towing two or three trailers.',
            requirements: {
                test: true,
            }
        },
        {
            code: 'N', 
            name: 'Tanker', 
            description: 'Required to operate a vehicle designed to transport any liquid or gaseous materials within a tank or tanks having an individual rated capacity of more than 119 gallons and an aggregate rated capacity of 1,000 gallons or more permanently attached to the vehicle or chassis.',
            requirements: {
                test: true,
            }
        },
        {
            code: 'P',
            name: 'Passenger Transport',
            description: 'Required to operate vehicles designed to transport 16 or more passengers (including driver).',
            requirements: {
                test: true,
            }    
        },
        {
            code: 'S',
            name: 'School Bus',
            description: 'Required to operate a school bus. School bus drivers must also pass a background check.',
            requirements: {
                test: true, 
                background_check: true,
            }
        },
    ]
};