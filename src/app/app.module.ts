import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './Services/github.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    NavegacaoModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
