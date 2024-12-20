// seeds/jurisdictions/new_york.js

module.exports = {
    code: 'NY',
    name: 'New York',
    type: 'us_state',
    officialInfo: {
        mainURL: 'https://dmv.ny.gov/commercial-drivers',
        phoneNumber: '518-486-9786',
        reportNewCDLHolderURL: 'https://dmv.ny.gov/motor-carriers/reporting-new-cdl-holder',
    },
    requirements: {
        residency: true,
        driverLicense: true,
        ageLimit: {
            class_a: 21,
            class_b: 18,
            class_c: 18,
        },
        medicalCertificate: true,
        completedClasses: {
            class_a: ['Class A CDL Training Course'],
            class_b: ['Class B CDL Training Course'],
            class_c: ['Class C CDL Training Course'],
        }
    },
    licenseInfo: {
        fees: {
            class_a: 164.50,
            class_b: 164.50,
            class_c: 164.50,
            hazmat_endorsement: 130.00,
        },
        expirationYears: 8,
        renewal: {
            available: 1, // 1 year before expiration
            fee: 164.50,
            extendedExpiration: 8  // 8 year renewal 
        }
    },
    testingInfo: {
        general_knowledge: true,
        air_brakes: true,
        combination_vehicles: true,
        passenger: true,
        hazmat: true,
        road_test: true,
    },
    CDLlocations: [
        {
            city: 'Albany',
            address: '855 Central Avenue, Albany, NY 12206',
            phone: '518-473-5595',
            coordinates: {
                latitude: 42.690368, 
                longitude: -73.821057
            },
        },
        {
            city: 'Buffalo',
            address: '2122 George Urban Blvd, Depew, NY 14043',
            phone: '716-683-9468',
            coordinates: {
                latitude: 42.903419,
                longitude: -78.716179
            },
        },
        {
            city: 'New York City',
            address: '159-10 82nd Street, Howard Beach, NY 11414',
            phone: '718-474-5080',
            coordinates: {
                latitude: 40.661567,
                longitude: -73.846526  
            },
        },
    ],
    endorsements: {
        H: {
            name: 'Hazardous Materials',
            requireAdditionalTest: true,
            feeRequired: true,
            tsnApprovalRequired: true,
        },
        N: {
            name: 'Tank Vehicle',
            requireAdditionalTest: true,
            feeRequired: false,
        },
        P: {
            name: 'Passenger',
            requireAdditionalTest: true,
            feeRequired: false,
        },
        S: {
            name: 'School Bus',
            requireAdditionalTest: true,
            feeRequired: false,
            physicalRequired: true,
            drivingRecordCheck: true,  
        },
        T: {
            name: 'Doubles/Triples',
            requireAdditionalTest: true,
            feeRequired: false,
        },
        X: {
            name: 'Hazardous Materials & Tank Vehicles',
            requireAdditionalTest: true,  
            feeRequired: true,
            tsnApprovalRequired: true,
        }
    },
    classes: [
        {   
            name: 'class_a',
            description: 'Any combination of vehicles with a gross vehicle weight rating (GVWR) of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.',
            trailerLength: 'No restriction',
            standardVehicleExample: 'Tractor-trailers, Truck and trailer combinations, Tanker vehicles, Livestock carriers, Flatbeds',
            endorsementsAvailable: ['H', 'N', 'T', 'X'],
        },
        {
            name: 'class_b', 
            description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
            trailerLength: 'Less than 10,000 lbs',
            standardVehicleExample: 'Straight trucks, Large buses (city buses, tourist buses, school buses), Segmented buses, Box trucks (furniture delivery, refrigerated trucks), Dump trucks with small trailers',
            endorsementsAvailable: ['H', 'N', 'P', 'S', 'X'],
        },
        {
            name: 'class_c',
            description: 'Any single vehicle or combination of vehicles that meets neither the definition of Class A nor Class B, but is either designed to transport 16 or more passengers (including the driver), or is transporting material that has been designated as hazardous.',
            trailerLength: 'Less than 10,000 lbs',
            standardVehicleExample: 'Double trailers, Passenger vans, Hazmat vehicles',
            endorsementsAvailable: ['H', 'N', 'P', 'S', 'X'],
        },
    ],
}