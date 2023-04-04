import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOndaComponent } from './in-onda.component';

describe('InOndaComponent', () => {
  let component: InOndaComponent;
  let fixture: ComponentFixture<InOndaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InOndaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InOndaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
