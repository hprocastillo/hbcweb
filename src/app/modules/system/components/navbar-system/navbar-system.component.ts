import {Component} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-system',
  templateUrl: './navbar-system.component.html',
  styleUrls: ['./navbar-system.component.scss']
})
export class NavbarSystemComponent {
  constructor(public authService: AuthService, private router: Router) {
  }

  async logout() {
    try {
      await this.authService.logout();
      await this.router.navigate(['/system/login']);

    } catch (e) {
      console.log(e);
    }
  }

}
