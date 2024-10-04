import { Category } from "./categories";

interface Field {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

const commonFields: Field[] = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  {
    name: "telephone",
    label: "Telephone Number",
    type: "tel",
    required: false
  },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "nationality", label: "Nationality", type: "text", required: true },
  {
    name: "ageBand",
    label: "Age Band",
    type: "select",
    required: true,
    options: ["15-20", "21-25", "26-30", "31-35", "36-40", "41-45", "46+"]
  }
];

const categorySpecificFields: Record<Category, Field[]> = {
  "Media Managers": [
    {
      name: "mediaHouse",
      label: "Name of Media House",
      type: "text",
      required: true
    }
  ],
  "Media Editors": [
    {
      name: "mediaHouse",
      label: "Name of Media House",
      type: "text",
      required: true
    }
  ],
  Policymakers: [
    {
      name: "organization",
      label: "Organisation Name",
      type: "text",
      required: true
    },
    {
      name: "designation",
      label: "Designation/Position",
      type: "text",
      required: true
    }
  ],
  "Academia/Scholars": [
    {
      name: "institution",
      label: "Name of University or Institution",
      type: "text",
      required: true
    },
    { name: "designation", label: "Designation", type: "text", required: true }
  ],
  Students: [
    {
      name: "institution",
      label: "Name of University or Institution",
      type: "text",
      required: true
    },
    {
      name: "course",
      label: "Name of the Course",
      type: "text",
      required: true
    },
    {
      name: "yearOfStudy",
      label: "Year of Study",
      type: "text",
      required: true
    }
  ],
  "Tech Innovators/Experts": [
    {
      name: "organization",
      label: "Organisation Name",
      type: "text",
      required: true
    },
    {
      name: "designation",
      label: "Designation/Position",
      type: "text",
      required: true
    }
  ],
  "MCI Mentors & Trainers": [
    {
      name: "mediaOrganization",
      label: "Media Organization/House",
      type: "text",
      required: true
    },
    {
      name: "designation",
      label: "Designation/Position",
      type: "text",
      required: true
    }
  ],
  "MCI Alumni": [
    {
      name: "program",
      label: "Name of the Program attended",
      type: "text",
      required: true
    },
    {
      name: "yearAttended",
      label: "Year of the Program attended",
      type: "text",
      required: true
    },
    {
      name: "currentEmployment",
      label: "Current Employment",
      type: "text",
      required: true
    },
    {
      name: "designation",
      label: "Designation/Position",
      type: "text",
      required: true
    }
  ],
  "Film-makers": [
    {
      name: "productionHouse",
      label: "Production House",
      type: "text",
      required: true
    },
    { name: "designation", label: "Designation", type: "text", required: true }
  ],
  "Civil Society Organizations (CSOs)": [
    {
      name: "organization",
      label: "Organisation Name",
      type: "text",
      required: true
    },
    {
      name: "designation",
      label: "Designation/Position",
      type: "text",
      required: true
    },
    { name: "country", label: "Country", type: "text", required: true },
    { name: "city", label: "City", type: "text", required: true }
  ],
  "Media Organizations": [
    {
      name: "organization",
      label: "Organisation Name",
      type: "text",
      required: true
    },
    {
      name: "designation",
      label: "Designation/Position",
      type: "text",
      required: true
    },
    { name: "country", label: "Country", type: "text", required: true },
    { name: "city", label: "City", type: "text", required: true }
  ],
  "Government Officials": [
    {
      name: "institution",
      label: "Government Institution",
      type: "text",
      required: true
    },
    { name: "country", label: "Country", type: "text", required: true },
    {
      name: "designation",
      label: "Designation/Position",
      type: "text",
      required: true
    }
  ]
};

export const getFieldsForCategory = (category: Category): Field[] => {
  return [...commonFields, ...(categorySpecificFields[category] || [])];
};
