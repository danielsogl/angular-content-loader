import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContentLoaderModule } from '../../projects/content-loader/src/lib/content-loader.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContentLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
