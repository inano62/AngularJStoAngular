import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCompnent } from './app-compnent';

describe('AppCompnent', () => {
  let component: AppCompnent;
  let fixture: ComponentFixture<AppCompnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCompnent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCompnent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
