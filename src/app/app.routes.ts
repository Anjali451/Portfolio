import { Routes } from '@angular/router';
import { IntroComponent } from './component/intro/intro.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ExperinceComponent } from './component/experince/experince.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactComponent } from './component/contact/contact.component';

export const routes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'home', component: HomeComponent,
        children: [
            { path: 'about', component: AboutComponent },
            { path: 'experince', component: ExperinceComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'contact', component: ContactComponent }
        ]
    }
];
