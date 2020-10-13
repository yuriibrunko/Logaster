import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hp',
  templateUrl: './hp.component.html',
  styleUrls: ['./hp.component.css']
})
export class HPComponent implements OnInit {

  constructor(private _designServices: HeroService) {
    this._designServices.TextHP.subscribe(hp => {
      this.TextHP = hp;
    });
    this._designServices.PrewHp.subscribe(option => {
      this.PrewHp = option;
    });
    this._designServices.FontHp.subscribe(fn => {
      this.FontHp = fn;
    });
   }
   TextHP;
   PrewHp;
   FontHp;
  ngOnInit(): void {
  }
  SetPrewiev(option){
    this._designServices.PrewHp.next(option.value);
  }
  SendHP(hp) {
    this._designServices.TextHP.next(hp.value);
  }
  SetFont(fn) {
    this._designServices.FontHp.next(fn.value);
  }
}
