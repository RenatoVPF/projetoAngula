import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InDoAlunoComponent } from './in-do-aluno.component';

describe('InDoAlunoComponent', () => {
  let component: InDoAlunoComponent;
  let fixture: ComponentFixture<InDoAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InDoAlunoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InDoAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
