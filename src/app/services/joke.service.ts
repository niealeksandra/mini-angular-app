import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { Observable } from 'rx';
import { Joke } from '../Joke';


@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private jokeUrl:string = 'https://icanhazdadjoke.com';
  private httpOptions:object = {
    headers: new HttpHeaders({ 
      'Accept': 'application/json',
    })
  } 



  constructor(private http:HttpClient) { }

  getJoke(){
    return this.http.get<Joke>(this.jokeUrl, this.httpOptions);
  }

}
