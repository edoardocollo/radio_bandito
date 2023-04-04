import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProssimiInOndaComponent } from './prossimi-in-onda.component';

describe('ProssimiInOndaComponent', () => {
  let component: ProssimiInOndaComponent;
  let fixture: ComponentFixture<ProssimiInOndaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProssimiInOndaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProssimiInOndaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
