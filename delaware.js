// seeds/jurisdictions/delaware.js

module.exports = {
    code: 'DE',
    name: 'Delaware',
    type: 'us_state',
    officialInfo: {
        website: 'https://www.dmv.de.gov/',
        phoneNumber: '(302) 744-2500',
        emailAddress: 'customerservice@dmv.de.gov',
        postalAddress: 'P.O. Box 698, Dover, DE 19903',
        locations: [
            {
                name: 'Dover DMV',
                address: '303 Transportation Cir, Dover, DE 19901',
                latitude: 39.1558,
                longitude: -75.5203
            },
            {
                name: 'Wilmington DMV',
                address: '2230 Hessler Blvd, New Castle, DE 19720',
                latitude: 39.6837,
                longitude: -75.6498
            },
            {
                name: 'Georgetown DMV',
                address: '23737 DuPont Blvd, Georgetown, DE 19947',
                latitude: 38.6920,
                longitude: -75.3963
            },
        ]
    },
    requirements: {
        minimumAge: 18,
        minimumDrivingExperience: {
            years: 1,
            miles: 0
        },
        licenseClasses: [
            {
                name: 'Class A',
                description: 'Combination of vehicles with a gross combination weight rating (GCWR) of 26,001 pounds or more, provided the gross vehicle weight rating (GVWR) of the vehicle being towed is in excess of 10,000 pounds.',
                endorsements: ['T', 'P', 'N', 'H', 'X', 'S'],
                restrictions: ['L', 'Z', 'E', 'O', 'M', 'N', 'V', 'K']
            },
            {
                name: 'Class B',
                description: 'Single vehicles with a GVWR of 26,001 pounds or more, or any such vehicle towing another vehicle not in excess of 10,000 pounds GVWR.',
                endorsements: ['T', 'P', 'N', 'H', 'S'],
                restrictions: ['L', 'Z', 'E', 'O', 'M', 'N', 'V', 'K']
            },
            {
                name: 'Class C',
                description: 'Vehicles that do not meet the definitions of Class A or B, but are placarded for hazardous materials or designed to transport 16 or more passengers, including the driver.',
                endorsements: ['H', 'P', 'N', 'S'],
                restrictions: ['L', 'Z', 'E', 'O', 'M', 'N', 'V', 'K'] 
            }
        ]
    },
    licenseInfo: {
        applicationFee: 40,
        renewalFee: 48,
        replacementFee: 30,
        validityPeriod: 8,
        gracePeriod: 60,
        specialEndorsements: [
            {
                code: 'H',
                name: 'Hazardous Materials',
                description: 'Required for vehicles transporting hazardous materials requiring placarding.'
            },
            {
                code: 'T',
                name: 'Double/Triple Trailers',
                description: 'Required for vehicles pulling double or triple trailers.'
            },
            {
                code: 'P',
                name: 'Passenger Transport',
                description: 'Required for vehicles designed to transport 16 or more passengers (including the driver).'
            },
            {
                code: 'N',
                name: 'Tank Vehicle',
                description: 'Required for vehicles designed to transport liquids or liquefied gases in bulk.'
            },
            {
                code: 'X',
                name: 'Hazardous Materials and Tank Combination',
                description: 'Required for tank vehicles transporting hazardous materials requiring placarding.'
            },
            {
                code: 'S',
                name: 'School Bus',
                description: 'Required for vehicles designed to transport pre-primary, primary, or secondary school students.'
            }
        ],
        schoolBusRequirements: {
            minimumAge: 18,
            licenseClass: 'B'
        }
    },
    studyGuide: {
        sections: [
            {
                number: 1,
                name: 'Introduction',
                topics: [
                    '1.1 The Commercial Driver License Program',
                    '1.2 Other Safety Rules'
                ] 
            },
            {
                number: 2,
                name: 'Driving Safely',
                topics: [
                    '2.1 Vehicle Inspection',
                    '2.2 Basic Control of Your Vehicle',
                    '2.3 Shifting Gears',
                    '2.4 Seeing',
                    '2.5 Communicating',
                    '2.6 Controlling Speed',
                    '2.7 Managing Space',
                    '2.8 Seeing Hazards',
                    '2.9 Distracted Driving',
                    '2.10 Aggressive Drivers/Road Rage',
                    '2.11 Driving at Night',
                    '2.12 Driving in Fog',
                    '2.13 Driving in Winter',
                    '2.14 Driving in Very Hot Weather',
                    '2.15 Railroad-highway Crossings',
                    '2.16 Mountain Driving',
                    '2.17 Driving Emergencies',
                    '2.18 Antilock Braking Systems',
                    '2.19 Skid Control and Recovery',
                    '2.20 Accident Procedures',
                    '2.21 Fires',
                    '2.22 Alcohol, Other Drugs, and Driving',
                    '2.23 Hazardous Materials Rules'  
                ]
            },
            {
                number: 3,
                name: 'Transporting Cargo Safely',
                topics: [
                    '3.1 Inspecting Cargo',
                    '3.2 Weight and Balance',
                    '3.3 Securing Cargo',
                    '3.4 Cargo Needing Special Attention'
                ]
            }
        ]
    }
}