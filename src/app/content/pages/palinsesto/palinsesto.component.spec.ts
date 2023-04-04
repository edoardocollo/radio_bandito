import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalinsestoComponent } from './palinsesto.component';

describe('PalinsestoComponent', () => {
  let component: PalinsestoComponent;
  let fixture: ComponentFixture<PalinsestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalinsestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalinsestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
