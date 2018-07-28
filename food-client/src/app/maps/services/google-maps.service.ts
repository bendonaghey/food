import { Injectable, Inject } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable, of, BehaviorSubject, Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  public address = new BehaviorSubject('Search for location...');
  public lat: Subject<number> = new ReplaySubject<number>();
  public lng: Subject<number> = new ReplaySubject<number>();
  constructor() {}

  public getCurrentPosition() {
    // Doesn't get my position correctly even with highAccuracy
    // Close enough though, Good starting point for them to look
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat.next(position.coords.latitude);
          this.lng.next(position.coords.longitude);
        },
        error => {
          if (error) {
            console.log(error);
          }
          this.lat.next(55.009169);
          this.lng.next(-7.306686);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 15000
        }
      );
    } else {
      this.lat.next(55.009169);
      this.lng.next(-7.306686);
    }
  }
  public getAddressFromMarker(lat: number, lng: number) {
    const latlng = new google.maps.LatLng(lat, lng);
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          this.address.next(results[0].formatted_address);
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
  }
}
