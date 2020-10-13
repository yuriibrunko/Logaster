import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-bentley',
  templateUrl: './bentley.component.html',
  styleUrls: ['./bentley.component.css']
})
export class BentleyComponent implements OnInit {

  constructor(private _designServices: HeroService) {
    this._designServices.TextBentley.subscribe(bentley => {
      this.TextBentley = bentley;
    });
    this._designServices.PrewBentley.subscribe(option => {
      this.PrewBentley = option;
    });
    this._designServices.FontBentley.subscribe(fn => {
      this.FontBentley = fn;
    });
   }
   TextBentley;
   PrewBentley;
   FontBentley;
  ngOnInit(): void {
  }
  SetPrewiev(option){
    this._designServices.PrewBentley.next(option.value);
  }
  SendBentley(bentley) {
    this._designServices.TextBentley.next(bentley.value);
  }
  SetFont(fn) {
    this._designServices.FontBentley.next(fn.value);
  }
}
