import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contact} from "../../../../interfaces/contact";
import {ContactsService} from "../../../../services/contacts.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-contacts-system',
  templateUrl: './contacts-system.component.html',
  styleUrls: ['./contacts-system.component.scss']
})
export class ContactsSystemComponent implements OnInit, OnDestroy {

  listContacts: Contact[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private contactService: ContactsService) {
  }

  ngOnInit(): void {
    this.contactService.getContacts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listContacts = res;
        console.log(this.listContacts)
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
