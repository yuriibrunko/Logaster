import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-bentley-edit',
  templateUrl: './bentley-edit.component.html',
  styleUrls: ['./bentley-edit.component.css']
})
export class BentleyEditComponent implements OnInit {

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
   
   SetPrewiev(option){
    this._designServices.PrewBentley.next(option.value);
  }
  SendBentley(bentley) {
    this._designServices.TextBentley.next(bentley.value);
  }
  SetFont(fn) {
    this._designServices.FontBentley.next(fn.value);
  }
  Cancel() {
    this._designServices.PrewBentley.next("https://api.logotip.online/uploads/1394a4bc60144ee480dc05b9c07b2ee9.png");
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
