import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { UserCardComponent } from './component/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'portfolio', pathMatch: 'full'},
      { path: 'portfolio', component: PortfolioComponent },
      { path: '**', redirectTo: 'portfolio' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
