import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-wikipedia-edit',
  templateUrl: './wikipedia-edit.component.html',
  styleUrls: ['./wikipedia-edit.component.css']
})
export class WikipediaEditComponent implements OnInit {

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
   SendWiki(wiki) {
    this._designServices.TextWiki.next(wiki.value);
  }
    SetFont(fn) {
    this._designServices.FontWiki.next(fn.value);
  }
    SetPrewiev(option){
    this._designServices.PrewWiki.next(option.value);
  }
  Cancel() {
    this._designServices.PrewWiki.next("https://api.logotip.online/uploads/e08100ea57774ea0a0b504b802289e24.jpg");
  }
  ngOnInit(): void {
  }
  drawCircle() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(45,50,40,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
  }
  
  drawTriangle() {
      var canvas = document.getElementById('canvas');
      if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    var triangle = {
      x1: 30, 
      y1: 0, 
      x2: 0, 
      y2: 59, 
      x3: 30, 
      y3: 59 
    }
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(triangle.x1, triangle.y1);
    ctx.lineTo(triangle.x2, triangle.y2);
    ctx.lineTo(triangle.x3, triangle.y3);
    ctx.lineTo(triangle.x1, triangle.y1);
    ctx.closePath();
    ctx.stroke();
  }
  drawSquare() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(5, 20, 60, 60);
    ctx.stroke();
  }
}
