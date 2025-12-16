import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'legacy-host',
  templateUrl: './legacy-host.component.html',
  standalone: false
})
export class LegacyHostComponent implements AfterViewInit {
  @ViewChild('legacyRoot', { static: true, read: ElementRef })
  legacyRoot!: ElementRef<HTMLElement>;

  constructor(private upgrade: UpgradeModule, private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.legacyRoot.nativeElement.innerHTML = '<legacy-root></legacy-root>';
    const mode = this.route.snapshot.paramMap.get('mode') ?? 'default';
    (window as any).__LEGACY_MODE__ = mode;

    this.upgrade.bootstrap(this.legacyRoot.nativeElement, ['legacyApp'], { strictDi: true });
  }
}
