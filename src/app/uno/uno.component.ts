import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uno',
  standalone: true,
  imports: [],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css'
})
export class UnoComponent {

  constructor(private route: ActivatedRoute) {
    console.log('author:', this.route.snapshot.data['author']);
  }
}
