import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent implements OnInit {

  constructor(private _designServices: HeroService) {
    this._designServices.TextWiki.subscribe(wiki => {
      this.TextWiki = wiki;
    });
    this._designServices.PrewWiki.subscribe(option => {
      this.PrewWiki = option;
    });
    this._designServices.FontWiki.subscribe(fn => {
      this.FontWiki = fn;
    });
   }
   TextWiki;
   PrewWiki;
   FontWiki;
   SetPrewiev(option){
    this._designServices.PrewWiki.next(option.value);
  }
  SendWiki(wiki) {
    this._designServices.TextWiki.next(wiki.value);
  }
  SetFont(fn) {
    this._designServices.FontWiki.next(fn.value);
  }
  ngOnInit(): void {
  }
}
