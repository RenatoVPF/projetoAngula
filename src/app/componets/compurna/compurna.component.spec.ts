import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompurnaComponent } from './compurna.component';

describe('CompurnaComponent', () => {
  let component: CompurnaComponent;
  let fixture: ComponentFixture<CompurnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompurnaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompurnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
