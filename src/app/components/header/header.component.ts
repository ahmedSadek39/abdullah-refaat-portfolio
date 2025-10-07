import { Component } from '@angular/core';
import { display_name, email, linkedinUrl, resumePath } from '../../app.constants';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  name = display_name;
  email = email;
  resumePath = resumePath;
  linkedinUrl: string = linkedinUrl;

  downloadCV() {
    window.open(this.resumePath, '_blank');
  }
}
