import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  template: `
    <h1>Angular Root</h1>
<!--    <div id="legacy-root">-->
<!--      <div legacy-root></div>-->
<!--    </div>-->
    <app-legacy-host></app-legacy-host>
  `,

})
export class AppNgComponent {}
