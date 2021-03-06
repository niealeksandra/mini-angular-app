import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  city!: string;
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.city) {
      alert('Please pick city')
      return
    }

    this.weatherService.getWeather(this.city)
    .subscribe(weather => this.weather = weather);

  }



}
