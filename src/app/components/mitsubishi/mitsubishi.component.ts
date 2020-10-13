import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-mitsubishi',
  templateUrl: './mitsubishi.component.html',
  styleUrls: ['./mitsubishi.component.css']
})
export class MitsubishiComponent implements OnInit {

  constructor(private _designServices: HeroService) {
    this._designServices.TextMitsu.subscribe(mitsu => {
      this.TextMitsu = mitsu;
    });
    this._designServices.PrewMitsu.subscribe(option => {
      this.PrewMitsu = option;
    });
    this._designServices.FontMitsu.subscribe(fn => {
      this.FontMitsu = fn;
    });
   }
   TextMitsu;
   PrewMitsu;
   FontMitsu;
  ngOnInit(): void {
  }
  
  SetPrewiev(option){
    this._designServices.PrewMitsu.next(option.value);
  }
  SendMitsu(mitsu) {
    this._designServices.TextMitsu.next(mitsu.value);
  }
  SetFont(fn) {
    this._designServices.FontMitsu.next(fn.value);
  }
}
