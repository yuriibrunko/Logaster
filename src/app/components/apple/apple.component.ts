import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  constructor(private _designServices: HeroService) {
    this._designServices.TextApple.subscribe(app => {
      this.TextApple = app;
    });
    this._designServices.PrewApple.subscribe(option => {
      this.PrewApple = option;
    });
    this._designServices.FontApple.subscribe(fn => {
      this.FontApple = fn;
    });
   }

   TextApple;
   PrewApple;
   FontApple;
  
  ngOnInit(): void {
  }  
  SetPrewiev(option){
    this._designServices.PrewApple.next(option.value);
  }
  SendApple(app) {
    this._designServices.TextApple.next(app.value);
  }
  SetFont(fn) {
    this._designServices.FontApple.next(fn.value);
  }
}
