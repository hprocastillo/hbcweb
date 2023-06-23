import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Contact} from "../../../../interfaces/contact";
import {ContactsService} from "../../../../services/contacts.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-contacts-system',
  templateUrl: './contacts-system.component.html',
  styleUrls: ['./contacts-system.component.scss']
})
export class ContactsSystemComponent implements OnInit, OnDestroy {
  @Output() outTemplate = new EventEmitter<string>();

  listContacts: Contact[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private contactService: ContactsService) {
  }

  ngOnInit(): void {
    this.contactService.getContacts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listContacts = res;
      });
  }

  getTemplate(template: string) {
    this.outTemplate.emit(template);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
