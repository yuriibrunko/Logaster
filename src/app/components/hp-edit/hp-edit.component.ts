import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hp-edit',
  templateUrl: './hp-edit.component.html',
  styleUrls: ['./hp-edit.component.css']
})
export class HpEditComponent implements OnInit {

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
   SetPrewiev(option){
    this._designServices.PrewHp.next(option.value);
  }
  SendHP(hp) {
    this._designServices.TextHP.next(hp.value);
  }
  SetFont(fn) {
    this._designServices.FontHp.next(fn.value);
  }
  Cancel() {
    this._designServices.PrewHp.next("https://api.logotip.online/uploads/d9b8a31e36214cbda4cda75bdd64b054.png");
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
