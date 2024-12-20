// seeds/jurisdictions/nebraska.js

module.exports = {
    code: 'NE',
    name: 'Nebraska',
    type: 'us_state',
    officialInfo: {
        driverLicenseAgency: 'Nebraska Department of Motor Vehicles',
        mainWebsite: 'https://dmv.nebraska.gov/',
        phoneNumber: '(402) 471-3861',
        locations: [
            {
                name: 'Lincoln Main Office',
                address: '301 Centennial Mall South, Lincoln, NE 68509',
                latitude: 40.8137,
                longitude: -96.7029
            },
            {
                name: 'Omaha Metro West',
                address: '4606 S 120th St, Omaha, NE 68137',
                latitude: 41.2173,
                longitude: -96.1072
            },
            // Add more Nebraska DMV locations
        ]
    },
    requirements: {
        minAge: 18,
        minAge18: true,
        minAgeWithCLP: 18,
        residency: true,
        ssnOrTIN: true,
        identification: {
            driversLicenseOrID: true,
            birthCertificate: true,
            passport: true
        },
        physical: {
            requiredForCLP: true,
            requiredForCDL: false,
            selfCertify: true,
            formNumber: 'MCSA-5876'
        },
        vision: {
            minimumAcuity: '20/40',
            optionalWaiver: true
        },
        knowledgeTest: {
            minimumAge: 18,
            type: 'Computer',
            options: {
                written: false,
                audio: false,
                interpreter: false
            }
        },
        skillsTest: {
            minimumAge: 18,
            type: 'Vehicle',
            preTrip: true,
            airBrakes: true,
            appointmentRequired: true
        }
    },
    licenseInfo: {
        cost: {
            base: 60,
            endorsements: {
                hazmat: 10,
                tankVehicle: 10,
                passengerTransport: 10,
                schoolBus: 10,
                doubleTrouble: 10
            }
        },
        term: {
            years: 5,
            expiration: {
                birthdate: true,
                beforeExpiration: false,
                earliestRenewal: {
                    months: 6
                }
            }
        },
        renewalOptions: {
            online: true,
            emailReminder: true
        }
    },
    classes: {
        classA: {
            name: 'Class A',
            description: 'Any combination of vehicles with a GCWR of 26,001 pounds or more, provided the GVWR of the vehicle being towed is in excess of 10,000 pounds.',
            endorsements: ['T', 'P', 'N', 'H', 'X', 'S']
        },
        classB: {
            name: 'Class B',
            description: 'Any single vehicle with a GVWR of 26,001 pounds or more, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR.',
            endorsements: ['T', 'P', 'N', 'H', 'X', 'S']
        },
        classC: {
            name: 'Class C',
            description: 'Any single vehicle, or combination of vehicles, that does not meet the definition of Class A or Class B, but is either designed to transport 16 or more passengers, including the driver, or is placarded for hazardous materials.',
            endorsements: ['H', 'X', 'N', 'P', 'S']
        }
    },
    endorsements: {
        T: {
            name: 'Doubles/Triples',
            description: 'Required for operating vehicles towing more than one trailer.'
        },
        P: {
            name: 'Passenger Transport',
            description: 'Required for operating vehicles designed to transport 16 or more passengers (including the driver).'
        },
        N: {
            name: 'Tank Vehicles',
            description: 'Required for operating vehicles designed to transport any liquid or gaseous materials within a tank or tanks having an individual rated capacity of more than 119 gallons and an aggregate rated capacity of 1,000 gallons or more that is either permanently or temporarily attached to the vehicle or chassis.'
        },
        H: {
            name: 'Hazardous Materials',
            description: 'Required for operating vehicles transporting hazardous materials requiring placarding under the Hazardous Materials Regulations (49 CFR part 172, subpart F).'
        },
        X: {
            name: 'Hazardous Materials and Tank Combination',
            description: 'Required for operating vehicles transporting hazardous materials via a tank.'
        },
        S: {
            name: 'School Bus',
            description: 'Required for operating a school bus designed to transport 16 or more passengers (including the driver).'
        }
    }
};