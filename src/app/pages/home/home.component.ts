import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { Router } from '@angular/router'

import { TitleHeaderComponent } from '../../components/title-header/title-header.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, FormsModule, MatMenuModule, TitleHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title: string = 'Transfer Tunes Between Different Services!';
  description: string = 'Easily move your music collection between all your favorite streaming platforms! Compatible with Spotify, YouTube, Apple Music, and more.';

  constructor(private router: Router) {}

  onGetStarted() {
    this.router.navigate(['/spotify-login']);
  }

}
