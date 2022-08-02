import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'da5d9bc4180687928dce2cd958f7df34';
  constructor(private http: HttpClient) 
  { }

  getWeatherDataByCoordinates(lat, lon) {
    console.log(lat)
    console.log(lon)
    let params = new HttpParams()
      .set('lat', lat)
      .set('lon', lon)
      .set('units', 'metric')
      .set('appid', this.apiKey)
    return this.http.get(this.url, { params });
  }
  
  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'metric')
    .set('appid', this.apiKey)

    return this.http.get(this.url, { params })
  }
}
