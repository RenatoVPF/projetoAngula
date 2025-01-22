import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InGeralComponent } from './in-geral.component';

describe('InGeralComponent', () => {
  let component: InGeralComponent;
  let fixture: ComponentFixture<InGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InGeralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
