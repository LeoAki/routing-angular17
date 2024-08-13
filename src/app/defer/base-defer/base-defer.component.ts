import { Component } from '@angular/core';
import { HijoADeferComponent } from '../hijo-a-defer/hijo-a-defer.component';
import { HijoBDeferComponent } from '../hijo-b-defer/hijo-b-defer.component';
import { HijoCDeferComponent } from '../hijo-c-defer/hijo-c-defer.component';

@Component({
  selector: 'app-base-defer',
  standalone: true,
  imports: [
    HijoADeferComponent,
    HijoBDeferComponent,
    HijoCDeferComponent
  ],
  templateUrl: './base-defer.component.html',
  styleUrl: './base-defer.component.css'
})
export class BaseDeferComponent {
  isLoaded: boolean = false;

  showComponenteC() {
    this.isLoaded = true;
  }
}
