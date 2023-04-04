import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SostieniComponent } from './sostieni.component';

describe('SostieniComponent', () => {
  let component: SostieniComponent;
  let fixture: ComponentFixture<SostieniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SostieniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SostieniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
