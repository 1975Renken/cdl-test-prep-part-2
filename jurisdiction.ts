// src/types/jurisdiction.ts
export interface Jurisdiction {
  code: string;
  name: string;
  type: 'us_state';
  officialInfo: {
    agencyName: string;
    website: string;
    phoneNumber: string;
  };
  requirements: {
    minAge: number;
    minYearsLicensed: number;
    medicalCertificate: boolean;
    testRequired: {
      general: boolean;
      air: boolean;
      doubles: boolean;
      tankers: boolean;
      hazmat: boolean;
      passenger: boolean;
      school: boolean;
    };
    trainingRequired: boolean;
  };
  licenseInfo: {
    validity: {
      standard: {
        time: number;
        unit: string;
      };
      underAge: {
        time: number;
        unit: string;
      };
    };
    classTypes: Array<{
      name: string;
      description: string;
    }>;
    endorsements: Array<{
      code: string;
      name: string;
      description: string;
    }>;
  };
  fees: {
    knowledge: number;
    permit: number;
    licensing: number;
    endorsements: {
      [key: string]: number;
    };
  };
}