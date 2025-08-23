import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./components/about/about/about.component";
import { ProjectProComponent } from "./components/projectPro/project-pro/project-pro.component";
import { ProjectPersoComponent } from "./components/projectPerso/project-perso/project-perso.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, AboutComponent, ProjectProComponent, ProjectPersoComponent],
  template: `
<app-header/>
<app-about/>
<app-project-pro/>
<app-project-perso id="projectPerso"/>
  <app-footer/>`,
  styles: ``
})
export class AppComponent {
  title = 'Portfolio';
}