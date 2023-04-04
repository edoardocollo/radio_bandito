import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammiComponent } from './programmi.component';

describe('ProgrammiComponent', () => {
  let component: ProgrammiComponent;
  let fixture: ComponentFixture<ProgrammiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
