import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNinjaComponent } from './add-ninja.component';

describe('AddNinjaComponent', () => {
  let component: AddNinjaComponent;
  let fixture: ComponentFixture<AddNinjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNinjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
