import { Injectable, Inject } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable, of } from 'rxjs';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  address = '';

  constructor() {}

  public getCurrentPosition(lat: number, lng: number) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
      });
    }
  }

  public getAddressFromMarker(lat: number, lng: number): Observable<any> {
    const latlng = new google.maps.LatLng(lat, lng);
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          console.log(results[0].formatted_address);
          this.address = results[0].formatted_address;
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });

    return of(this.address);
  }
}
