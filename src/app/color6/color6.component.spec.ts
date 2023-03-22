import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Color6Component } from './color6.component';

describe('Color6Component', () => {
  let component: Color6Component;
  let fixture: ComponentFixture<Color6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Color6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Color6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
