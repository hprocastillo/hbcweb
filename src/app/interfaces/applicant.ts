import {Timestamp} from "firebase/firestore";

export interface Applicant {
  id?: string;
  fullNameOwner: string;

  rucEnterprise: string;
  emailEnterprise: string;
  phoneEnterprise: string;
  descriptionEnterprise: string;

  typeCarrier: string;
  numberCarrier: number;

  createdAt: Timestamp;
}
