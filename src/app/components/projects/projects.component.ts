import { Component } from '@angular/core';
import { projects } from '../../app.constants';
import { Project } from '../../app.models';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[] = projects;

}
