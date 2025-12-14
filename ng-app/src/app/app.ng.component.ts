import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root',
  template: `
    <h1>Angular Root</h1>

    <!-- AngularJS の bootstrap 対象 -->
    <div id="legacy-root">
      <!-- これがポイント：未知タグじゃなく “属性” なら Angular が怒らない -->
      <div legacy-root></div>
    </div>
  `,

})
export class AppNgComponent {}
