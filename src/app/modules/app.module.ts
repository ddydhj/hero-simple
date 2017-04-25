import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routedComponents } from '../routers/app.router.module';

import { AppComponent } from '../components/root/app.component';
import { HeroSearchComponent } from '../components/hero-search/hero-search.component';
import { HeroService } from '../services/hero.service';
import { HeroSearchService } from '../services/hero-search.service';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService, HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
