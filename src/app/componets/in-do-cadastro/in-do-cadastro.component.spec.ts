import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InDoCadastroComponent } from './in-do-cadastro.component';

describe('InDoCadastroComponent', () => {
  let component: InDoCadastroComponent;
  let fixture: ComponentFixture<InDoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InDoCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InDoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
