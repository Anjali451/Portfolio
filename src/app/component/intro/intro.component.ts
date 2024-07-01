import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [HomeComponent, RouterLink, AboutComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {

}
