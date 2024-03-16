export const user = {
  name: "Pet3011 Par3011",
  image: "",
  gender: "male",
  dob: "1997-03-15T19:55:59+0000",
  ethnicity: "Indian",
  occupation: "Management",
  acc_no: "123454321",
  MRN: "EBS Demo Facility - 35",
  risk: {
    this: null,
    last: null,
  },
  care_gap: 3,
  ascvd: {
    current: 2.7,
    lowest: 0.2,
  },
  sdoh: {
    this: 0.57,
    last: 0.6,
  },
  address: {
    line_1: "qwertyu",
    city: "Alappuzha",
    state: "Kerala",
    code: 12345,
  },
  contact: {
    primary: "+911234567890",
    emergency: "+911234567890",
  },
  policy: {
    no: 23456789,
    insurer: "Medicare",
  },
  screenings: [
    "DM",
    "BP",
    "Depression",
    "Colorectal",
    "Breast Cancer",
    "Fall Risk",
    "Tobacco",
  ],
};

export const primaryUserDetails = [
  {
    label: "Primary Physician",
    value: "Test only",
  },
  {
    label: "Primary Location",
    value: "EBS Demo Facility - 35",
  },
  {
    label: "Referred by",
    value: null,
  },

  {
    label: "Last visit",
    value: "1997-03-15T19:55:59+0000",
    isDate: true,
  },
  {
    label: "No of visit",
    value: 7,
    subLabel: "in last 12 months",
  },
  {
    label: "No of Hospitalizations",
    value: 0,
    subLabel: "in last 3 months",
  },
  {
    label: "Readmissions",
    value: 0,
    highlight: true,
  },
];

export const conditionUserDetails = [
  {
    label: "Condition",
    value: "Heart Failure, Hypertension, Ischemic, Heart Disease",
  },
  {
    label: "Habits",
    value: "Smoking",
  },
  {
    label: "Vitals",
    multiple: true,
    values: [
      {
        label: "BMI",
        value: null,
      },
      {
        label: "Systolic/Diastolic",
        value: "127/84",
      },
      {
        label: "Glucose",
        value: null,
      },
      {
        label: "O2 Saturation",
        value: null,
      },
    ],
  },

  {
    label: "Lab",
    highlightBorder: true,
    multiple: true,
    values: [
      {
        label: "HDL",
        value: null,
      },
      {
        label: "LDL",
        value: null,
      },
      {
        label: "HbA1c",
        value: null,
      },
    ],
  },
];

export const allergyUserDetails = [
  {
    label: "Allergy",
    value: "Env (Fungicide), Food (Egg), Food (Tree Nut)",
  },
  {
    label: "Medications",
    value: "DIA-EZE",
  },
  {
    label: "Immunization",
    value: "1122 ( dtp )",
  },
];

export const programsUserDetails = [
  {
    label: "Programs",
    value: "Remote Monitoring, Disease Management Program, CCM, AW.,..",
  },
  {
    label: "Service Category",
    value: "High Acuity, Straight Medicare",
  },
  {
    label: "Measures",
    value:
      "Adult Access to Preventive/Ambulatory Health Services ALL, Adult BMI Assessment, Controlling High Blood Pressure with 18-59 years of age",
  },
];

export const noteList = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,",
  "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
  "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
];
