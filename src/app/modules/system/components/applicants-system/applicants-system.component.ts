import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Contact} from "../../../../interfaces/contact";
import {Subject, takeUntil} from "rxjs";
import {ContactsService} from "../../../../services/contacts.service";
import {Applicant} from "../../../../interfaces/applicant";
import {ApplicantsService} from "../../../../services/applicants.service";

@Component({
  selector: 'app-applicants-system',
  templateUrl: './applicants-system.component.html',
  styleUrls: ['./applicants-system.component.scss']
})
export class ApplicantsSystemComponent implements OnInit, OnDestroy {
  @Output() outTemplate = new EventEmitter<string>();

  listApplicants: Applicant[] = [];
  private unsubscribe$ = new Subject<boolean>();

  constructor(private applicantsService: ApplicantsService) {
  }

  ngOnInit(): void {
    this.applicantsService.getApplicants()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        this.listApplicants = res;
        console.log(this.listApplicants)
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
