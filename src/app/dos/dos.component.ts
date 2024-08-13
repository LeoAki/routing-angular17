import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dos',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './dos.component.html',
  styleUrl: './dos.component.css'
})
export class DosComponent {

  constructor(private router: Router) {}

  viewBlogDetails(postId: string) {
    this.router.navigate(['/componente-tres', postId]);
  }
}
