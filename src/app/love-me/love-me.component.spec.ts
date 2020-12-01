import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveMeComponent } from './love-me.component';

describe('LoveMeComponent', () => {
  let component: LoveMeComponent;
  let fixture: ComponentFixture<LoveMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoveMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
