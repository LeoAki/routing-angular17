import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  email = localStorage.getItem('email');

  constructor(private authService: AuthService) { }

  signOut() {
      this.authService.signOut();
  }
}
