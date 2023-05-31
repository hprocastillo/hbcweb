import {Component} from '@angular/core';

@Component({
  selector: 'app-home-system',
  templateUrl: './home-system.component.html',
  styleUrls: ['./home-system.component.scss']
})
export class HomeSystemComponent {

  template: string = 'homeTemplate';

  constructor() {
  }

  showTemplate(template: string) {
    this.template = template;
  }

}
