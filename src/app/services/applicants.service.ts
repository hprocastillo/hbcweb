import {Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Applicant} from "../interfaces/applicant";
import {Observable} from "rxjs";
import {Contact} from "../interfaces/contact";

@Injectable({
  providedIn: 'root'
})
export class ApplicantsService {

  constructor(private firestore: Firestore) {
  }

  addApplicant(applicant: Applicant) {
    const ref = collection(this.firestore, 'applicants');
    return addDoc(ref, applicant);
  }

  getApplicants(): Observable<Applicant[]> {
    const ref = collection(this.firestore, 'applicants');
    return collectionData(ref, {idField: 'id'}) as Observable<Applicant[]>;
  }
}
