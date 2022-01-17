import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  private weatherUrl1:string = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private weatherUrl2:string = '&appid=d0625c8b7287bdfd85a61727e3c7544d';


  constructor(private http:HttpClient) { }


  getWeather(city: string){
    return this.http.get(this.weatherUrl1 + city + this.weatherUrl2);
  }

}
