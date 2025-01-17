import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InDoPorfessorCompComponent } from './in-do-porfessor-comp.component';

describe('InDoPorfessorCompComponent', () => {
  let component: InDoPorfessorCompComponent;
  let fixture: ComponentFixture<InDoPorfessorCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InDoPorfessorCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InDoPorfessorCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
