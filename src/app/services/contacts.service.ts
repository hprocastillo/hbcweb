import {Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Contact} from "../interfaces/contact";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private firestore: Firestore) {
  }

  addContact(contact: Contact) {
    const ref = collection(this.firestore, 'contacts');
    return addDoc(ref, contact);
  }

  getContacts(): Observable<Contact[]> {
    const ref = collection(this.firestore, 'contacts');
    return collectionData(ref, {idField: 'id'}) as Observable<Contact[]>;
  }
}
