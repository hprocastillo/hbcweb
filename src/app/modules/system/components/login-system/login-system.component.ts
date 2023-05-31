import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApplicantsService} from "../../../../services/applicants.service";
import {Applicant} from "../../../../interfaces/applicant";
import {Timestamp} from "firebase/firestore";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-system',
  templateUrl: './login-system.component.html',
  styleUrls: ['./login-system.component.scss']
})
export class LoginSystemComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  async onSubmit() {
    try {
      await this.authService.login(this.loginForm.value).then(res => console.log(res));
      await this.router.navigate(['/system']);

    } catch (e) {
      console.log(e);
    }
  }
}
