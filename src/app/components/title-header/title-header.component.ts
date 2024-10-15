import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-title-header',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, FormsModule, MatMenuModule],
  templateUrl: './title-header.component.html',
  styleUrl: './title-header.component.css'
})
export class TitleHeaderComponent {

  selectedLang: string = 'English';
  languages = [
    { code: 'us', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'de', name: 'German' },
    { code: 'fr', name: 'French' } 
  ];

  constructor (private router: Router) {}

  navigateHome() {
    this.router.navigate(['/home-page']);
  }

  onGlobeClicked(lang: string) {}

}
