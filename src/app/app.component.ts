import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'abdullah-portfolio';
  showScrollButton = false;

  @ViewChild('scrollableContainer') container!: ElementRef;

  onContainerScroll() {
    const offset = this.container.nativeElement.scrollTop;
    this.showScrollButton = offset > 300;
  }

  scrollToTop() {
    this.container.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
