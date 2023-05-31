import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {Timestamp} from "firebase/firestore";
import {Contact} from "../../interfaces/contact";
import {ContactsService} from "../../services/contacts.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactsService) {
    this.contactForm = this.fb.group({
      fullName: [''],
      email: [''],
      subject: [''],
      message: ['']
    });
  }

  async onSubmit() {
    let newContact: Contact;

    newContact = this.contactForm.value;
    newContact.createdAt = Timestamp.fromDate(new Date());

    try {
      await this.contactService.addContact(newContact);
      this.contactForm.reset();

    } catch (e) {
      console.log(e);
    }
  }
}
