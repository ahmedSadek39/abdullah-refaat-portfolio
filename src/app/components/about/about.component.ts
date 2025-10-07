import { Component } from '@angular/core';
import { avatarPath, display_name, email, linkedinUrl, resumePath, user_bio, jobTitle } from '../../app.constants';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

  name: string = display_name;
  bio: string = user_bio;
  resumePath: string = resumePath;
  avatarPath: string = avatarPath;
  linkedinUrl: string = linkedinUrl;
  email: string = email;
  jobTitle: string = jobTitle;

  downloadCV() {
    window.open(this.resumePath, '_blank');
  }
}
