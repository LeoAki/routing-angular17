import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tres',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tres.component.html',
  styleUrl: './tres.component.css'
})
export class TresComponent {

  numeroId: number = 0;
  // constructor(private route: ActivatedRoute) {
  //   this.numeroId = +(this.route.snapshot.paramMap.get('postId') || 0);
  // }
  @Input() set postId(postId: number) {
    this.numeroId = postId;
  }

}
