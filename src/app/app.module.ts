import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SanitizeUrlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
