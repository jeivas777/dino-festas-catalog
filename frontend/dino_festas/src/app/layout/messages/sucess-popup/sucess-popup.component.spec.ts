import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessPopupComponent } from './sucess-popup.component';

describe('SucessPopupComponent', () => {
  let component: SucessPopupComponent;
  let fixture: ComponentFixture<SucessPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucessPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
