import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mockMapsAPILoader: any;


  beforeEach(async(() => {
    mockMapsAPILoader = jasmine.createSpyObj('mapsAPILoader', ['load']);
    mockMapsAPILoader.load.and.returnValue({then: () => {}});
    TestBed.configureTestingModule({
      declarations: [MapComponent],
      imports: [ReactiveFormsModule],
      providers: [
        MapsAPILoader,
        { provide: MapsAPILoader, useValue: mockMapsAPILoader }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
