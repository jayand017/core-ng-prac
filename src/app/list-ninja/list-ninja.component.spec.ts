import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNinjaComponent } from './list-ninja.component';

describe('ListNinjaComponent', () => {
  let component: ListNinjaComponent;
  let fixture: ComponentFixture<ListNinjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNinjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
