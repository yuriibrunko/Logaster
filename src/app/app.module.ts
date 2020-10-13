import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Scrin1Component } from './components/scrin1/scrin1.component';
import { MitsuEditComponent } from './components/mitsu-edit/mitsu-edit.component';
import { AppleEditComponent } from './components/apple-edit/apple-edit.component';
import { BentleyEditComponent } from './components/bentley-edit/bentley-edit.component';
import { HpEditComponent } from './components/hp-edit/hp-edit.component';
import { WikipediaEditComponent } from './components/wikipedia-edit/wikipedia-edit.component';
import { MitsubishiComponent } from '../app/components/mitsubishi/mitsubishi.component'
import { HeroService } from '../app/hero.service';
import { AppleComponent } from './components/apple/apple.component';
import { BentleyComponent } from './components/bentley/bentley.component';
import { HPComponent } from './components/hp/hp.component';
import { WikipediaComponent } from './components/wikipedia/wikipedia.component';



const appRoutes: Routes = [
  {path: '', component:Scrin1Component},
  {path: 'editMitsu', component:MitsuEditComponent},
  {path: 'editApple', component:AppleEditComponent},
  {path: 'editBentley', component:BentleyEditComponent},
  {path: 'editHp', component:HpEditComponent},
  {path: 'editWikipedia', component:WikipediaEditComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    Scrin1Component,
    MitsuEditComponent,
    AppleEditComponent,
    BentleyEditComponent,
    HpEditComponent,
    WikipediaEditComponent,
    MitsubishiComponent,
    AppleComponent,
    BentleyComponent,
    HPComponent,
    WikipediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
