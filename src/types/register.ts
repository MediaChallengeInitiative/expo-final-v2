export type RegisterType = 
  | "exhibitor"
  | "sponsor"
  | "media_manager"
  | "media_editor"
  | "policymaker"
  | "academia"
  | "student"
  | "tech_innovator"
  | "mci_mentor"
  | "mci_alumni"
  | "filmmaker"
  | "cso"
  | "media_organization"
  | "government_official";

export type RegisterInputs = {
  category: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  organization: string;
  designation?: string;
  nationality: string;
  ageBand: string;
  course?: string;
  yearOfStudy?: string;
  programAttended?: string;
  yearOfProgramAttended?: string;
  currentEmployment?: string;
  location?: string;
  paymentMethod?: "mtn" | "airtel" | "visa";
  numberOfPanels?: number;
};