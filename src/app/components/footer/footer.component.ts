import { Component } from '@angular/core';
import { display_name, email, linkedinUrl } from '../../app.constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentYear = new Date().getFullYear();
  linkedinUrl: string = linkedinUrl;
  email: string = email;
  displayName: string = display_name;

}
