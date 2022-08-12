import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNesneleriComponent } from './form-nesneleri.component';

describe('FormNesneleriComponent', () => {
  let component: FormNesneleriComponent;
  let fixture: ComponentFixture<FormNesneleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNesneleriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNesneleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
