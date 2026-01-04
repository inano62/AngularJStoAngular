import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-react-host',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './react-host.page.html',
  styleUrls: ['./react-host.page.scss'],
})
export class ReactHostComponent {}
