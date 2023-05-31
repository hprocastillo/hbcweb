import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Applicant} from "../../interfaces/applicant";
import {Timestamp} from "firebase/firestore";
import {ApplicantsService} from "../../services/applicants.service";

@Component({
  selector: 'app-modal-applicants',
  templateUrl: './modal-applicants.component.html',
  styleUrls: ['./modal-applicants.component.scss']
})
export class ModalApplicantsComponent {
  @ViewChild('closeButton') closeButton: any;

  applicantForm: FormGroup;

  constructor(private fb: FormBuilder, private applicantService: ApplicantsService) {
    this.applicantForm = this.fb.group({
      fullNameOwner: [''],
      rucEnterprise: [''],
      emailEnterprise: [''],
      phoneEnterprise: [''],
      descriptionEnterprise: [''],
      typeCarrier: [''],
      numberCarrier: ['']
    });
  }

  async onSubmit() {
    let newApplicant: Applicant;

    newApplicant = this.applicantForm.value;
    newApplicant.createdAt = Timestamp.fromDate(new Date());

    try {
      await this.applicantService.addApplicant(newApplicant);
      this.applicantForm.reset();
      this.closeButton.nativeElement.click();

    } catch (e) {
      console.log(e);
    }
  }

}
