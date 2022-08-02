import { Component, ComponentRef, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-maps-n-marker',
  templateUrl: './maps-n-marker.component.html',
  styleUrls: ['./maps-n-marker.component.css']
})
export class MapsNMarkerComponent implements OnInit {


  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 5;
  display: google.maps.LatLngLiteral = this.center;

  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [this.center];
  temporary: google.maps.LatLngLiteral
  weather: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.pop()
    this.markerPositions.push(event.latLng.toJSON());
    // this.center = this.markerPositions[0]
    this.weatherService.getWeatherDataByCoordinates(this.markerPositions[0].lat, this.markerPositions[0].lng).subscribe(data => {
      this.weather = data;
    })

  }

  // moveMap(event: google.maps.MapMouseEvent) {
  //   this.center = (event.latLng.toJSON());
  // }


  // move(event: google.maps.MapMouseEvent) {
  //   this.display = event.latLng.toJSON();
  // }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.temporary = { lat: success.coords.latitude, lng: success.coords.longitude };
        this.center = this.temporary
        this.markerPositions.pop()
        this.markerPositions.push(this.temporary)
        console.log(this.temporary)
        this.weatherService.getWeatherDataByCoordinates(this.temporary.lat, this.temporary.lng).subscribe(data => {
          this.weather = data;
        })
      })
    }
  }



  getCity(city: string) {
    this.weatherService.getWeatherDataByCityName(city).subscribe(data => {
      this.weather = data;
      this.temporary = { lat: this.weather.coord.lat, lng: this.weather.coord.lon };
      this.markerPositions.pop()
      this.markerPositions.push(this.temporary);
      this.center = this.temporary
    })

  }
}
