// seeds/jurisdictions/new mexico.js

module.exports = {
    code: 'NM',
    name: 'New Mexico',
    type: 'us_state',
    officialInfo: {
        abbreviation: 'NM',
        websiteURL: 'https://www.mvd.newmexico.gov/',
        phoneNumber: '888-683-4636',
        physicalAddress: '1100 South St. Francis Drive, Santa Fe, NM 87505',
        mailingAddress: 'P.O. Box 1028, Santa Fe, NM 87504-1028'
    },
    requirements: {
        age: 18,
        driverLicense: true,
        driverLicenseDuration: 1,
        commercialLearnerPermit: true,
        minimumCLPHoldingPeriod: 14,
        DOTMedicalCard: true,
        schoolBusEndorsement: {
            age: 21,
            testRequired: true,
            licenseRequired: true,
            backgroundCheck: true
        },
        hazmatEndorsement: {
            age: 21,
            TSABackgroundCheck: true
        }
    },
    licenseInfo: {
        classes: [
            {
                name: 'Class A',
                description: 'Any combination of vehicles with a GCWR of 26,001 pounds or more, provided the GVWR of the vehicle(s) being towed is in excess of 10,000 pounds.'
            },
            {
                name: 'Class B',
                description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.'
            },
            {
                name: 'Class C',
                description: 'Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers, including the driver, or is used in the transportation of hazardous materials.'
            }
        ],
        endorsements: [
            {
                code: 'P',
                name: 'Passenger Transport',
                description: 'Required for operating vehicles designed to transport 16 or more passengers (including the driver).'
            },
            {
                code: 'N',
                name: 'Tank Vehicle',
                description: 'Required for operating vehicles designed to transport any liquid or gaseous materials within a tank or tanks having an individual rated capacity of more than 119 gallons and an aggregate rated capacity of 1,000 gallons or more.'
            },
            {
                code: 'H',
                name: 'Hazardous Materials',
                description: 'Required for operating vehicles transporting hazardous materials that require placarding under the U.S. Department of Transportation regulations.'
            },
            {
                code: 'S',
                name: 'School Bus',
                description: 'Required for operating a school bus designed to transport 16 or more passengers (including the driver).'
            },
            {
                code: 'T',
                name: 'Double/Triple Trailers',
                description: 'Required for operating vehicles towing more than one trailer.'
            },
            {
                code: 'X',
                name: 'Tanker and Hazardous Materials',
                description: 'Combination of tank vehicle and hazardous materials endorsements.'
            }
        ],
        fees: {
            knowledge_test: 25,
            skills_test: 50,
            licenseIssuance: 54,
            licenseRenewal: 54
        }
    },
    locations: [
        {
            name: 'Albuquerque MVD',
            address: '4575 San Mateo Blvd NE, Albuquerque, NM 87109',
            latitude: 35.1498,
            longitude: -106.5788
        },
        {
            name: 'Santa Fe MVD',
            address: '2546 Camino Entrada, Santa Fe, NM 87507',
            latitude: 35.6205,
            longitude: -106.0245
        },
        {
            name: 'Las Cruces MVD',
            address: '3291 Del Rey Blvd, Las Cruces, NM 88012',
            latitude: 32.3200,
            longitude: -106.7637
        }
    ],
    regulations: {
        maxVehicleLength: 40,
        maxVehicleWidth: 8.5,
        maxVehicleHeight: 14,
        maxCombinationLength: 65,
        maxTrailerLength: 28.5,
        maxGrossVehicleWeight: 80000
    }
}