import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-apple-edit',
  templateUrl: './apple-edit.component.html',
  styleUrls: ['./apple-edit.component.css']
})
export class AppleEditComponent implements OnInit {

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
   FontApple
   SetPrewiev(option){
     this._designServices.PrewApple.next(option.value);
   }
   SendApple(app) {
    this._designServices.TextApple.next(app.value);
  }
  Cancel() {
    this._designServices.PrewApple.next("https://api.logotip.online/uploads/5210b7a5f793493ba00d74a085830623.png");
  }
  SetFont(fn) {
    this._designServices.FontApple.next(fn.value);
  }
  @Output() onDraw = new EventEmitter();
  data
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
