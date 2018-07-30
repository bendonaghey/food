// Needed for typings
/// <reference types="googlemaps" />;

import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { GoogleMapsService } from '../services/google-maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public markerAddress: any;
  public lat: number;
  public lng: number;
  public zoom = 12;

  @ViewChild('search') public searchElementRef: ElementRef;
  public searchControl: FormControl;

  constructor(
    private googleMapsService: GoogleMapsService,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader
  ) {}
  ngOnInit() {
    this.googleMapsService.getCurrentPosition();
    this.googleMapsService.lat.subscribe(res => {
      this.lat = res;
    });
    this.googleMapsService.lng.subscribe(res => {
      this.lng = res;
    });
    this.googleMapsService.address.subscribe(res => {
      this.markerAddress = res;
    });

    this.searchAddress();
  }

  public onChooseLocation(event) {
    this.googleMapsService.getAddressFromMarker(
      (this.lat = event.coords.lat),
      (this.lng = event.coords.lng)
    );
  }

  public searchAddress() {
    this.searchControl = new FormControl();

    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ['address']
        }
      );
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.markerAddress = place.formatted_address;
          this.googleMapsService.address.next(this.markerAddress);
          this.googleMapsService.lat.next(this.lat);
          this.googleMapsService.lng.next(this.lng);
        });
      });
    });
  }

  public zoomChange(event) {
    this.zoom = event;
  }
}
