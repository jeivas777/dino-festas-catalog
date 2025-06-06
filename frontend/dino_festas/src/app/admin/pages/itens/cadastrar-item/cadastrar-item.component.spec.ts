import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarItemComponent } from './cadastrar-item.component';

describe('CadastrarItemComponent', () => {
  let component: CadastrarItemComponent;
  let fixture: ComponentFixture<CadastrarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
