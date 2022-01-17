import { Component, OnInit } from '@angular/core';
import { Joke } from '../../Joke';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  joke!: Joke;


  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke() {
    this.jokeService.getJoke()
    .subscribe(joke => this.joke = joke);
  }

  onChange() {
    this.getJoke();
  }

}
