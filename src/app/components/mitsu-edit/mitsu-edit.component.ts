import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { $$} from 'protractor';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-mitsu-edit',
  templateUrl: './mitsu-edit.component.html',
  styleUrls: ['./mitsu-edit.component.css']
  
})

export class MitsuEditComponent implements OnInit {

  
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
   
   SetPrewiev(option){
    this._designServices.PrewMitsu.next(option.value);
  }
  SendMitsu(mitsu) {
    this._designServices.TextMitsu.next(mitsu.value);
  }
  SetFont(fn) {
    this._designServices.FontMitsu.next(fn.value);
  }
  Cancel() {
    this._designServices.PrewMitsu.next("https://api.logotip.online/uploads/89c8a63419aa4803b72b527345d95041.png");
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
  
