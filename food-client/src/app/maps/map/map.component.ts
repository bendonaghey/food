import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { GoogleMapsService } from '../services/google-maps.service';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public markerAddress: string;
  public zoom: number;
  public lat: number;
  public lng: number;

  @ViewChild('search') public searchElementRef: ElementRef;
  public searchControl: FormControl;

  constructor(
    private googleMapsService: GoogleMapsService,
    private ngZone: NgZone,
    private mapsAPILoader: MapsAPILoader
  ) {}
  ngOnInit() {
    this.lat = 54.993706;
    this.lng = -7.292497;
    this.zoom = 14;
    this.googleMapsService.getCurrentPosition(this.lat, this.lng);

    this.searchAddress();
  }

  public onChooseLocation(event) {
    this.googleMapsService
      .getAddressFromMarker(
        (this.lat = event.coords.lat),
        (this.lng = event.coords.lng)
      )
      .subscribe(res => {
        console.log(res);

        this.markerAddress = res;
      });
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
          this.markerAddress = place.name;
        });
      });
    });
  }
}
