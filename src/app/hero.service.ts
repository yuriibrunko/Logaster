import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  TextMitsu = new BehaviorSubject("Shows 3 diamonds representing reliability, success and integrity. This famous logo conveys the meaning of the name in its components and structure.");
  TextApple = new BehaviorSubject("With the idea of ​​sticking to a simple logo design came the bite apple symbol. This came after previous plans to use Isaac Newton's illustration. Their famous logos stand for the dissemination of knowledge from the use of computers. In addition, the concept of human enlightenment is visible in the story of Adam and Eve.");
  TextBentley = new BehaviorSubject("The luxury car manufacturer has a large “B” in its famous logos, which are the initials of the founder's last name. The 'B' in the logo shows two fenders depicting the efficiency of the car.");
  TextHP = new BehaviorSubject("It unites the names of both of its founders. The blue color in the logo characterizes excellence, while the white color suggests grace. H and P tail in the logo symbolizes innovation.");
  TextWiki = new BehaviorSubject("Has a very clever logo that symbolizes an incomplete globe. He represents the nature of knowledge that continues to grow and grow. The puzzles that form the globe have symbols in different languages ​​and countries.");
  PrewApple = new BehaviorSubject("https://api.logotip.online/uploads/5210b7a5f793493ba00d74a085830623.png");
  PrewBentley = new BehaviorSubject("https://api.logotip.online/uploads/1394a4bc60144ee480dc05b9c07b2ee9.png");
  PrewMitsu = new BehaviorSubject("https://api.logotip.online/uploads/89c8a63419aa4803b72b527345d95041.png");
  PrewHp = new BehaviorSubject("https://api.logotip.online/uploads/d9b8a31e36214cbda4cda75bdd64b054.png");
  PrewWiki = new BehaviorSubject("https://api.logotip.online/uploads/e08100ea57774ea0a0b504b802289e24.jpg");
  FontApple = new BehaviorSubject<any>("Roboto");
  FontMitsu = new BehaviorSubject<any>("Roboto");
  FontBentley = new BehaviorSubject<any>("Roboto");
  FontHp = new BehaviorSubject<any>("Roboto");
  FontWiki = new BehaviorSubject<any>("Roboto");
  constructor() { }
}
