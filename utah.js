//Here is the generated JavaScript module for Utah with the requested structure and Utah-specific information:

// seeds/jurisdictions/utah.js

module.exports = {
    code: 'UT',
    name: 'Utah', 
    type: 'us_state',
    officialInfo: {
        departmentName: 'Utah Driver License Division',
        website: 'https://dld.utah.gov/',
        phoneNumbers: [
            {
                type: 'main',
                phoneNumber: '(801) 965-4437'
            }
        ],
        socialMedia: [
            {
                platform: 'twitter',
                url: 'https://twitter.com/utahdld'  
            },
            {
                platform: 'facebook',
                url: 'https://www.facebook.com/utahdld/'
            }
        ]
    },
    requirements: {
        age: 18,
        drivingExperience: '1 year with regular driver license',
        education: {
            approvedProviders: [
                'Utah State Board of Education approved CDL training programs',
                'Accredited trucking company training programs',
                'Utah college/university CDL programs'  
            ],
            hoursRequired: 0 
        },
        physicalExamRequired: true,
        englishProficiencyRequired: true,
        backgroundCheck: true 
    },
    licenseInfo: {
        validity: {
            time: '5 years',
            metric: 'year'
        },
        cost: {
            base: 52,
            additional: 10,
            metric: 'USD'
        },
        classTypes: [
            {
                name: 'Class A',
                description: 'Any combination of vehicles with a GCWR of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.'
            },
            {    
                name: 'Class B',
                description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.'
            },
            {
                name: 'Class C', 
                description: 'Any single vehicle less than 26,001 pounds GVWR, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.' 
            }
        ],
        endorsements: [
            {
                code: 'H',
                name: 'Hazardous Materials',
                description: 'Required to haul hazardous materials in quantities requiring placarding.'
            },
            {
                code: 'N',
                name: 'Tank Vehicle',  
                description: 'Required to drive a tank vehicle.'
            },
            {
                code: 'T',
                name: 'Double/Triple Trailers',
                description: 'Required to pull double or triple trailers.'
            },
            {
                code: 'P',
                name: 'Passenger',
                description: 'Required to drive a vehicle designed to transport 16 or more passengers, including the driver.'
            },
            {  
                code: 'X',
                name: 'Tanker/Hazmat Combination',
                description: 'Required to drive a tank vehicle transporting hazardous materials.'
            },
            {
                code: 'S',
                name: 'School Bus',
                description: 'Required to drive a school bus designed to transport 16 or more passengers, including the driver.'  
            }
        ] 
    },
    locations: [
        {
            name: 'Salt Lake City DLD Office',
            address: '2100 S State St, Salt Lake City, UT 84114',
            latitude: 40.7322,
            longitude: -111.8881
        },
        {
            name: 'Provo DLD Office', 
            address: '150 E Center St Suite 1400, Provo, UT 84606',
            latitude: 40.2343, 
            longitude: -111.6625
        },
        {
            name: 'West Valley DLD Office',
            address: '2780 West 4700 South, West Valley City, UT 84119',
            latitude: 40.6671,
            longitude: -111.9641 
        }
    ],
    regulations: {
        vehicleWeightLimits: {
            singleAxle: 20000,
            tandemAxle: 34000,
            tripleAxle: 42500, 
            quadAxle: 50500,
            metric: 'lbs'
        },  
        maxVehicleHeight: {
            value: 14,
            metric: 'ft'   
        },
        maxVehicleWidth: {
            value: 8.5,
            metric: 'ft' 
        },
        maxVehicleLength: {
            semitrailer: {
                value: 53,
                metric: 'ft'
            },
            trailerTrain: {
                value: 88, 
                metric: 'ft'  
            }
        },
        speedLimits: {
            urban: {
                value: 70,
                metric: 'mph'
            },
            rural: {
                value: 80,  
                metric: 'mph'
            },
            highway: {
                value: 80,
                metric: 'mph'  
            }
        },
        maxHoursService: {
            perShift: 11,
            perDay: 14,
            perWeek: 70
        }
    }
}